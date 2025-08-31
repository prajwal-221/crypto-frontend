import { Button, HStack, Icon, Stack, Tag, Text, Box } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";

const PortfolioSection = () => {
  return (
    <Box
      bg="gray.50"
      rounded="2xl"
      p={{ base: 6, md: 8 }}
      shadow="lg"
      w="full"
    >
      <HStack
        justify="space-between"
        flexDir={{ base: "column", xl: "row" }}
        align={{ base: "flex-start", xl: "center" }}
        spacing={{ base: 4, xl: 0 }}
      >
        {/* Portfolio & Wallet Info */}
        <HStack
          spacing={{ base: 0, xl: 16 }}
          align={{ base: "flex-start", xl: "center" }}
          flexDir={{ base: "column", xl: "row" }}
          w="full"
        >
          {/* Total Portfolio Value */}
          <Stack spacing={1}>
            <HStack color="gray.600">
              <Text fontSize="sm">Total Portfolio Value</Text>
              <Icon as={AiOutlineInfoCircle} w={4} h={4} />
            </HStack>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="green.600">
              ₹ 112,312.24
            </Text>
          </Stack>

          {/* Wallet Balances */}
          <Stack spacing={1}>
            <HStack color="gray.600">
              <Text fontSize="sm">Wallet Balances</Text>
            </HStack>
            <HStack
              spacing={4}
              align={{ base: "flex-start", sm: "center" }}
              flexDir={{ base: "column", sm: "row" }}
            >
              <HStack>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
                  22.39401000
                </Text>
                <Tag colorScheme="gray" fontWeight="medium" rounded="md">
                  BTC
                </Tag>
              </HStack>
              <HStack>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
                  ₹ 1,300.00
                </Text>
                <Tag colorScheme="gray" fontWeight="medium" rounded="md">
                  INR
                </Tag>
              </HStack>
            </HStack>
          </Stack>
        </HStack>

        {/* Deposit & Withdraw Buttons */}
        <HStack spacing={3} mt={{ base: 4, xl: 0 }}>
          <Button
            leftIcon={<Icon as={AiOutlineArrowDown} />}
            colorScheme="green"
            rounded="lg"
            size={{ base: "md", md: "lg" }}
            shadow="sm"
          >
            Deposit
          </Button>
          <Button
            leftIcon={<Icon as={AiOutlineArrowUp} />}
            colorScheme="red"
            rounded="lg"
            size={{ base: "md", md: "lg" }}
            shadow="sm"
          >
            Withdraw
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default PortfolioSection;
