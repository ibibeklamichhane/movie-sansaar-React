import { VStack, Heading, Button, Text, HStack, Checkbox,useToast} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { LoginInput ,successToast} from '../Component/CustomComponents.tsx';
import { yupResolver } from '@hookform/resolvers/yup';
import {loginDataInterface,loginSchema} from '../Interface/formSchema.ts';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    

  const toast = useToast();


  const { register, formState: { errors },handleSubmit } = useForm<loginDataInterface>({
    resolver:yupResolver(loginSchema)
  });
  const onSubmit = handleSubmit(data => {
    successToast(toast,"Login","Successfully");
  });


  return (
<VStack bgColor={"dark.900"} w={"100%"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
  <VStack 
    bgColor={"dark.800"} 
    borderRadius={"10px"} 
    w={["90%", "75%", "50%", "35%"]} // Responsive width for smaller screens
    p={"40px 30px"} 
    alignItems={"flex-start"} 
    as={"form"} 
    onSubmit={onSubmit}
  >
    <Heading fontFamily={"Nunito"} fontSize={"lg"} fontWeight={"medium"} color={"text.300"}>
      Welcome back!
    </Heading>
    
    <LoginInput register={register} type='text' name='email' label='Account' placeholder='User email' />
    <Text fontSize={"xxs"} fontWeight={"regular"} color={"error.500"}>
      {errors.email == null ? "" : errors.email.message}
    </Text>

    <LoginInput register={register} type='password' name='password' label='Password' placeholder='User Password' />
    <Text fontSize={"xxs"} fontWeight={"regular"} color={"error.500"}>
      {errors.password == null ? "" : errors.password.message}
    </Text>

    <HStack>
      <Checkbox {...register("saveAuth")} outline={"none"} colorScheme={"whiteAlpha"}/>
      <Text color={"brand.500"} fontWeight={"regular"} fontSize={"xxs"}>
        Remember me
      </Text>
    </HStack>

    <Button w={"100%"} type='submit' bgColor={"brand.400"} color={"dark.700"} _hover={{ bgColor: "brand.500" }} fontSize={"xs"} fontWeight={"semibold"}>
      Sign In
    </Button>

    <Text color={"brand.500"} fontWeight={"regular"} fontSize={"xxs"}>
      Forget your Password?
    </Text>
    
    <Link to={"/sign-up"}>
      <Text color={"brand.500"} fontWeight={"regular"} fontSize={"xxs"}>
        Sign up for a new account
      </Text>
    </Link>
  </VStack>
</VStack>

  )
}