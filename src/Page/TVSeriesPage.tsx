/*import { FC } from 'react';
import Header from '../Component/Header';
import { Box } from '@chakra-ui/react';
//import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import StarRateIcon from '@mui/icons-material/StarRate';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CardList from '../Component/CardList';
import { useAppDispatch, useAppSelector } from '../App/store';
import { setPopularPage,setTopRatedPage,setTrendingPage, setUpComingPage } from '../App/seriesListSlice';
interface Props { }

let TVSeriesPage: FC<Props> = ({ }) => {
    const dispatch = useAppDispatch();
    const {popularSeries,topRatedSeries,trendingSeries,upComingSeries} = useAppSelector((state) => state.seriesList)
    return (
        <>
            <Header />
            <Box w={"100%"} p={"25px 5%"}>
               <CardList  title='Now Trending' seiresData={trendingSeries?.trendingSeriesList} page={trendingSeries?.page} appendData={(page) => dispatch(setTrendingPage(page + 1))}/>
               <CardList  title='Up Coming' seiresData={upComingSeries?.upComingSeriesList} page={upComingSeries?.page} appendData={(page)=>dispatch(setUpComingPage(page + 1))}/>                <CardList title='Popular' seiresData={popularSeries?.popularSeriesList} page={popularSeries?.page}  appendData={(page) => dispatch(setPopularPage(page + 1))}/>
                <CardList  title='Top Rated' seiresData={topRatedSeries?.topRatedSeriesList} page={topRatedSeries?.page}  appendData={(page) => dispatch(setTopRatedPage(page + 1))}/>
            </Box>
        </>
    )
}
export default TVSeriesPage;
*/

import { FC, } from 'react';
//import Header from '../Component/Header';
import { VStack } from '@chakra-ui/react';
import CardList from '../Component/CardList';
//import { useQuery } from 'react-query'; // Import React Query hook
import { usePopularSeries,useTrendingSeries,useUpComingSeries,useTopRatedSeries,useSearchSeries } from '../apis/SeriesApi'; // API service calls
import { useState } from 'react';
import SearchBar from '../Component/SearchBar';

interface Props {}

const MoviePage: FC<Props> = () => {
  // Local state for pages (for pagination purposes)
 
  const [searchQuery, setSearchQuery] = useState('');

  const { data: popularseries } = usePopularSeries();
  const { data: trendingseries } = useTrendingSeries();
  const { data: upComingseries } = useUpComingSeries();
  const { data: topRatedseries } = useTopRatedSeries();
  const { data: searchResults, isFetching } = useSearchSeries(searchQuery);


  /*
  // Fetch trending movies
  const { data: trendingMovie, isLoading: trendingLoading } = useQuery(
    ['trendingMovies', trendingPage],
    () => fetchTrendingMovies(trendingPage), // Fetch based on the current page
    { keepPreviousData: true } // Retain the previous data during pagination
  );

  // Fetch upcoming movies
  const { data: upComingMovie, isLoading: upcomingLoading } = useQuery(
    ['upcomingMovies', upcomingPage],
    () => fetchUpcomingMovies(upcomingPage),
    { keepPreviousData: true }
  ); 
  */

  // Fetch popular movies


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
    <CardList title='Popular Series' seriesData={popularseries} />
     <CardList title='Trending Series' seriesData={trendingseries} />
    <CardList title='Up Coming Series' seriesData={upComingseries} />
    <CardList title='Top Rated Series' seriesData={topRatedseries} />
    </VStack>
     )}
    </>


  );
};

export default MoviePage;
