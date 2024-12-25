import { FC } from "react";
//import Header from '../Component/Header';
import { VStack } from "@chakra-ui/react";
import CardList from "../Component/CardList";
import {
  usePopularSeries,
  useTrendingSeries,
  useUpComingSeries,
  useTopRatedSeries,
  useSearchSeries,
} from "../apis/SeriesApi"; 
import { useState } from "react";
import SearchBar from "../Component/SearchBar";

interface Props {}

const MoviePage: FC<Props> = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: popularseries } = usePopularSeries();
  const { data: trendingseries } = useTrendingSeries();
  const { data: upComingseries } = useUpComingSeries();
  const { data: topRatedseries } = useTopRatedSeries();
  const { data: searchResults, isFetching } = useSearchSeries(searchQuery);

  return (
    <>
      <SearchBar onSearch={(query) => setSearchQuery(query)} />
      {searchQuery ? (
        <>
          <div className="text-red-300">
            {/*<Box color="brand.500">Search result here</Box> */}
            {isFetching ? (
              <p className="text-red-500">Loading...</p>
            ) : (
              <CardList title="Search Results" seriesData={searchResults} />
            )}
          </div>
        </>
      ) : (
        <VStack alignItems={"flex-start"} m={"0px 8vw"}>
          <CardList title="Popular Series" seriesData={popularseries} />
          <CardList title="Trending Series" seriesData={trendingseries} />
          <CardList title="Up Coming Series" seriesData={upComingseries} />
          <CardList title="Top Rated Series" seriesData={topRatedseries} />
        </VStack>
      )}
    </>
  );
};

export default MoviePage;
