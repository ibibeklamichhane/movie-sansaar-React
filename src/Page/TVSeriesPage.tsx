// import { FC } from "react";
// import { VStack, Box } from "@chakra-ui/react";
// import CardList from "../Component/CardList";
// import {
//   usePopularSeries,
//   useTrendingSeries,
//   useUpComingSeries,
//   useTopRatedSeries,
//   useSearchSeries,
// } from "../apis/SeriesApi";
// import { useState } from "react";
// import SearchBar from "../Component/SearchBar";
// import { useDebouncedValue } from "../hooks/useDebounce";

// interface Props {}

// const MoviePage: FC<Props> = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const debouncedSearchQuery = useDebouncedValue(searchQuery, 300);
//   const { data: popularseries } = usePopularSeries();
//   const { data: trendingseries } = useTrendingSeries();
//   const { data: upComingseries } = useUpComingSeries();
//   const { data: topRatedseries } = useTopRatedSeries();
//   const { data: searchResults, isFetching } =
//     useSearchSeries(debouncedSearchQuery);

//   return (
//     <>
//       <SearchBar onSearch={(query) => setSearchQuery(query)} />
//       {searchQuery ? (
//         <>
//           <div className="text-red-300">
//             {/*<Box color="brand.500">Search result here</Box> */}
//             {isFetching ? (
//               <p className="text-red-500">Loading...</p>
//             ) : (
//               <CardList title="Search Results" seriesData={searchResults} />
//             )}
//           </div>
//         </>
//       ) : (
//         <VStack m={"0px 8vw"}>
//           <Box maxW="10xl">
//             <CardList title="Popular Series" seriesData={popularseries} />
//             <CardList title="Trending Series" seriesData={trendingseries} />
//             <CardList title="Up Coming Series" seriesData={upComingseries} />
//             <CardList title="Top Rated Series" seriesData={topRatedseries} />
//           </Box>
//         </VStack>
//       )}
//     </>
//   );
// };

// export default MoviePage;

import { FC } from "react";

import CardList from "../Component/CardList";
import HomeBannerCarousel from "./HomeBanner";

import {
  usePopularSeries,
  useTrendingSeries,
  useUpComingSeries,
  useTopRatedSeries,
} from "../apis/SeriesApi";

interface Props {}

const TVSeriesPage: FC<Props> = () => {
  const { data: popularseries } = usePopularSeries();

  const { data: trendingseries } = useTrendingSeries();

  const { data: upComingseries } = useUpComingSeries();

  const { data: topRatedseries } = useTopRatedSeries();

  const bannerSeries =
    trendingseries?.slice(0, 5) || popularseries?.slice(0, 5) || [];

  return (
    <>
      {bannerSeries.length > 0 && (
        <div className="relative">
          <HomeBannerCarousel
            movies={bannerSeries}
            type="tv"
            autoPlayDelay={6000}
          />
        </div>
      )}

      <div className="flex flex-col mt-6">
        <div className="w-full max-w-7xl mx-auto">
          <CardList title="Popular Series" seriesData={popularseries} />
          <CardList title="Trending Series" seriesData={trendingseries} />
          <CardList title="Up Coming Series" seriesData={upComingseries} />
          <CardList title="Top Rated Series" seriesData={topRatedseries} />
        </div>
      </div>
    </>
  );
};

export default TVSeriesPage;
