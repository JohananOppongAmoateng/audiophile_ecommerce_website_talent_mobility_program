"use client";

import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Flex,
  HStack,
  IconButton,
  Link,
  NumberInput,
  Portal,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { FiShoppingCart } from "react-icons/fi";

const CartModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { items, updateQty, clearCart, totalPrice, totalItems } = useCart();

  return (
    <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Dialog.Trigger asChild>
        <IconButton variant="outline" size="sm">
 
      <FiShoppingCart />
        </IconButton>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Cart ({totalItems}) </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <VStack gap={4} align="stretch">
                {items.map((item) => (
                  <HStack key={item.slug} gap={4}>
                    <Box boxSize="60px" pos="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "100%" }}
                      />
                    </Box>
                    <VStack gap={0} align="start">
                      <Text fontWeight="bold">{item.name}</Text>
                      <Text>${item.price.toLocaleString()}</Text>
                    </VStack>
                    <Spacer />
                    <NumberInput.Root
                      size="sm"
                      maxW="80px"
                      value={item.quantity.toString()}
                      min={1}
                      onValueChange={(v) => updateQty(item.slug, Number(v))}
                    >
                      <NumberInput.Label />
                      <NumberInput.ValueText />
                      <NumberInput.Control>
                        <NumberInput.IncrementTrigger />
                        <NumberInput.DecrementTrigger />
                      </NumberInput.Control>
                      <NumberInput.Scrubber />
                      <NumberInput.Input />
                    </NumberInput.Root>
                  </HStack>
                ))}
              </VStack>
              <Flex mt={6} align="center">
                <Text fontWeight="bold">Total</Text>
                <Spacer />
                <Text fontSize="xl">${totalPrice.toLocaleString()}</Text>
              </Flex>
              <Link href="/checkout">
                <Button
                  colorScheme="orange"
                  width="full"
                  mt={4}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Checkout
                </Button>
              </Link>
            </Dialog.Body>
            <Dialog.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default CartModal;
