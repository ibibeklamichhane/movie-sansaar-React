import { useQuery } from 'react-query';
import axios from 'axios';
import { Movie } from '../Interface/index'; 


const API_KEY = import.meta.env.VITE_REACT_API_KEY;

const fetchPopularMovies = async (): Promise<Movie[]> => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`
  );
  return data.results;
};

export const usePopularMovies = () => {
  return useQuery<Movie[], Error>('popularMovies', fetchPopularMovies);
};


const fetchTrendingMovies = async (): Promise<Movie[]> => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1&api_key=${API_KEY}`
    );
    return data.results;
  };
  
  export const useTrendingMovies = () => {
    return useQuery<Movie[], Error>('trendingMovies', fetchTrendingMovies);
  };


  const fetchUpComingMovies = async (): Promise<Movie[]> => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`
    );
    return data.results;
  };
  
  export const useUpComingMovies = () => {
    return useQuery<Movie[], Error>('comingMovies', fetchUpComingMovies);
  };


  const fetchTopRatedMovies = async (): Promise<Movie[]> => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`
    );
    return data.results;
  };
  
  export const useTopRatedMovies = () => {
    return useQuery<Movie[], Error>('toprated', fetchTopRatedMovies);
  };


const fetchSearchMovies = async (query: string): Promise<Movie[]> => {
  if (!query) return [];
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&api_key=${API_KEY}`
  );
  return data.results;
};

export const useSearchMovies = (query: string) => {
  return useQuery<Movie[], Error>(['searchMovies', query], () => fetchSearchMovies(query), {
    enabled: !!query, // Only fetch if query is not empty
  });
};
