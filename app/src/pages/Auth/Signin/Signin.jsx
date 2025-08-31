import {
  Center,
  Container,
  FormControl,
  FormLabel,
  Stack,
  Text,
  Input,
  Flex,
  Checkbox,
  Button,
  FormErrorMessage,
  HStack,
  Box,
  useToast,
  Badge,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import Card from "../../../components/Card";
import { useMutation } from "react-query";
import { signinUser } from "../../../api/query/userQuery";
import useAuth from "../../../hooks/useAuth";
import { FaEthereum } from "react-icons/fa";

const signinValidationSchema = object({
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Signin = () => {
  const toast = useToast();
  const { login } = useAuth();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["signin"],
    mutationFn: signinUser,
    onSuccess: (data) => {
      const { token } = data;
      if (token) login(token);
    },
    onError: (error) => {
      toast({
        title: "Signin Error",
        description: error.message,
        status: "error",
      });
    },
  });

  return (
    <Container maxW="lg" bg="gray.100" minH="100vh" p={0}>
      <Center minH="100vh">
        <Card p={8} shadow="2xl" rounded="3xl" bg="gray.50" w="full">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={2} color="blue.600">
            Welcome Back 👋
          </Text>
          <Text fontSize="sm" color="gray.500" textAlign="center" mb={6}>
            Sign in to continue to Crypto Dashboard
          </Text>

          {/* Ethereum Info Card */}
          <Flex
            align="center"
            justify="space-between"
            bg="blue.50"
            p={4}
            rounded="lg"
            mb={6}
            shadow="sm"
          >
            <HStack>
              <FaEthereum size={24} color="#3C3C3D" />
              <Stack spacing={0}>
                <Text fontSize="sm" color="blue.700">
                  Ethereum Wallet
                </Text>
                <Text fontSize="md" fontWeight="bold">
                  3.245 ETH
                </Text>
              </Stack>
            </HStack>
            <Badge colorScheme="blue" fontSize="0.8rem">
              Active
            </Badge>
          </Flex>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => mutate(values)}
            validationSchema={signinValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="4" spacing={5}>
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel fontWeight="medium" color="blue.700">
                          Email
                        </FormLabel>
                        <Input
                          {...field}
                          type="email"
                          placeholder="name@example.com"
                          rounded="lg"
                          size="lg"
                          focusBorderColor="blue.400"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel fontWeight="medium" color="blue.700">
                          Password
                        </FormLabel>
                        <Input
                          {...field}
                          type="password"
                          placeholder="••••••••"
                          rounded="lg"
                          size="lg"
                          focusBorderColor="blue.400"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <HStack justify="space-between" fontSize="sm">
                    <Checkbox colorScheme="blue">Remember me</Checkbox>
                    <Link to="/forgot-password">
                      <Text
                        as="span"
                        color="blue.500"
                        fontWeight="medium"
                        _hover={{ textDecoration: "underline" }}
                      >
                        Forgot password?
                      </Text>
                    </Link>
                  </HStack>

                  <Box>
                    <Button
                      isLoading={isLoading}
                      w="full"
                      type="submit"
                      size="lg"
                      colorScheme="blue"
                      rounded="lg"
                      shadow="md"
                    >
                      Login
                    </Button>
                    <Link to="/signup">
                      <Button
                        variant="outline"
                        mt="3"
                        w="full"
                        size="lg"
                        colorScheme="blue"
                        rounded="lg"
                      >
                        Create Account
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default Signin;
