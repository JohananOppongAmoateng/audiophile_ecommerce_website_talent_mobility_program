"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Flex,
  Grid,
  SimpleGrid,
  Heading,
  Text,
  Button,
  NumberInput,
} from "@chakra-ui/react";

// @ts-ignore
import data from "../../../../../data.json";
import BringingYou from "@/components/bringing_you";
import Categories from "@/components/categories";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

export default function ProductDetail({params}: {params: { name: string , slug: string}}) {
  const { name } = params;
  const array = data.filter((item: any) => item.slug === name);
  const product = array[0];
   const [value, setValue] = useState("10")
   const {addItem} = useCart();
  if (!product) {
    return (
      <Box maxW="7xl" mx="auto" px={6} py={16}>
        <Heading as="h1" size="2xl" mb={4}>
          Product not found
        </Heading>
        <Link href="/" passHref>
          <Text color="gray.600" mt={8} cursor="pointer">
            &larr; Go Back
          </Text>
        </Link>
      </Box>
    );
  }

  return (
    <Box>
      <Header />
    <Box maxW="7xl" mx="auto" px={6} py={16}>
      {/* Go Back */}
      <Link href={`/products/${product.category}`} passHref>
        <Text color="gray.600" mb={8} cursor="pointer">
          &larr; Go Back
        </Text>
      </Link>

      {/* Hero: image + info */}
      <Flex direction={{ base: "column", md: "row" }} align="center" gap={12}>
        <Box
          flex="1"
          position="relative"
          w="full"
          h={{ base: "300px", md: "450px" }}
        >
          <Image
            src={product.image.desktop}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </Box>
        <Box flex="1" textAlign={{ base: "center", md: "left" }}>
          {product.new && (
            <Text
              textTransform="uppercase"
              letterSpacing="widest"
              color="orange.400"
              mb={4}
            >
              New Product
            </Text>
          )}
          <Heading as="h1" size="2xl" mb={4}>
            {product.name}
          </Heading>
          <Text color="gray.600" mb={6}>
            {product.description}
          </Text>
          <Heading as="h2" size="lg" mb={6}>
            ${product.price}
          </Heading>

          <Flex
            align="center"
            justify={{ base: "center", md: "flex-start" }}
            gap={4}
          >
            <NumberInput.Root value={value}
      onValueChange={(e) => setValue(e.value)}>
              <NumberInput.Label />
              <NumberInput.ValueText />
              <NumberInput.Control>
                <NumberInput.IncrementTrigger />
                <NumberInput.DecrementTrigger />
              </NumberInput.Control>
              <NumberInput.Scrubber />
              <NumberInput.Input />
            </NumberInput.Root>
            <Button bg="orange.400" color="white" _hover={{ bg: "orange.500" }} onClick={() => addItem({slug: product.slug, name: product.name, price: product.price, }, Number(value))}>
              Add to Cart
            </Button>
          </Flex>
        </Box>
      </Flex>

      {/* Features & In the Box */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={16} mt={20}>
        <Box>
          <Heading as="h3" size="md" mb={4}>
            Features
          </Heading>
          <Text color="gray.600" whiteSpace="pre-line">
            {product.features}
          </Text>
        </Box>
        <Box>
          <Heading as="h3" size="md" mb={4}>
            In the Box
          </Heading>
          {product.includes.map(({ quantity, item }) => (
            <Flex key={item} align="center" mb={2}>
              <Text fontWeight="bold" mr={4}>
                {quantity}x
              </Text>
              <Text color="gray.600">{item}</Text>
            </Flex>
          ))}
        </Box>
      </SimpleGrid>

      {/* Gallery */}
      <Grid
        templateAreas={{
          base: `"a" "b" "c"`,
          md: ` "a b"
                  "a c"`,
        }}
        gridTemplateRows={{ md: "1fr 1fr" }}
        gridTemplateColumns={{ md: "1fr 1fr" }}
        gap={4}
        mt={20}
      >
        <Box
          gridArea="a"
          position="relative"
          w="full"
          h={{ base: "200px", md: "400px" }}
        >
          <Image
            src={product.gallery.first.desktop}
            alt=""
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </Box>
        <Box gridArea="b" position="relative" w="full" h="200px">
          <Image
            src={product.gallery.second.desktop}
            alt=""
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </Box>
        <Box gridArea="c" position="relative" w="full" h="200px">
          <Image
            src={product.gallery.third.desktop}
            alt=""
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </Box>
      </Grid>

      {/* You May Also Like */}
      <Box textAlign="center" mt={20}>
        <Heading as="h3" size="lg" mb={12}>
          You May Also Like
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          {product.others.map((p) => (
            <Box key={p.slug} bg="gray.50" rounded="md" p={6}>
              <Box position="relative" w="full" h="200px" mb={6}>
                <Image
                  src={p.image.desktop}
                  alt={p.name}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
              <Text fontWeight="bold" mb={4}>
                {p.name}
              </Text>
              {/* Find the full product info for the related product */}
              {(() => {
                const related = data.find(
                  (item: any) => item.slug === p.slug
                );
                if (!related) return null;
                return (
                  <Link
                    href={`/${related.category}/${related.category}/${related.slug.replace(/\s+/g, '-').toLowerCase()}`}
                    passHref
                  >
                    <Button
                      size="sm"
                      bg="orange.400"
                      color="white"
                      _hover={{ bg: "orange.500" }}
                    >
                      See Product
                    </Button>
                  </Link>
                );
              })()}
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
     {/* Bottom categories */}
          <Categories />
    
          {/* “Bringing you…” */}
          <BringingYou/>
          <Footer />
    </Box>

  );
}