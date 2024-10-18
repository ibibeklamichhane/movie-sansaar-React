import {FC} from 'react';
import Header from '../Component/Header';
import { Box, HStack, Heading, Icon, Text } from '@chakra-ui/react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CardList from '../Component/CardList';
import { useAppDispatch,useAppSelector } from '../App/store';


interface Props{
}
let MoviePage:FC<Props> = ({}) => {
    const {popularMovie} = useAppSelector((state) => state.movieList);
    const { upComingMovie } = useAppSelector((state) => state.movieList);
    const { trendingMovie } = useAppSelector((state) => state.movieList);



    return (
        <>
        <Header />
        <Box w={"100%"} p={"25px 5%"}>
                      {/* <CardList icon={LocalFireDepartmentIcon} title='Now Trending'/>
                <CardList icon={CallMadeIcon} title='Up Coming'/> */}
                               <CardList  title='Now Trending' data={trendingMovie?.trendingMovieList} page={trendingMovie?.page}/>
                                <CardList  title='Up Coming' data={ upComingMovie?.upComingMovieList} page={upComingMovie?.page}/>
                <CardList title='Popular' data={popularMovie?.popularMoiveList} page={popularMovie?.page}/>
                {/* <CardList icon={StarRateIcon} title='Top Rated'/> */}
            </Box>
    </>
    )
}
export default MoviePage;