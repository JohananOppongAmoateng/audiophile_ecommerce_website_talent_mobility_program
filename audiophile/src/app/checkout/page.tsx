"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import { useCart } from "../../contexts/CartContext";
import { useState } from "react";
import ThankYouModal from "../../components/thank-you-modal";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("e-Money");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you’d send data to your server…
    setShowThankYou(true);
    clearCart();
  };

  return (
    <Box>
      <Header/>
    <Box maxW="7xl" mx="auto" px={6} py={16}>
      <Heading mb={8}>Checkout</Heading>

        <form
            className="flex-2 bg-white p-6 rounded-lg shadow-md"
            onSubmit={handleSubmit}
        >
            <div className="mb-4">
                <label htmlFor="name" className="block mb-1 font-medium">
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="address" className="block mb-1 font-medium">
                    Address
                </label>
                <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="123 Main St"
                    required
                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="city" className="block mb-1 font-medium">
                    City
                </label>
                <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="City"
                    required
                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="country" className="block mb-1 font-medium">
                    Country
                </label>
                <input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Country"
                    required
                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
            <button
                type="submit"
                className="w-full py-3 bg-orange-400 text-white rounded font-semibold text-lg hover:bg-orange-500 transition"
            >
                Continue &amp; Pay
            </button>
        </form>
    

        {/** Summary panel **/}
        <Box flex="1" bg="gray.50" p={6} rounded="md">
          <Text fontWeight="bold" mb={4}>
            Summary
          </Text>
          <Stack gap={4} mb={6}>
            {items.map((i) => (
              <Flex key={i.slug} align="center">
                
                <Box>
                  <Text fontWeight="bold">{i.name}</Text>
                  <Text>${i.price.toLocaleString()}</Text>
                </Box>
                <Spacer />
                <Text>x{i.quantity}</Text>
              </Flex>
            ))}
          </Stack>
          <Flex justify="space-between" mb={2}>
            <Text>Total</Text>
            <Text>${totalPrice.toLocaleString()}</Text>
          </Flex>
          <Flex justify="space-between" mb={2}>
            <Text>Shipping</Text>
            <Text>$50</Text>
          </Flex>
          <Flex justify="space-between" mb={2}>
            <Text>VAT (incl.)</Text>
            <Text>${Math.round(totalPrice * 0.2).toLocaleString()}</Text>
          </Flex>
          <Flex justify="space-between" fontWeight="bold" fontSize="xl">
            <Text>Grand Total</Text>
            <Text color="orange.400">
              ${(totalPrice + 50 + Math.round(totalPrice * 0.2)).toLocaleString()}
            </Text>
          </Flex>
        </Box>
      

      <ThankYouModal
        open={showThankYou}
      />
    </Box>
    <Footer />

    </Box>
  );
}
