// import { Heading, VStack ,Text, Textarea,Button,Image} from '@chakra-ui/react';
// import { useForm } from "react-hook-form";
// import { LoginInput } from '../Component/CustomComponents';
// import Groot from '../assets/Image/Groot.png';
// import {FC} from 'react';

// interface Props{

// }

// let ContactPage:FC<Props> = ({}) => {
//     const { register, handleSubmit } = useForm<any>();
//     const onSubmit = handleSubmit(data => {
//         console.log({ ...data})
//       });

//     return (
//         <VStack w={"100%"} h={"90vh"} alignItems={'center'} justifyContent={"center"}>
//             <VStack bgColor={"dark.800"} borderRadius={"10px"} w={"35%"} p={"40px 30px"} alignItems={"flex-start"} as={"form"} onSubmit={onSubmit}>
//                 <Heading fontFamily={"Nunito"} fontSize={"md"} fontWeight={"semibold"} color={"text.300"}>Lets get connected !</Heading>
//                 <LoginInput register={register} type='text' name='name' label='Name' placeholder='Full Name' />
//                 <LoginInput register={register} type='text' name='email' label='Email' placeholder='Email Address' />
//                 <Text fontFamily={"Nunito"} fontSize={"xxs"} color={"text.500"}>Message</Text>
//                 <Textarea fontFamily={"Nunito"} fontWeight={"regular"}  _placeholder={{ color: "text.500" }} placeholder={"Hello I am Groot"} bgColor={"dark.700"} border={"none"} outline={"none"} _focusVisible={{ outlineColor: "white", outlineWidth: "1px" }} fontSize={"xs"} color={"text.500"} height={"150px"} resize={"none"}/>
//                 <Button w={"100%"}  type='submit' bgColor={"brand.400"} color={"dark.800"} _hover={{ bgColor: "brand.500" }} fontSize={"xs"} fontWeight={"semibold"}>Send</Button>
//             </VStack>
//             <Image src={Groot} position={"absolute"} left={"0px"} top={"31.5%"} width={"300px"}/>
//         </VStack>
//     )
// }
// export default ContactPage;

import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { LoginInput } from "../Component/CustomComponents";

import Groot from "../assets/Image/Groot.png";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

interface Props {}

const ContactPage: FC<Props> = () => {
  const { register, handleSubmit } = useForm<any>();

  const onSubmit = handleSubmit((data) => {
    console.log({
      ...data,
    });
  });

  return (
    <div
      className="
        relative
        flex
        items-center
        justify-center
        w-full
        h-[90vh]
      "
    >
      {/* FORM CARD */}
      <form
        onSubmit={onSubmit}
        className="
          flex
          flex-col
          items-start
          gap-4
          w-[35%]
          rounded-xl
          bg-zinc-900
          px-8
          py-10
          z-10
        "
      >
        {/* HEADING */}
        <h1
          className="
            text-2xl
            font-semibold
            text-gray-200
            font-nunito
          "
        >
          Lets get connected !
        </h1>

        {/* INPUTS */}
        <LoginInput
          register={register}
          type="text"
          name="name"
          label="Name"
          placeholder="Full Name"
        />

        <LoginInput
          register={register}
          type="text"
          name="email"
          label="Email"
          placeholder="Email Address"
        />

        {/* MESSAGE */}
        <div className="w-full flex flex-col gap-2">
          <p
            className="
              text-xs
              text-gray-400
              font-nunito
            "
          >
            Message
          </p>

          <Textarea
            placeholder="Hello I am Groot"
            className="
              min-h-[150px]
              resize-none
              border-none
              bg-zinc-800
              text-gray-200
              placeholder:text-gray-500
              focus-visible:ring-1
              focus-visible:ring-white
            "
          />
        </div>

        {/* BUTTON */}
        <Button
          type="submit"
          className="
            w-full
            bg-red-500
            text-black
            hover:bg-red-600
            font-semibold
          "
        >
          Send
        </Button>
      </form>

      {/* GROOT IMAGE */}
      <img
        src={Groot}
        alt="Groot"
        className="
          absolute
          left-0
          top-[31.5%]
          w-[300px]
        "
      />
    </div>
  );
};

export default ContactPage;
