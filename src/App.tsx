import { lazy,Suspense } from 'react';
import LoginPage from './Page/LoginPage';
import { Routes,Route } from 'react-router-dom';
const SignupPage = lazy(() => import('./Page/SignupPage'));
import HomePage from './Page/HomePage';
import LayOut from './Layout/Layout';
import ContactPage from './Page/ContactPage';
import MoviePage from './Page/MoviePage';
import { useAppDispatch, useAppSelector } from './App/store';
import {useEffect} from 'react';
import TVSeriesPage from './Page/TVSeriesPage';
import {appendPopularMovieList,getUpComingMovieList,getTrendingMovieList,getPopularMovieList,getTopRatedMovieList, appendTopRatedMovieList, appendUpComingMovieList, appendTrendingMovieList,} from './App/Reducer/movieReducer';
import { getPopularSeriesList ,appendPopularSeriesList, getTopRatedSeriesList} from './App/Reducer/seriesReducer.ts';


function App() {
  const dispatch = useAppDispatch();
  const popularPage = useAppSelector((state) => state.movieList.popularMovie.page);
  const upComingPage = useAppSelector((state) => state.movieList.upComingMovie.page);
  const trendingPage = useAppSelector((state) => state.movieList.trendingMovie.page);

  //series
  const popularSeriesPage = useAppSelector((state) => state.seriesList.popularSeries.page);
  const topRatedSeriesPage = useAppSelector((state) => state.seriesList.topRatedSeries.page);

  useEffect(() => {
    dispatch(getPopularMovieList());
    dispatch(getUpComingMovieList());
    dispatch(getTrendingMovieList());
    dispatch(getPopularSeriesList());
    dispatch(getTopRatedSeriesList());

  }, [dispatch]);

  useEffect(() => {
    if (popularPage != 1) {
      dispatch(appendPopularMovieList(popularPage));
    }
  }, [popularPage]);

  useEffect(() => {
    if(upComingPage != 1){
      dispatch(appendUpComingMovieList(upComingPage));
    }
  }, [upComingPage]);
  useEffect(() => {
    if (trendingPage != 1) {
      dispatch(appendTrendingMovieList(trendingPage));
    }
  }, [trendingPage]);

  //
  useEffect(() => {
    if(popularSeriesPage != 1){
      dispatch(appendPopularSeriesList(popularSeriesPage));
    }
  }, [popularSeriesPage]);
  useEffect(() => {
    if(topRatedSeriesPage != 1){
      dispatch(appendTopRatedMovieList(topRatedSeriesPage));
    }
  }, [topRatedSeriesPage]);
  return (
    <Routes>
      <Route path='/' element={<LayOut/>}>
      <Route index element={<HomePage />}/>
      <Route path='/movie' element={<MoviePage />}/>
      <Route path='/series' element={<TVSeriesPage />} />

      <Route path='/contact' element={<ContactPage />}/>

     <Route path='/log-in' element={ <LoginPage />}/>
     <Route path='/sign-up' element={ <Suspense fallback="Loading..."><SignupPage /></Suspense>}/>
     </Route>
    </Routes>
  )
}
export default App