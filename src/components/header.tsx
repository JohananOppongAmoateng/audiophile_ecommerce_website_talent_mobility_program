import {
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  Icon,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import CartModal from "./cart-modal";

export default function Header() {
  const bg = useColorModeValue("light", "");

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      px={{ base: 4, md: 8 }}
      py={4}
      bg={bg}
      boxShadow="sm"
    >
      {/* Logo */}
      <ChakraLink fontSize="xl" fontWeight="black" href="/">
      Audiophile
      </ChakraLink>

      {/* Nav links */}
      <HStack as="nav" gap={8}>
      {["home", "headphones", "speakers", "earphones"].map((item) => (
        <ChakraLink
        href={item === "home" ? "/" : `/products/${item}`}
        textTransform="uppercase"
        fontSize="sm"
        letterSpacing="widest"
        _hover={{ color: "orange.400" }}
        key={item}
        >
        {item}
        </ChakraLink>
      ))}
      </HStack>
      <CartModal>
      
      </CartModal>
    </Flex>
  );
}
