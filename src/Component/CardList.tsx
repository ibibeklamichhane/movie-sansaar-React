// import { FC, useState } from "react";
// import {
//   Box,
//   HStack,
//   Heading,
//   Button,
//   useBreakpointValue,
// } from "@chakra-ui/react";
// import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
// import { Card } from "../Component/CustomComponents";
// import { Movie, Series } from "../Interface/index.ts";

// interface Props {
//   icon?: typeof LocalFireDepartmentIcon;
//   title: string;
//   page?: number;
//   movieData?: Array<Movie>;
//   seriesData?: Array<Series>;
//   appendData?: (page: number) => void;
//   isLoading?: boolean;
// }

// let CardList: FC<Props> = ({ title, movieData, seriesData, isLoading }) => {
//   if (isLoading) return <div>Loading...</div>;

//   const initialLimit = useBreakpointValue({ base: 6, sm: 10 }) || 10;

//   const [limit, setLimit] = useState<number>(initialLimit);
//   const [Serieslimit, setSeriesLimit] = useState<number>(initialLimit);

//   if (movieData != undefined) {
//     return (
//       <div>
//         <Box w={"100%"} p={"25px 0%"}>
//           <HStack>
//             <Heading
//               color={"text.100"}
//               fontFamily={"Nunito"}
//               fontWeight={"semibold"}
//               fontSize={"md"}
//             >
//               {title}
//             </Heading>
//           </HStack>

//           <Box
//             display="grid"
//             gridTemplateColumns={{
//               base: "repeat(2, 1fr)",
//               md: "repeat(3, 1fr)",
//               lg: "repeat(5, 1fr)",
//             }}
//             gap="15px"
//             p="30px 0px"
//           >
//             {movieData?.slice(0, limit).map((curr, index) => (
//               <Card
//                 isMovie={true}
//                 title={curr.title}
//                 key={index}
//                 image={curr.poster_path}
//                 id={curr.id}
//               />
//             ))}
//           </Box>

//           {limit < movieData?.length && (
//             <Button
//               onClick={() => {
//                 setLimit(limit + 6);
//               }}
//               position={"absolute"}
//               cursor={"pointer"}
//               fontSize={"xs"}
//               right={"7%"}
//               color={"brand.400"}
//               fontFamily={"Nunito"}
//             >
//               See More
//             </Button>
//           )}
//         </Box>
//       </div>
//     );
//   } else if (seriesData != undefined) {
//     return (
//       <Box w={"100%"} p={"25px 0%"}>
//         <HStack>
//           <Heading
//             color={"brand.800"}
//             fontFamily={"Nunito"}
//             fontWeight={"semibold"}
//             fontSize={"md"}
//           >
//             {title}
//           </Heading>
//         </HStack>
//         <Box
//           display="grid"
//           gridTemplateColumns={{
//             base: "repeat(2, 1fr)",
//             md: "repeat(3, 1fr)",
//             lg: "repeat(5, 1fr)",
//           }}
//           gap="15px"
//           p="30px 0px"
//         >
//           {seriesData
//             ?.slice(0, Serieslimit)
//             .map((curr: Series, index: number) => {
//               return (
//                 <Card
//                   isMovie={false}
//                   title={curr.name}
//                   key={index}
//                   image={curr.poster_path}
//                   id={curr?.id}
//                 />
//               );
//             })}
//         </Box>
//         {Serieslimit < seriesData?.length && (
//           <Button
//             onClick={() => {
//               setSeriesLimit(Serieslimit + 6);
//             }}
//             position={"absolute"}
//             cursor={"pointer"}
//             fontSize={"xs"}
//             right={"7%"}
//             color={"brand.400"}
//             fontFamily={"Nunito"}
//           >
//             See More
//           </Button>
//         )}
//       </Box>
//     );
//   } else {
//     return <>No movies/Series Found</>;
//   }
// };

// export default CardList;

import { FC, useState } from "react";

import { Card } from "../Component/CustomComponents";

import { Movie, Series } from "../Interface";
import { Button } from "../components/ui/button";

interface Props {
  title: string;
  page?: number;
  movieData?: Array<Movie>;
  seriesData?: Array<Series>;
  appendData?: (page: number) => void;
  isLoading?: boolean;
}

const CardList: FC<Props> = ({ title, movieData, seriesData, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const [limit, setLimit] = useState<number>(10);

  const [seriesLimit, setSeriesLimit] = useState<number>(10);

  if (movieData) {
    return (
      <div className="w-full py-6">
        <div className="flex items-center">
          <h1
            className="
              text-xl
              font-semibold
              text-white
              font-nunito
            "
          >
            {title}
          </h1>
        </div>

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-4
            py-8
          "
        >
          {movieData?.slice(0, limit).map((curr, index) => (
            <Card
              key={index}
              isMovie={true}
              title={curr.title}
              image={curr.poster_path}
              id={curr.id}
            />
          ))}
        </div>

        {limit < movieData.length && (
          <div className="flex justify-end">
            <Button
              variant="ghost"
              onClick={() => setLimit(limit + 6)}
              className="
                text-red-400
                hover:text-red-300
              "
            >
              See More
            </Button>
          </div>
        )}
      </div>
    );
  }

  if (seriesData) {
    return (
      <div className="w-full py-6">
        <div className="flex items-center">
          <h1
            className="
              text-xl
              font-semibold
              text-white
              font-nunito
            "
          >
            {title}
          </h1>
        </div>

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-4
            py-8
          "
        >
          {seriesData?.slice(0, seriesLimit).map((curr, index) => (
            <Card
              key={index}
              isMovie={false}
              title={curr.name}
              image={curr.poster_path}
              id={curr.id}
            />
          ))}
        </div>

        {seriesLimit < seriesData.length && (
          <div className="flex justify-end">
            <Button
              variant="ghost"
              onClick={() => setSeriesLimit(seriesLimit + 6)}
              className="
                text-red-400
                hover:text-red-300
              "
            >
              See More
            </Button>
          </div>
        )}
      </div>
    );
  }

  return <div>No Movies/Series Found</div>;
};

export default CardList;
