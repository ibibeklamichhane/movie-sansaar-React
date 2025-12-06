// import { Button, HStack, Heading, Text, VStack } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// import { FC } from 'react';
// //import { ChevronDownIcon } from '@chakra-ui/icons';
// //import { GenreID } from '../Const/index.ts';
// //import { successToast, errorToast } from '../Component/CustomComponents.tsx';
// interface Props {

// }

// let NavBar: FC<Props> = ({ }) => {

//     //const [menu, setMenu] = useState<boolean>(false);

//     return (
//         <VStack p={"20px 5%"} alignItems={"flex-end"}>
//             <HStack w={"100%"} justifyContent={"space-between"}>
//                 <Heading fontFamily={"Playfair"} color={"brand.500"} fontSize={"xl"} fontWeight={"bold"}>Movie Sansaar</Heading>
//                 <HStack gap={"30px"}>
//                     <Link to="/"><Text fontFamily={"Nunito"} fontSize={"xs"} color={"brand.500"}>Home</Text></Link>
//                     <Link to="/movie"><Text fontFamily={"Nunito"} fontSize={"xs"} color={"brand.500"}>Movies</Text></Link>
//                     <Link to="/series"><Text fontFamily={"Nunito"} fontSize={"xs"} color={"brand.500"}>TV Series</Text></Link>
//                     <Link to="/watchlist"><Text fontFamily={"Nunito"} fontSize={"xs"} color={"brand.500"}>Watch List</Text></Link>
// \
//                      {/* <HStack as={"button"} onClick={() => {
//                         setMenu(!menu);
//                     }}>
//                      <Text fontFamily={"Nunito"} fontSize={"xs"} color={"brand.500"}>Genre</Text>
//                         <ChevronDownIcon color={"text.100"} transitionDuration="300ms" fontSize={"rg"} transform={!menu ? "rotate(0deg)" : "rotate(180deg)"} />
//                     </HStack> */}
//                     <Link to="/contact"><Text fontFamily={"Nunito"} fontSize={"xs"} color={"brand.500"}>Contact Us</Text></Link>
//                     <Link to={"/log-in"}>
//                         <Button fontFamily={"Nunito"} fontSize={"xs"} p="0px 15px" height={"35px"} border={"1px"} color={"brand.500"} bgColor={"transparent"} _hover={{ bgColor: "dark.900" }}>
//                             Sign In
//                         </Button>
//                     </Link>
//                     <Link to={"/sign-up"}>
//                         <Button fontFamily={"Nunito"} fontSize={"xs"} p="0px 15px" height={"35px"} color={"dark.700"} bgColor={"brand.400"} _hover={{ bgColor: "brand.500" }}>
//                             Sign Up
//                         </Button>
//                     </Link>
//                 </HStack>
//             </HStack>
//             {/*}
//             <Collapse in={menu} animateOpacity>
//                 <HStack ml={"45%"} w="55%" flexWrap={"wrap"} gap={"1px"} justify={"end"}>
//                     {
//                         GenreID.genres?.map((curr: { id: number, name: string }, indx: number) => {
//                             return (
//                                 <Link to={"/"} key={indx}>
//                                     <Text fontFamily={"Nunito"} fontWeight={"medium"} fontSize={"xxs"} color={"text.200"}>{curr.name}</Text>
//                                 </Link>
//                             )
//                         })
//                     }
//                 </HStack>
//             </Collapse> */}
//         </VStack>
//     )
// }
// export default NavBar;

// import { FC, useState } from "react";
// import { Link } from "react-router-dom";

// interface Props {}

// const NavBar: FC<Props> = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <div className="flex flex-col items-end p-5 lg:px-[5%] lg:py-5">
//       <div className="w-full flex justify-between items-center">
//         <h1 className=" text-blue-300 text-2xl font-medium">Movie Sansaar</h1>
//         <button className="lg:hidden z-50">
//           <div className="space-y-2">
//             <span
//               className={`block w-8 h-0.5 bg-blue-300 transition-transform duration-300 ease-in-out ${
//                 isMenuOpen ? "rotate-45 translate-y-2.5" : ""
//               }`}
//             ></span>
//             <span
//               className={`block w-8 h-0.5 bg-blue-300 transition-opacity duration-300 ease-in-out ${
//                 isMenuOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`block w-8 h-0.5 bg-blue-300 transition-transform duration-300 ease-in-out ${
//                 isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
//               }`}
//             ></span>
//           </div>
//         </button>
//         <div className="flex items-center gap-8">
//           <Link to="/">
//             <span className="font-nunito text-medium text-blue-300">Home</span>
//           </Link>
//           <Link to="/movie">
//             <span className="font-nunito text-medium text-blue-300">
//               Movies
//             </span>
//           </Link>
//           <Link to="/series">
//             <span className="font-nunito text-medium text-blue-300">
//               TV Series
//             </span>
//           </Link>
//           <Link to="/watchlist">
//             <span className="font-nunito text-medium text-blue-300">
//               Watch List
//             </span>
//           </Link>
//           <Link to="/contact">
//             <span className="font-nunito text-medium text-blue-300">
//               Contact Us
//             </span>
//           </Link>
//           <Link to="/log-in">
//             <button className="font-nunito text-xs px-4 h-9 border border-brand-500 text-blue-300 bg-transparent hover:bg-dark-900 transition-colors">
//               Sign In
//             </button>
//           </Link>
//           <Link to="/sign-up">
//             <button className="font-nunito text-xs px-4 h-9 text-dark-700 bg-brand-400 hover:bg-brand-500 transition-colors">
//               Sign Up
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface Props {}

const NavBar: FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-end p-5 lg:px-[5%] lg:py-5 relative">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-blue-300 text-2xl font-medium">Movie Sansaar</h1>

        {/* Hamburger Button */}
        <button
          className="lg:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-2">
            <span
              className={`block w-8 h-0.5 bg-blue-300 transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-blue-300 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-blue-300 transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/">
            <span className="font-nunito text-medium text-blue-300">Home</span>
          </Link>
          <Link to="/movie">
            <span className="font-nunito text-medium text-blue-300">
              Movies
            </span>
          </Link>
          <Link to="/series">
            <span className="font-nunito text-medium text-blue-300">
              TV Series
            </span>
          </Link>
          <Link to="/watchlist">
            <span className="font-nunito text-medium text-blue-300">
              Watch List
            </span>
          </Link>
          <Link to="/contact">
            <span className="font-nunito text-medium text-blue-300">
              Contact Us
            </span>
          </Link>
          <Link to="/log-in">
            <button className="font-nunito text-xs px-4 h-9 border border-brand-500 text-blue-300 bg-transparent hover:bg-dark-900 transition-colors">
              Sign In
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="font-nunito text-xs px-4 h-9 text-dark-700 bg-brand-400 hover:bg-brand-500 transition-colors">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-dark-800 shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 mt-24 ml-6">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <span className="text-blue-300 text-lg">Home</span>
          </Link>
          <Link to="/movie" onClick={() => setIsMenuOpen(false)}>
            <span className="text-blue-300 text-lg">Movies</span>
          </Link>
          <Link to="/series" onClick={() => setIsMenuOpen(false)}>
            <span className="text-blue-300 text-lg">TV Series</span>
          </Link>
          <Link to="/watchlist" onClick={() => setIsMenuOpen(false)}>
            <span className="text-blue-300 text-lg">Watch List</span>
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            <span className="text-blue-300 text-lg">Contact Us</span>
          </Link>
          <Link to="/log-in" onClick={() => setIsMenuOpen(false)}>
            <button className="text-blue-300 border border-brand-500 w-32 px-4 py-2">
              Sign In
            </button>
          </Link>
          <Link to="/sign-up" onClick={() => setIsMenuOpen(false)}>
            <button className="text-dark-700 bg-brand-400 w-32 px-4 py-2">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
