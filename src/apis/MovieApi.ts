import { useQuery } from 'react-query';
import axios from 'axios';
import { Movie, MovieCast, MovieDetail } from '../Interface/index';


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


const fetchMovieDetail = async (id: string): Promise<MovieDetail> => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${API_KEY}`
  );
  return data;
};

export const useMovieDetail = (id?: string) => {
  return useQuery<MovieDetail, Error>(['movieDetail', id], () => fetchMovieDetail(id as string), {
    enabled: !!id,
  });
};


const fetchMovieCredits = async (id: string): Promise<MovieCast> => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${API_KEY}`
  );
  return data;
};

export const useMovieCredits = (id?: string) => {
  return useQuery<MovieCast, Error>(['movieCredits', id], () => fetchMovieCredits(id as string), {
    enabled: !!id,
  });
};


const fetchMovieTrailerUrl = async (id: string): Promise<string> => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${API_KEY}`
  );
  const trailer = data.results.find(
    (video: { type: string; site: string; key: string }) =>
      video.type === 'Trailer' && video.site === 'YouTube'
  );
  return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : '';
};

export const useMovieTrailerUrl = (id?: string) => {
  return useQuery<string, Error>(['movieTrailer', id], () => fetchMovieTrailerUrl(id as string), {
    enabled: !!id,
  });
};


const fetchSimilarMovies = async (id: string): Promise<Movie[]> => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1&api_key=${API_KEY}`
  );
  return data.results;
};

export const useSimilarMovies = (id?: string) => {
  return useQuery<Movie[], Error>(['similarMovies', id], () => fetchSimilarMovies(id as string), {
    enabled: !!id,
  });
};
