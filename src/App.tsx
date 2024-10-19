/*import { lazy,Suspense } from 'react';
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
import { getPopularSeriesList ,appendPopularSeriesList, getTopRatedSeriesList, appendTrendingSeriesList, getTrendingSeriesList, getUpComingSeriesList,appendUpComingSeriesList } from './App/Reducer/seriesReducer.ts';


function App() {
  const dispatch = useAppDispatch();
  const popularPage = useAppSelector((state) => state.movieList.popularMovie.page);
  const upComingPage = useAppSelector((state) => state.movieList.upComingMovie.page);
  const trendingPage = useAppSelector((state) => state.movieList.trendingMovie.page);

  //series
  const popularSeriesPage = useAppSelector((state) => state.seriesList.popularSeries.page);
  const topRatedSeriesPage = useAppSelector((state) => state.seriesList.topRatedSeries.page);
  const trendingSeriesPage = useAppSelector((state) => state.seriesList.trendingSeries.page);
  const upComingSeriesPage = useAppSelector((state) => state.seriesList.upComingSeries.page);


  useEffect(() => {
    dispatch(getPopularMovieList());
    dispatch(getUpComingMovieList());
    dispatch(getTrendingMovieList());
    dispatch(getPopularSeriesList());
    dispatch(getTopRatedSeriesList());
    dispatch(getTrendingSeriesList());
    dispatch(getUpComingSeriesList());

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

  useEffect(() => {
    if(trendingSeriesPage != 1){
      dispatch(appendTrendingSeriesList(trendingSeriesPage));
    }
  }, [trendingSeriesPage]);
  useEffect(() => {
    if(upComingSeriesPage != 1){
      dispatch(appendUpComingSeriesList(upComingSeriesPage +1 ));
    }
  }, [upComingSeriesPage]);
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
*/
import { lazy, Suspense, useEffect } from 'react';
import LoginPage from './Page/LoginPage';
import { Routes, Route } from 'react-router-dom';
import { useQuery } from 'react-query'; // React Query import
const SignupPage = lazy(() => import('./Page/SignupPage'));
import HomePage from './Page/HomePage';
import LayOut from './Layout/Layout';
import ContactPage from './Page/ContactPage';
import MoviePage from './Page/MoviePage';
import TVSeriesPage from './Page/TVSeriesPage';
import { usePopularMovies } from './apis/MovieApi'; // You will create these API calls
//import { fetchPopularSeries, fetchTrendingSeries, fetchTopRatedSeries, fetchUpcomingSeries } from './services/seriesService'; // Series API calls
import SingleMoviePage from './Page/SingleMoviePage.tsx';

function App() {
  // Fetch movies using React Query
  const { data: popularMovies } = useQuery('popularMovies', usePopularMovies);


  // Fetch series using React Query

  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<HomePage />} />
        <Route path="/movie" element={<MoviePage />} /> {/* Pass fetched movies */}
        <Route path="/series" element={<TVSeriesPage  />} /> {/* Pass fetched series */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/movie/:id' element={<SingleMoviePage />}/>
        <Route path="/log-in" element={<LoginPage />} />
        <Route
          path="/sign-up"
          element={
            <Suspense fallback="Loading...">
              <SignupPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
