/*import {FC} from 'react';
import Header from '../Component/Header';
import { Box, HStack, Heading, Icon, Text } from '@chakra-ui/react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CardList from '../Component/CardList';
import { useAppSelector,useAppDispatch } from '../App/store';
import { setPopularPage,setTrendingPage,setUpComingPage } from '../App/movieListSlice';


interface Props{
}
let MoviePage:FC<Props> = ({}) => {
    const dispatch = useAppDispatch();
    const {popularMovie} = useAppSelector((state) => state.movieList);
    const { upComingMovie } = useAppSelector((state) => state.movieList);
    const { trendingMovie } = useAppSelector((state) => state.movieList);



    return (
        <>
        <Header />
        <Box w={"100%"} p={"25px 5%"}>
                      {/* <CardList icon={LocalFireDepartmentIcon} title='Now Trending'/>
                <CardList icon={CallMadeIcon} title='Up Coming'/> 
                               <CardList  title='Now Trending' movieData={trendingMovie?.trendingMovieList} page={trendingMovie?.page} appendData={(page) => dispatch(setTrendingPage(page + 1))}/>
                                <CardList  title='Up Coming' movieData={ upComingMovie?.upComingMovieList} page={upComingMovie?.page} appendData={(page) => dispatch(setUpComingPage(page + 1))}/>
                <CardList title='Popular' movieData={popularMovie?.popularMoiveList} page={popularMovie?.page} appendData={(page) => dispatch(setPopularPage(page + 1))}/>
                {/* <CardList icon={StarRateIcon} title='Top Rated'/> 
/*            </Box>
    </>
    )
}
export default MoviePage;*/

import { FC  } from 'react';
import {  Box,VStack } from '@chakra-ui/react';
import { useState } from 'react';
import CardList from '../Component/CardList';
import SearchBar from '../Component/SearchBar';
//import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { usePopularMovies,useTrendingMovies,useUpComingMovies,useTopRatedMovies,useSearchMovies } from '../apis/MovieApi'; // API service calls

interface Props {}

const MoviePage: FC<Props> = () => {
  // Local state for pages (for pagination purposes)
 
  const [searchQuery, setSearchQuery] = useState('');
  const { data: popularMovies } = usePopularMovies();
  const { data: trendingMovies } = useTrendingMovies();
  const { data: upComingMovies } = useUpComingMovies();
  const { data: topRatedMovies } = useTopRatedMovies();
  const { data: searchResults, isFetching } = useSearchMovies(searchQuery);


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
      <Box color="red.300"  maxW="6xl" px={2}>
      {/* Content Block */}
      {isFetching ? (
        <Box >Loading...</Box>
      ) : (
        <CardList title="Search Results" movieData={searchResults} />
      )}
    </Box>
      ) : (
        <VStack  m={"0px 8vw"}>

        <Box  maxW="10xl" >
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