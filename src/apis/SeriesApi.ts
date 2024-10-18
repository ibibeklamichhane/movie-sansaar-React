// movieQueries.ts
import { useQuery } from 'react-query';
import axios from 'axios';
import { Series } from '../Interface/index'; // Assuming you named your interface file `interfaces.ts`


const API_KEY = import.meta.env.VITE_REACT_API_KEY;

const fetchPopularSeries = async (): Promise<Series[]> => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${API_KEY}`
  );
  return data.results;
};

export const usePopularSeries = () => {
  return useQuery<Series[], Error>('popularMovies', fetchPopularSeries);
};

const fetchTrendingSeries = async (): Promise<Series[]> => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=1&api_key=${API_KEY}`
    );
    return data.results;
  };
  
  export const useTrendingSeries = () => {
    return useQuery<Series[], Error>('trendingMovies', fetchTrendingSeries);
  };

  const fetchUpComingSeries = async (): Promise<Series[]> => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=1&api_key=${API_KEY}`
    );
    return data.results;
  };
  
  export const useUpComingSeries = () => {
    return useQuery<Series[], Error>('comingMovies', fetchUpComingSeries);
  };
  const fetchTopRatedSeries = async (): Promise<Series[]> => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${API_KEY}`
    );
    return data.results;
  };
  
  export const useTopRatedSeries = () => {
    return useQuery<Series[], Error>('toprated', fetchTopRatedSeries);
  };
// Similarly, create other functions for top-rated, upcoming, and trending movies
