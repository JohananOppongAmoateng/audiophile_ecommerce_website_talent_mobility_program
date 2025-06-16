// src/components/ThankYouModal.tsx
"use client";
import {
  Button,
  ButtonGroup,
  CloseButton,
  Dialog,
  Portal,
  Text,
  Box,
  Flex,
  Heading,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { FiCheck } from "react-icons/fi";
import { useCart } from "@/contexts/CartContext";

interface ThankYouItem {
  name: string;
  price: number;
  quantity: number;
}

interface ThankYouProps {
    open: boolean,
}

const  ThankYouModal = ({ open }: ThankYouProps) => {
  const {grandTotal, items} = useCart();

  const first = items[0];
  const rest = items.length - 1;

  return (
    <Dialog.Root size="md" open={open}>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="sm"></Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.CloseTrigger asChild pos="initial">
                <CloseButton />
              </Dialog.CloseTrigger>
              <Dialog.Title flex="1">Dialog Title</Dialog.Title>
              <ButtonGroup>
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </ButtonGroup>
            </Dialog.Header>
            <Dialog.Body>
                {items.length === 0 ? (
                  <Box textAlign="center" mb={6}>
                    <Heading size="md" mb={2}>
                      No items in your order.
                    </Heading>
                    <Text color="gray.500">
                      Your cart is empty. Please add items to place an order.
                    </Text>
                  </Box>
                ) :(<><Box textAlign="center" mb={6}>
                  <Flex align="center" justify="center" mb={4}>
                    <Box
                      boxSize="48px"
                      bg="orange.400"
                      rounded="full"
                      color="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <FiCheck size="24px" />
                    </Box>
                  </Flex>
                  <Heading size="lg" mb={2}>
                    Thank you for your order
                  </Heading>
                  <Text color="gray.600">
                    You will receive an email confirmation shortly.
                  </Text>
                </Box><Flex
                  bg="gray.50"
                  p={4}
                  rounded="md"
                  mb={6}
                >
                    <VStack align="start" gap={2} flex="1">
                      <Flex align="center">

                        <Box>
                          <Text fontWeight="bold">{first.name}</Text>
                          <Text>${first.price.toLocaleString()}</Text>
                        </Box>
                        <Spacer />
                        <Text>x{first.quantity}</Text>
                      </Flex>
                      {rest > 0 && (
                        <Text color="gray.600">and {rest} other item(s)</Text>
                      )}
                    </VStack>

                    <Box
                      bg="black"
                      color="white"
                      p={4}
                      rounded="md"
                      textAlign="center"
                      minW="150px"
                    >
                      <Text fontSize="sm">Grand Total</Text>
                      <Heading size="md">${grandTotal.toLocaleString()}</Heading>
                    </Box>
                  </Flex></>) }
              
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ThankYouModal;
