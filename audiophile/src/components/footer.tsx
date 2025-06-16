// components/Footer.js
"use client";

import NextLink from "next/link";
import {
  Box,
  Flex,
  Link as ChakraLink,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const bg = useColorModeValue("gray.900", "gray.900");
  const textColor = useColorModeValue("white", "white");
  const linkHover = useColorModeValue("orange.400", "orange.400");

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Headphones", href: "/products/headphones" },
    { label: "Speakers", href: "/products/speakers" },
    { label: "Earphones", href: "/products/earphones" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com" },
    { icon: FaTwitter, href: "https://twitter.com" },
    { icon: FaInstagram, href: "https://instagram.com" },
  ];

  return (
    <Box as="footer" bg={bg} color={textColor} py={16} px={{ base: 6, md: 12 }}>
      {/* top row: logo + nav + social */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="flex-start"
      >
        {/* Logo */}
        <ChakraLink
          as={NextLink}
          href="/"
          fontSize="2xl"
          fontWeight="black"
          mb={{ base: 8, md: 0 }}
        >
          audiophile
        </ChakraLink>

        {/* Nav & Social */}
        <Box textAlign={{ base: "center", md: "right" }}>
          <HStack
            as="nav"
            gap={6}
           
            justify={{ base: "center", md: "flex-end" }}
          >
            {navItems.map((item) => (
              <ChakraLink
                key={item.href}
                as={NextLink}
                href={item.href}
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="widest"
                _hover={{ color: linkHover }}
              >
                {item.label}
              </ChakraLink>
            ))}
          </HStack>

          <HStack
          gap={4}
            mt={8}
            justify={{ base: "center", md: "flex-end" }}
          >
            {socialLinks.map(({ icon: Icon, href }) => (
              <ChakraLink key={href} href={href} fontSize="xl">
                <Icon />
              </ChakraLink>
            ))}
          </HStack>
        </Box>
      </Flex>

      {/* description */}
      <Box mt={12} maxW="3xl" mx={{ base: "auto", md: 0 }}>
        <Text fontSize="sm" color="gray.400" textAlign={{ base: "center", md: "left" }}>
          Audiophile is an all in one stop to fulfill your audio needs. We’re a small team of
          music lovers and sound specialists who are devoted to helping you get the most out of
          your personal audio. Come and visit our demo facility — we’re open 7 days a week.
        </Text>
      </Box>

      {/* copyright */}
      <Text
        fontSize="xs"
        color="gray.500"
        textAlign="center"
        mt={12}
      >
        Copyright 2021. All Rights Reserved
      </Text>
    </Box>
  );
}
