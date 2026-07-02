import { FC } from "react";
import { useState, useEffect } from "react";
import CardList from "../Component/CardList";
import {
  usePopularMovies,
  useTrendingMovies,
  useUpComingMovies,
  useTopRatedMovies,
  useSearchMovies,
} from "../apis/MovieApi";
import { useDebouncedValue } from "../hooks/useDebounce";
import HomeBannerCarousel from "./HomeBanner";
import CardListSkeleton from "../Component/CardListSkeleton";

interface Props {}

const MoviePage: FC<Props> = () => {
  const [searchQuery, _setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 300);
  const { data: popularMovies, isLoading: popularLoading } = usePopularMovies();
  const { data: trendingMovies, isLoading: trendingLoading } =
    useTrendingMovies();
  const { data: upComingMovies, isLoading: upcomingLoading } =
    useUpComingMovies();
  const { data: topRatedMovies, isLoading: topRatedLoading } =
    useTopRatedMovies();
  const { data: searchResults, isFetching } =
    useSearchMovies(debouncedSearchQuery);

  // Get featured movie for banner (first trending movie)
  const [_featuredMovie, setFeaturedMovie] = useState<any>(null);

  useEffect(() => {
    if (trendingMovies && trendingMovies.length > 0) {
      setFeaturedMovie(trendingMovies[0]);
    } else if (popularMovies && popularMovies.length > 0) {
      setFeaturedMovie(popularMovies[0]);
    }
  }, [trendingMovies, popularMovies]);

  const bannerMovies =
    trendingMovies?.slice(0, 5) || popularMovies?.slice(0, 5);

  return (
    <>
      {/* Show banner only when not searching */}
      {!searchQuery && bannerMovies && bannerMovies.length > 0 && (
        <div className="relative">
          <HomeBannerCarousel
            movies={bannerMovies}
            type="movie"
            autoPlayDelay={6000}
          />
          {/* Search bar overlaid at top-right, visually in navbar area */}
          {/* <div className="absolute top-5 right-[5%] z-40 w-72">
            <SearchBar onSearch={(query) => setSearchQuery(query)} />
          </div> */}
        </div>
      )}

      {/* {searchQuery && <SearchBar onSearch={(query) => setSearchQuery(query)} />} */}

      {searchQuery ? (
        <div className="mt-4">
          {isFetching ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-white">Loading...</div>
            </div>
          ) : (
            <CardList title="Search Results" movieData={searchResults} />
          )}
        </div>
      ) : popularLoading &&
        trendingLoading &&
        upcomingLoading &&
        topRatedLoading ? (
        <CardListSkeleton count={10} />
      ) : (
        <div className="flex flex-col mt-6">
          <div className=" w-full max-w-7xl mx-auto">
            <CardList title="Popular Movies" movieData={popularMovies} />
            <CardList title="Trending Movies" movieData={trendingMovies} />
            <CardList title="Up Coming Movies" movieData={upComingMovies} />
            <CardList title="Top Rated Movies" movieData={topRatedMovies} />
          </div>
        </div>
      )}
    </>
  );
};

export default MoviePage;
