// import { Input, Text, VStack, Image, Heading, HStack } from '@chakra-ui/react';
// import { FC } from "react";
// import { LoginInputProps } from "../Interface";
// import { Link } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/opacity.css';

// export const errorToast = (
//   toast: (arg0: {
//     title: string;
//     description: string;
//     duration: number;
//     isClosable: boolean;
//     status: string;
//     position: string;
//   }) => void,
//   title: string,
//   error: string
// ) => {
//   toast({
//     title: title,
//     description: error,
//     duration: 5000,
//     isClosable: true,
//     status: "success",
//     position: "bottom-right",
//   });
// };

// export const successToast = (toast: any, title: string, message: string) => {
//   toast({
//     title: title,
//     description: message,
//     duration: 3000,
//     isClosable: false,
//     status: "success",
//     position: "top-right",
//   });
// };

// export const LoginInput: FC<LoginInputProps> = ({
//   type,
//   name,
//   label,
//   placeholder,
//   register,
// }) => {
//   return (
//     <>
//       <Text fontFamily={"Nunito"} fontSize={"xxs"} color={"text.500"}>
//         {label}
//       </Text>
//       <Input
//         {...register(name, { required: true })}
//         fontFamily={"Nunito"}
//         fontWeight={"regular"}
//         type={type}
//         _placeholder={{ color: "text.500" }}
//         placeholder={placeholder}
//         bgColor={"dark.700"}
//         border={"none"}
//         outline={"none"}
//         _focusVisible={{ outlineColor: "white", outlineWidth: "1px" }}
//         fontSize={"xs"}
//         color={"text.500"}
//       />
//     </>
//   );
// };

// export const Card: FC<any> = ({ title,key,image,date,id,isMovie }) => {
//     return (
//       <VStack key = {key} to={isMovie ? `/movie/${id}` : `/series/${id}`} as={Link} width={"170px"} alignItems={"flex-start"} bgColor={"dark.900"} borderRadius={"5px"} overflow={"hidden"} _hover={{
//         ".gradient-box":{
//           opacity:1
//         }
//       }}>
//         <VStack className='gradient-box' opacity={0} transitionDuration="300ms"  w={"200px"}  marginTop={"8px"} position={"absolute"} height={"200px"} borderTopRadius={"5px"} bgColor={'rgb(31, 29, 31,0.6)'} alignItems={"center"} justifyContent={"center"}>
//      {/*}    <Icon as={PlayArrowRoundedIcon} fontSize={"xxxl"} color={"text.300"}/> 8*/}
//         </VStack>
//         <ImageLoader src={`https://image.tmdb.org/t/p/original${image}`} alt="Loading" w="150px" height={"200px"} borderTopRadius={"5px"} />
//         <Heading lineHeight={"90%"} fontFamily={"Nunito"} fontWeight={"semibold"} color={"text.200"} fontSize={"xxs"}>{title}</Heading>
//         <Text lineHeight={"90%"} fontSize={"xxxs"} fontFamily={"Nunito"} fontWeight={"regular"} color={"text.300"}>{date}</Text>
//         <HStack flexWrap={"wrap"} alignItems={"start"} gap={"0px"} justifyContent={"start"}>
//           <Text lineHeight={"90%"} fontSize={"xxxs"} fontFamily={"Nunito"} fontWeight={"regular"} color={"brand.400"}>Action</Text>
//           <Text lineHeight={"90%"} fontSize={"xxxs"} fontFamily={"Nunito"} fontWeight={"regular"} color={"brand.400"}>Comedy</Text>
//         </HStack>
//       </VStack>
//     )
//   }

//   export const ImageLoader: FC<any> = ({ alt, src, width, height }) => {
//     return (
//       <Image as={LazyLoadImage} alt={alt} src={src} loading="lazy" height={height}  width={width} wrapperProps={{ style: { objectFit: 'cover' ,borderTopLeftRadius:"5px",borderTopRightRadius:"5px"} }}  effect='opacity'/>
//     )
//   }

import { FC } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

import { LoginInputProps } from "../Interface";
import { Input } from "../components/ui/input";

export const errorToast = (toast: any, title: string, error: string) => {
  toast({
    title,
    description: error,
    duration: 5000,
  });
};

export const successToast = (toast: any, title: string, message: string) => {
  toast({
    title,
    description: message,
    duration: 3000,
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
    <div className="flex flex-col gap-2">
      <p className="text-[12px] text-gray-400 font-nunito">{label}</p>

      <Input
        {...register(name, { required: true })}
        type={type}
        placeholder={placeholder}
        className="
          bg-zinc-900
          border-none
          text-gray-200
          placeholder:text-gray-500
          focus-visible:ring-1
          focus-visible:ring-white
          font-nunito
        "
      />
    </div>
  );
};

export const Card: FC<any> = ({ title, image, date, id, isMovie }) => {
  return (
    <Link
      to={isMovie ? `/movie/${id}` : `/series/${id}`}
      className="relative flex flex-col items-start overflow-hidden rounded-md bg-zinc-950 w-full group"
    >
      {/* Hover overlay covers full card */}
      <div className="absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center rounded-md">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
          <svg className="w-6 h-6 text-white fill-white" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      <ImageLoader
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={title}
        width="100%"
        height="100%"
      />

      <div className="p-2 flex flex-col gap-1 w-full">
        <h2 className="text-xs font-semibold text-gray-100 leading-tight font-nunito line-clamp-2">
          {title}
        </h2>
        {date && (
          <p className="text-[10px] text-gray-400 font-nunito">{date}</p>
        )}
      </div>
    </Link>
  );
};

export const ImageLoader: FC<any> = ({ alt, src }) => {
  return (
    <div className="w-full aspect-[2/3] overflow-hidden">
      <LazyLoadImage
        alt={alt}
        src={src}
        effect="opacity"
        width="100%"
        height="100%"
        className="object-cover w-full h-full rounded-t-md"
      />
    </div>
  );
};
