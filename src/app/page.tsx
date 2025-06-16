'use client';
import Header from "@/components/header";
import Image from "next/image";
import { Box, Heading, Text, Button, Flex, Link } from "@chakra-ui/react"
import Footer from "@/components/footer";
import BringingYou from "@/components/bringing_you";
import Categories from "@/components/categories";

export default function Home() {
 return (
    <Box>
      <Header />

      {/** HERO **/}
      <Flex
        bg="gray.900"
        color="white"
        direction={{ base: "column", md: "row" }}
        align="center"
        px={6}
        py={20}
        gap={12}
      >
        <Box flex="1" textAlign={{ base: "center", md: "left" }} gap={6}>
          <Text
            textTransform="uppercase"
            letterSpacing="widest"
            color="orange.400"
            mb={4}
          >
            New Product
          </Text>
          <Heading as="h1" size="2xl" mb={6}>
            XX99 Mark II Headphones
          </Heading>
          <Text fontSize="lg" mb={8}>
            Experience natural, lifelike audio and exceptional build quality made
            for the passionate music enthusiast.
          </Text>
          <Link href="/products/headphones/xx99-mark-two-headphones">
            <Button bg="orange.400" color="white" _hover={{ bg: "orange.500" }}>
              See Product
            </Button>
          </Link>
        </Box>

        <Box flex="1" position="relative" w="full" h={{ base: "250px", md: "500px" }}>
          <Image

            src="/assets/home/desktop/image-hero.jpg"
            alt="XX99 Mark II Headphones"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </Box>
      </Flex>

      {/** CATEGORY LINKS **/}
        <Categories/>
      {/** FEATURED BLOCKS **/}
      <Box>
        {/** ZX9 SPEAKER **/}
        <Flex
          bg="orange.400"
          color="white"
          direction={{ base: "column", md: "row" }}
          align="center"
          px={6}
          py={20}
          gap={12}
          overflow="hidden"
        >
          <Box flex="1" position="relative" w="full" h={{ base: "200px", md: "400px" }}>
            <Image
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="ZX9 Speaker"
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <Box flex="1" textAlign={{ base: "center", md: "left" }}>
            <Heading as="h2" size="2xl" mb={6}>
              ZX9 Speaker
            </Heading>
            <Text fontSize="lg" mb={8} fontWeight="medium">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </Text>
            <Link href="/products/speakers/zx9-speaker" >
              <Button
                variant="solid"
                bg="black"
                color="white"
                _hover={{ bg: "gray.800" }}
              >
                See Product
              </Button>
            </Link>
          </Box>
        </Flex>

        {/** ZX7 SPEAKER **/}
        <Flex
          bg="gray.100"
          direction={{ base: "column", md: "row-reverse" }}
          align="center"
          px={6}
          py={20}
          gap={12}
        >
          <Box flex="1">
            <Heading as="h2" size="2xl" mb={6}>
              ZX7 Speaker
            </Heading>
            <Link href="/products/speakers/zx7-speaker">
              <Button variant="outline" borderColor="black" color="black">
                See Product
              </Button>
            </Link>
          </Box>
          <Box flex="1" position="relative" w="full" h={{ base: "200px", md: "400px" }}>
            <Image
              src="/assets/home/desktop/image-speaker-zx7.jpg"
              alt="ZX7 Speaker"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Flex>

        {/** YX1 EARPHONES **/}
        <Flex
          bg="gray.800"
          color="white"
          direction={{ base: "column", md: "row" }}
          align="center"
          px={6}
          py={20}
          gap={12}
        >
          <Box flex="1" position="relative" w="full" h={{ base: "200px", md: "400px" }}>
            <Image
              src="/assets/home/desktop/image-earphones-yx1.jpg"
              alt="YX1 Earphones"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Box flex="1" textAlign={{ base: "center", md: "left" }}>
            <Heading as="h2" size="2xl" mb={6}>
              YX1 Earphones
            </Heading>
            <Link href="/products/earphones/yx1-earphones" >
              <Button variant="outline" borderColor="white" color="white">
                See Product
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>

      {/** “BRINGING YOU…” **/}
      <BringingYou/>
          <Footer/>
    </Box>
  )
}
