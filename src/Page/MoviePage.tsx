import { FC } from "react";
import { Box, VStack } from "@chakra-ui/react";
import { useState } from "react";
import CardList from "../Component/CardList";
import SearchBar from "../Component/SearchBar";
import {
  usePopularMovies,
  useTrendingMovies,
  useUpComingMovies,
  useTopRatedMovies,
  useSearchMovies,
} from "../apis/MovieApi";

interface Props {}

const MoviePage: FC<Props> = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: popularMovies } = usePopularMovies();
  const { data: trendingMovies } = useTrendingMovies();
  const { data: upComingMovies } = useUpComingMovies();
  const { data: topRatedMovies } = useTopRatedMovies();
  const { data: searchResults, isFetching } = useSearchMovies(searchQuery);

  return (
    <>
      <SearchBar onSearch={(query) => setSearchQuery(query)} />

      {searchQuery ? (
        <Box color="red.300" maxW="6xl" px={2}>
          {isFetching ? (
            <Box>Loading...</Box>
          ) : (
            <CardList title="Search Results" movieData={searchResults} />
          )}
        </Box>
      ) : (
        <VStack m={"0px 8vw"}>
          <Box maxW="10xl">
            <CardList title="Popular Movies" movieData={popularMovies} />
            <CardList title="Trending Movies" movieData={trendingMovies} />
            <CardList title="Up Coming Movies" movieData={upComingMovies} />
            <CardList title="Top Rated Movies" movieData={topRatedMovies} />
          </Box>
        </VStack>
      )}
    </>
  );
};

export default MoviePage;