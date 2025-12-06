import { FC, useState } from "react";
import {
  Box,
  HStack,
  Heading,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { Card } from "../Component/CustomComponents";
import { Movie, Series } from "../Interface/index.ts";

interface Props {
  icon?: typeof LocalFireDepartmentIcon;
  title: string;
  page?: number;
  movieData?: Array<Movie>;
  seriesData?: Array<Series>;
  appendData?: (page: number) => void;
  isLoading?: boolean;
}

let CardList: FC<Props> = ({ title, movieData, seriesData, isLoading }) => {
  if (isLoading) return <div>Loading...</div>;

  const initialLimit = useBreakpointValue({ base: 5, sm: 10 }) || 10;

  const [limit, setLimit] = useState<number>(initialLimit);
  const [Serieslimit, setSeriesLimit] = useState<number>(12);

  if (movieData != undefined) {
    return (
      <div>
        <Box w={"100%"} p={"25px 0%"}>
          <HStack>
            <Heading
              color={"text.100"}
              fontFamily={"Nunito"}
              fontWeight={"semibold"}
              fontSize={"md"}
            >
              {title}
            </Heading>
          </HStack>
          {/* <HStack
            p={"30px 0px"}
            gap={"15px"}
            flexWrap={"wrap"}
            alignItems={"center"}
          >
            {movieData.slice(0, limit).map((curr: Movie, index: number) => {
              return (
                <Card
                  isMovie={true}
                  title={curr.title}
                  key={index}
                  image={curr.poster_path}
                  id={curr?.id}
                />
              );
            })}
          </HStack> */}
          <Box
            display="grid"
            gridTemplateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap="15px"
            p="30px 0px"
          >
            {movieData?.slice(0, limit).map((curr, index) => (
              <Card
                isMovie={true}
                title={curr.title}
                key={index}
                image={curr.poster_path}
                id={curr.id}
              />
            ))}
          </Box>

          <Button
            onClick={() => {
              setLimit(limit + 6);
            }}
            position={"absolute"}
            cursor={"pointer"}
            fontSize={"xs"}
            right={"7%"}
            color={"brand.400"}
            fontFamily={"Nunito"}
          >
            See More
          </Button>
        </Box>
      </div>
    );
  } else if (seriesData != undefined) {
    return (
      <Box w={"100%"} p={"25px 0%"}>
        <HStack>
          <Heading
            color={"brand.800"}
            fontFamily={"Nunito"}
            fontWeight={"semibold"}
            fontSize={"md"}
          >
            {title}
          </Heading>
        </HStack>
        <HStack
          p={"30px 0px"}
          gap={"15px"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"start"}
        >
          {seriesData
            ?.slice(0, Serieslimit)
            .map((curr: Series, index: number) => {
              return (
                <Card
                  isMovie={false}
                  title={curr.name}
                  key={index}
                  image={curr.poster_path}
                  id={curr?.id}
                />
              );
            })}
        </HStack>
        <Button
          onClick={() => {
            setSeriesLimit(Serieslimit + 6);
            if (6 > seriesData?.length) {
            }
          }}
          position={"absolute"}
          cursor={"pointer"}
          fontSize={"xs"}
          right={"7%"}
          color={"brand.400"}
          fontFamily={"Nunito"}
        >
          See More
        </Button>
      </Box>
    );
  } else {
    return <>No movies/Series Found</>;
  }
};

export default CardList;
