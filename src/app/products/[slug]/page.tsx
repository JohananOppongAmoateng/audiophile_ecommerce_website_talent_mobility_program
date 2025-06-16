'use client';
import Header from "@/components/header";
import { Box, Heading, SimpleGrid, Flex, Button,Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
// @ts-ignore
import data from "../../../../data.json";
import Footer from "@/components/footer";
import BringingYou from "@/components/bringing_you";
import Categories from "@/components/categories";



export default function ProductsCategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const products = data.filter((item:any) => item.category === slug);
  if (products.length === 0) {
    return <Box textAlign="center" py={20}>
        <Heading as="h1" size="2xl" mb={4}>
          No Products Found
        </Heading>
        <Text color="gray.600">
          We couldn't find any products in this category.
        </Text>
      </Box>
  }
    return (
    <Box>
      <Header/>
      {/* Hero */}
      <Box bg="gray.900" py={20} textAlign="center">
        <Heading as="h1" size="2xl" color="white">
          {products[0].category.toUpperCase()}
        </Heading>
      </Box>

      {/* Products */}
      <Box maxW="7xl" mx="auto" px={6} py={16}>
        <SimpleGrid columns={{ base: 1, md: 1 }} gap={20}>
          {products.map((p, i) => (
            <Flex
              key={p.id}
              direction={{ base: "column", md: i % 2 === 0 ? "row" : "row-reverse" }}
              align="center"
              gap={8}
            >
              {/* Image */}
              <Box flex="1" position="relative" w="full" h={{ base: "300px", md: "400px" }}>
                <Image
                  src={p.image.desktop}
                  alt={p.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </Box>

              {/* Text */}
              <Box flex="1" textAlign={{ base: "center", md: "left" }}>
                {p.new && (
                  <Text
                    textTransform="uppercase"
                    letterSpacing="widest"
                    color="orange.400"
                    mb={4}
                  >
                    New Product
                  </Text>
                )}
                <Heading as="h2" size="xl" mb={4}>
                  {p.name}
                </Heading>
                <Text color="gray.600" mb={6}>
                  {p.description}
                </Text>
                <Link href={`/products/${slug}/${p.slug}`}>
                  <Button
                    bg="orange.400"
                    color="white"
                    _hover={{ bg: "orange.500" }}
                    size="md"
                  >
                    See Product
                  </Button>
                </Link>
              </Box>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>

      {/* Bottom categories */}
      <Categories />

      {/* “Bringing you…” */}
      <BringingYou/>
      <Footer />
    </Box>
    
    )

}