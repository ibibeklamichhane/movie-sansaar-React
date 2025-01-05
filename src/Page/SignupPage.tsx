import { FC } from "react";
import {
  VStack,
  Heading,
  Button,
  Text,

} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { LoginInput } from "../Component/CustomComponents.tsx";
import { Link } from "react-router-dom";
//import { yupResolver } from "@hookform/resolvers/yup";
//import { signupDataInterface, signupSchema } from "../Interface/formSchema.ts";
import { useRegister } from "../apis/authApi.ts";
import { RegisterCredentials } from "../Interface/AuthInterfaces.ts";

const SignupPage: FC<any> = ({}) => {
  const { mutateAsync:registerdata } = useRegister();
  const {
    register,handleSubmit,formState: { errors }} = useForm<RegisterCredentials>({
  });

  const onSubmit = handleSubmit(async (value:RegisterCredentials) => {
    console.log(value);
    const { repeatPassword, ...payload } = value;
    try {
      await registerdata(payload);
      console.log(value);
        }
        catch (error) {
          console.log(error);
          }
          console.log(value);

          }
        );

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
