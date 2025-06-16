import { Box, Flex, Heading, Text} from "@chakra-ui/react";
import Image from "next/image";

export default function BringingYou() {
    return <Flex
        maxW="7xl"
        mx="auto"
        px={6}
        py={16}
        direction={{ base: "column", md: "row" }}
        align="center"
        gap={12}
      >
        <Box flex="1">
          <Text fontSize="lg" mb={4} color="orange.400" fontWeight="bold">
            Bringing you the best audio gear
          </Text>
          <Heading as="h3" size="xl" mb={6}>
            Located at the heart of New York City, Audiophile is the premier store for high end
            headphones, earphones, speakers, and audio accessories.
          </Heading>
          <Text color="gray.600">
            We have a large showroom and luxury demonstration rooms available for you to browse and
            experience a wide range of our products. Stop by our store to meet some of the fantastic
            people who make Audiophile the best place to buy your portable audio equipment.
          </Text>
        </Box>

        <Box flex="1" position="relative" w="full" h="350px">
          <Image
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="Man listening to headphones"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </Box>
      </Flex>
}