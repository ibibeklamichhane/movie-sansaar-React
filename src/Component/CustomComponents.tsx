import { Input, Text, VStack, Image, Heading, HStack } from '@chakra-ui/react';
import { FC } from "react";
import { LoginInputProps } from "../Interface";
import { Link } from 'react-router-dom';
//import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export const errorToast = (
  toast: (arg0: {
    title: string;
    description: string;
    duration: number;
    isClosable: boolean;
    status: string;
    position: string;
  }) => void,
  title: string,
  error: string
) => {
  toast({
    title: title,
    description: error,
    duration: 5000,
    isClosable: true,
    status: "success",
    position: "bottom-right",
  });
};

export const successToast = (toast: any, title: string, message: string) => {
  toast({
    title: title,
    description: message,
    duration: 3000,
    isClosable: false,
    status: "success",
    position: "top-right",
  });
};

export const LoginInput: FC<LoginInputProps> = ({
  type,
  name,
  label,
  placeholder,
  register,
}) => {
  return (
    <>
      <Text fontFamily={"Nunito"} fontSize={"xxs"} color={"text.500"}>
        {label}
      </Text>
      <Input
        {...register(name, { required: true })}
        fontFamily={"Nunito"}
        fontWeight={"regular"}
        type={type}
        _placeholder={{ color: "text.500" }}
        placeholder={placeholder}
        bgColor={"dark.700"}
        border={"none"}
        outline={"none"}
        _focusVisible={{ outlineColor: "white", outlineWidth: "1px" }}
        fontSize={"xs"}
        color={"text.500"}
      />
    </>
  );
};
//export const Card: FC<any> = ({ title,key,image,date,genre,id }) => {
  export const Card: FC<any> = ({ title,key,image,date,id }) => {
    return (
      <VStack key = {key} to={`${id}`} as={Link} width={"150px"} alignItems={"flex-start"} bgColor={"dark.900"} borderRadius={"5px"} overflow={"hidden"} _hover={{
        ".gradient-box":{
          opacity:1
        }
      }}>
        <VStack className='gradient-box' opacity={0} transitionDuration="300ms"  w={"150px"}  marginTop={"8px"} position={"absolute"} height={"200px"} borderTopRadius={"5px"} bgColor={'rgb(31, 29, 31,0.6)'} alignItems={"center"} justifyContent={"center"}>
     {/*}    <Icon as={PlayArrowRoundedIcon} fontSize={"xxxl"} color={"text.300"}/> 8*/}
        </VStack>
        <ImageLoader src={`https://image.tmdb.org/t/p/original${image}`} alt="Loading" w="150px" height={"200px"} borderTopRadius={"5px"} />
        <Heading lineHeight={"90%"} fontFamily={"Nunito"} fontWeight={"semibold"} color={"text.200"} fontSize={"xxs"}>{title}</Heading>
        <Text lineHeight={"90%"} fontSize={"xxxs"} fontFamily={"Nunito"} fontWeight={"regular"} color={"text.300"}>{date}</Text>
        <HStack flexWrap={"wrap"} alignItems={"start"} gap={"0px"} justifyContent={"start"}>
          <Text lineHeight={"90%"} fontSize={"xxxs"} fontFamily={"Nunito"} fontWeight={"regular"} color={"brand.400"}>Action</Text>
          <Text lineHeight={"90%"} fontSize={"xxxs"} fontFamily={"Nunito"} fontWeight={"regular"} color={"brand.400"}>Comedy</Text>
        </HStack>
      </VStack>
    )
  }

  export const ImageLoader: FC<any> = ({ alt, src, width, height }) => {
    return (
      <Image as={LazyLoadImage} alt={alt} src={src} loading="lazy" height={height}  width={width} wrapperProps={{ style: { objectFit: 'cover' ,borderTopLeftRadius:"5px",borderTopRightRadius:"5px"} }}  effect='opacity'/>
    )
  }