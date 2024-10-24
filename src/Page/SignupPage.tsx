import { FC } from "react";
import {
  VStack,
  Heading,
  Button,
  Text,
  HStack,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { LoginInput, successToast } from "../Component/CustomComponents.tsx";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupDataInterface, signupSchema } from "../Interface/formSchema.ts";

const SignupPage: FC<any> = ({}) => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signupDataInterface>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = handleSubmit(() => {
    successToast(toast, "signup", "Successfully");
  });

  return (
<VStack
  padding={"10px 0px"}
  bgColor={"dark.900"}  
  w={"100%"}
  minHeight={"100vh"} 
  h={"100%"}
  alignItems={"center"}
  justifyContent={"center"} 
>
  <VStack
    bgColor={"dark.800"}
    borderRadius={"10px"}
    w={["90%", "70%", "50%", "35%"]} 
    maxW={"500px"}  
    p={"40px 30px"}
    alignItems={"flex-start"}
    as={"form"}
    onSubmit={onSubmit}
  >
    <Heading
      fontFamily={"Nunito"}
      fontSize={"lg"}
      fontWeight={"medium"}
      color={"text.300"}
    >
      Sign up !
    </Heading>
    <LoginInput
      register={register}
      type="text"
      name="name"
      label="Name"
      placeholder="User name"
    />
    <Text fontSize={"xxs"} fontWeight={"regular"} color={"error.500"}>
      {errors.name == null ? "" : errors.name.message}
    </Text>
    <LoginInput
      register={register}
      type="text"
      name="email"
      label="Account"
      placeholder="User email"
    />
    <Text fontSize={"xxs"} fontWeight={"regular"} color={"error.500"}>
      {errors.email == null ? "" : errors.email.message}
    </Text>
    <LoginInput
      register={register}
      type="password"
      name="password"
      label="Password"
      placeholder="User Password"
    />
    <Text fontSize={"xxs"} fontWeight={"regular"} color={"error.500"}>
      {errors.password == null ? "" : errors.password.message}
    </Text>
    <LoginInput
      register={register}
      type="password"
      name="repeatPassword"
      label="Repeat Password"
      placeholder="Confirm Password"
    />
    <Text fontSize={"xxs"} fontWeight={"regular"} color={"error.500"}>
      {errors.repeatPassword == null ? "" : errors.repeatPassword.message}
    </Text>
    <HStack>
      <Checkbox
        {...register("saveAuth")}
        outline={"none"}
        colorScheme={"whiteAlpha"}
      />
      <Text color={"brand.500"} fontWeight={"regular"} fontSize={"xxs"}>
        Remember me
      </Text>
    </HStack>
    <Button
      w={"100%"}
      type="submit"
      bgColor={"brand.400"}
      color={"dark.800"}
      _hover={{ bgColor: "brand.500" }}
      fontSize={"xs"}
      fontWeight={"semibold"}
    >
      Sign In
    </Button>
    <Link to={"/log-in"}>
      <Text color={"brand.500"} fontWeight={"regular"} fontSize={"xxs"}>
        Have an existing account? Sign in{" "}
      </Text>
    </Link>
  </VStack>
</VStack>

  );
};
export default SignupPage;
