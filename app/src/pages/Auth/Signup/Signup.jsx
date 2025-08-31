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
  useToast,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string, ref } from "yup";
import Card from "../../../components/Card";
import { useMutation } from "react-query";
import { signupUser } from "../../../api/query/userQuery";
import { useState } from "react";
import { FaCoins } from "react-icons/fa";

const signupValidationSchema = object({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatPassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Repeat password is required"),
});

const Signup = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const { mutate, isLoading } = useMutation({
    mutationKey: ["signup"],
    mutationFn: signupUser,
    onSuccess: () => {
      if (email) navigate(`/register-email-verify/${email}`);
    },
    onError: (error) => {
      toast({
        title: "SignUp Error",
        description: error.message,
        status: "error",
      });
    },
  });

  return (
    <Container maxW="lg" bg="gray.100" minH="100vh" p={0}>
      <Center minH="100vh">
        <Card p={8} shadow="2xl" rounded="3xl" bg="gray.50" w="full">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={2} color="green.600">
            Welcome to Crypto App 🚀
          </Text>
          <Text fontSize="sm" color="gray.500" textAlign="center" mb={6}>
            Create a free account by filling in the details below
          </Text>

          {/* Solana Info Card */}
          <Flex
            align="center"
            justify="space-between"
            bg="green.50"
            p={4}
            rounded="lg"
            mb={6}
            shadow="sm"
          >
            <HStack>
              <FaCoins size={24} color="#00FFA3" />
              <Stack spacing={0}>
                <Text fontSize="sm" color="green.700">
                  Solana Wallet
                </Text>
                <Text fontSize="md" fontWeight="bold">
                  12.54 SOL
                </Text>
              </Stack>
            </HStack>
            <Badge colorScheme="green" fontSize="0.8rem">
              Active
            </Badge>
          </Flex>

          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(values) => {
              setEmail(values.email);
              mutate({
                firstName: values.name,
                lastName: values.surname,
                email: values.email,
                password: values.password,
              });
            }}
            validationSchema={signupValidationSchema}
          >
            {() => (
              <Form>
                <Stack spacing={5}>
                  <Flex gap="4">
                    <Field name="name">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel fontWeight="medium" color="green.700">Name</FormLabel>
                          <Input
                            {...field}
                            placeholder="Enter your name"
                            rounded="lg"
                            size="lg"
                            focusBorderColor="green.400"
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="surname">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel fontWeight="medium" color="green.700">Surname</FormLabel>
                          <Input
                            {...field}
                            placeholder="Enter your surname"
                            rounded="lg"
                            size="lg"
                            focusBorderColor="green.400"
                          />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>

                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel fontWeight="medium" color="green.700">Email</FormLabel>
                        <Input
                          {...field}
                          type="email"
                          placeholder="name@example.com"
                          rounded="lg"
                          size="lg"
                          focusBorderColor="green.400"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel fontWeight="medium" color="green.700">Password</FormLabel>
                        <Input
                          {...field}
                          type="password"
                          placeholder="••••••••"
                          rounded="lg"
                          size="lg"
                          focusBorderColor="green.400"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="repeatPassword">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel fontWeight="medium" color="green.700">Repeat Password</FormLabel>
                        <Input
                          {...field}
                          type="password"
                          placeholder="••••••••"
                          rounded="lg"
                          size="lg"
                          focusBorderColor="green.400"
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Checkbox colorScheme="green">
                    <Text fontSize="sm">
                      I agree with{" "}
                      <Text as="span" color="green.500">
                        Terms and Conditions
                      </Text>
                    </Text>
                  </Checkbox>

                  <Button
                    isLoading={isLoading}
                    type="submit"
                    w="full"
                    size="lg"
                    colorScheme="green"
                    rounded="lg"
                    shadow="md"
                  >
                    Create Account
                  </Button>

                  <Text fontSize="sm" color="gray.500" textAlign="center">
                    Already have an account?{" "}
                    <Link to="/signin">
                      <Text as="span" color="green.500" _hover={{ textDecoration: "underline" }}>
                        Login
                      </Text>
                    </Link>
                  </Text>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default Signup;
