import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";


export default function Categories() {
    return     <Box maxW="7xl" mx="auto" px={6} py={16}>
            <SimpleGrid columns={{ base: 1, sm: 3 }} gap={8}>
              {[
                { label: "Headphones", img: "/assets/shared/desktop/image-category-thumbnail-headphones.png", href: "/headphones" },
                { label: "Speakers", img: "/assets/shared/desktop/image-category-thumbnail-speakers.png", href: "/speakers" },
                { label: "Earphones", img: "/assets/shared/desktop/image-category-thumbnail-earphones.png", href: "/earphones" },
              ].map((cat) => (
                <Link key={cat.label} href={cat.href} >
                  <Box
                    bg="gray.100"
                    rounded="md"
                   
                    textAlign="center"
                    py={0}
                    _hover={{ shadow: "md" }}
                  >
                    <Image src={cat.img} width={500}  height={500} alt={cat.label} />
                    <Text mt={4} fontWeight="bold" letterSpacing="widest">
                      {cat.label}
                    </Text>
                    <Text mt={2} color="orange.400" fontSize="sm" letterSpacing="widest">
                      Shop &rarr;
                    </Text>
                  </Box>
                </Link>
              ))}
            </SimpleGrid>
          </Box>
}