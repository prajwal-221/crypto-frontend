import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];

  return (
    <CustomCard p={{ base: 6, md: 8 }} shadow="md" rounded="2xl" bg="white">
      <Flex
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        flexDir={{ base: "column", md: "row" }}
        mb={4}
      >
        <Stack spacing={3}>
          <HStack color="gray.600">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={4}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
                22.39401000
              </Text>
              <HStack fontWeight="medium" color="green.500" spacing={1}>
                <Icon as={BsArrowUpRight} w={4} h={4} />
                <Text fontSize="sm">22%</Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>

        <HStack mt={{ base: 4, md: 0 }} spacing={3}>
          <Button
            leftIcon={<Icon as={AiFillPlusCircle} />}
            colorScheme="green"
            rounded="lg"
            size={{ base: "md", md: "lg" }}
            shadow="sm"
          >
            Buy
          </Button>
          <Button
            leftIcon={<Icon as={AiOutlineMinusCircle} />}
            colorScheme="red"
            rounded="lg"
            size={{ base: "md", md: "lg" }}
            shadow="sm"
          >
            Sell
          </Button>
        </HStack>
      </Flex>

      <Tabs variant="soft-rounded" colorScheme="purple">
        <Flex justify="end" mb={2}>
          <TabList
            bg="gray.100"
            p="3px"
            borderRadius="lg"
            overflow="hidden"
            w={{ base: "100%", md: "auto" }}
          >
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white", color: "purple.500" }}
                key={tab}
                fontSize="sm"
                p="6px 12px"
                borderRadius="md"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel p={0}>
            <Image w="100%" src="/graph.svg" mt={6} borderRadius="md" />
            <HStack justify="space-between" mt={2}>
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="gray.500">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Text>Two!</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
