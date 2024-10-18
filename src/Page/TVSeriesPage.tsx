import { FC } from 'react';
import Header from '../Component/Header';
import { Box } from '@chakra-ui/react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import StarRateIcon from '@mui/icons-material/StarRate';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CardList from '../Component/CardList';
import { useAppDispatch, useAppSelector } from '../App/store';
import { setPopularPage,setTopRatedPage } from '../App/seriesListSlice';
interface Props {

}

let TVSeriesPage: FC<Props> = ({ }) => {
    const dispatch = useAppDispatch();
    const {popularSeries,topRatedSeries} = useAppSelector((state) => state.seriesList)
    return (
        <>
            <Header />
            <Box w={"100%"} p={"25px 5%"}>
              {/*}  <CardList  title='Now Trending' data={trendingMovie?.trendingMovieList} page={trendingMovie?.page} />
                <CardList  title='Up Coming' data={upComingMovie?.upComingMovieList} page={upComingMovie?.page} /> */}
                <CardList title='Popular' seiresData={popularSeries?.popularSeriesList} page={popularSeries?.page}  appendData={(page) => dispatch(setPopularPage(page + 1))}/>
                <CardList  title='Top Rated' seiresData={topRatedSeries?.topRatedSeriesList} page={topRatedSeries?.page}  appendData={(page) => dispatch(setTopRatedPage(page + 1))}/>
            </Box>
        </>
    )
}
export default TVSeriesPage;