import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Play, Info } from "lucide-react";

import Autoplay from "embla-carousel-autoplay";
import {
  CarouselNext,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  type CarouselApi,
} from "../components/ui/carousel";
import { Button } from "../components/ui/button";

interface Movie {
  id: number;
  title?: string;
  name?: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
}

interface HomeBannerCarouselProps {
  movies: Movie[];
  type?: "movie" | "tv";
  autoPlayDelay?: number;
}

const HomeBannerCarousel: FC<HomeBannerCarouselProps> = ({
  movies,
  type = "movie",
  autoPlayDelay = 5000,
}) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play plugin
  const autoplayPlugin = Autoplay({
    delay: autoPlayDelay,
    stopOnInteraction: true,
  });

  if (!movies.length) return null;

  return (
    <Carousel
      setApi={setApi}
      plugins={[autoplayPlugin]}
      opts={{
        loop: true,
        align: "center",
      }}
      className="relative w-full h-screen"
    >
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem key={movie.id}>
            <BannerSlide movie={movie} type={type} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Arrows */}
      <CarouselPrevious className="left-4 bg-black/50 hover:bg-black/70 border-0 text-white" />
      <CarouselNext className="right-4 bg-black/50 hover:bg-black/70 border-0 text-white" />

      {/* Dots Indicator */}
      {count > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-red-600"
                  : "w-4 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </Carousel>
  );
};

// Individual Banner Slide Component
const BannerSlide: FC<{ movie: Movie; type: "movie" | "tv" }> = ({
  movie,
  type,
}) => {
  const title = movie.title || movie.name;
  const releaseDate = movie.release_date || movie.first_air_date;
  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : "";

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end pb-48">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-xl space-y-4">
            {/* Match & Meta */}
            <div className="flex items-center gap-3 text-sm">
              {movie.vote_average > 0 && (
                <span className="text-green-400 font-bold text-base">
                  {Math.round(movie.vote_average * 10)}% Match
                </span>
              )}
              {releaseYear && (
                <span className="text-gray-300">{releaseYear}</span>
              )}
              <span className="text-gray-300 border border-gray-500 px-1.5 py-0.5 rounded text-xs">
                {type === "movie" ? "MOVIE" : "SERIES"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-none tracking-tight drop-shadow-lg">
              {title}
            </h1>

            {/* Overview */}
            <p className="text-gray-200 text-sm md:text-base line-clamp-3 max-w-lg leading-relaxed">
              {movie.overview}
            </p>

            {/* Buttons */}
            <div className="flex flex-row gap-3 pt-2">
              <Link to={`/${type}/${movie.id}`}>
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-black font-bold gap-2 px-6 rounded-md"
                >
                  <Play className="w-5 h-5 fill-black" />
                  Play
                </Button>
              </Link>

              <Link to={`/${type}/${movie.id}`}>
                <Button
                  size="lg"
                  className="bg-gray-500/60 hover:bg-gray-500/80 text-white font-semibold gap-2 px-6 rounded-md border-0"
                >
                  <Info className="w-5 h-5" />
                  More Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerCarousel;
