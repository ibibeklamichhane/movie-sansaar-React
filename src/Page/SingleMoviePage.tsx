import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";

import { Movie, MovieCast, MovieDetail } from "../Interface";

import CardList from "../Component/CardList";
import { Button } from "../components/ui/button";

interface Props {}

const SingleMoviePage: React.FC<Props> = () => {
  const { id } = useParams();

  const [movieData, setMovieData] = useState<MovieDetail>();

  const [movieCast, setMovieCast] = useState<MovieCast>();

  const [page] = useState<number>(1);

  const [similarMovies, setSimilarMovies] = useState<Array<Movie>>([]);

  const [videoUrl, setVideoUrl] = useState<string>("");

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await axios(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${
            import.meta.env.VITE_REACT_API_KEY
          }`,
        );

        const data = response.data;

        setMovieData(data);

        const videoResponse = await axios(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
            import.meta.env.VITE_REACT_API_KEY
          }`,
        );

        const videoData = videoResponse.data.results.find(
          (video: any) => video.type === "Trailer" && video.site === "YouTube",
        );

        if (videoData) {
          setVideoUrl(`https://www.youtube.com/watch?v=${videoData.key}`);
        }
      } catch (e) {
        console.log(e);
      }
    };

    const getMovieCast = async () => {
      try {
        const response = await axios(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${
            import.meta.env.VITE_REACT_API_KEY
          }`,
        );

        setMovieCast(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    const getSimilarMovie = async () => {
      try {
        const response = await axios(
          `https://api.themoviedb.org/3/discover/movie?with_genres=28,16&api_key=${
            import.meta.env.VITE_REACT_API_KEY
          }&page=${page}`,
        );

        setSimilarMovies(response.data.results);
      } catch (e) {
        console.log(e);
      }
    };

    getMovieDetails();
    getMovieCast();
    getSimilarMovie();
  }, [id, page]);

  return (
    <div className="flex flex-col items-start px-[5vw] text-white mt-4">
      {/* MAIN SECTION */}
      <div
        className="
          flex
          gap-10
          pb-10
          items-start
          w-full
        "
      >
        {/* POSTER */}
        <img
          src={`https://image.tmdb.org/t/p/original${movieData?.poster_path}`}
          alt={movieData?.original_title}
          className="
            w-[25%]
            h-[400px]
            object-cover
            rounded-md
          "
        />

        {/* DETAILS */}
        <div
          className="
            w-[75%]
            flex
            flex-col
            items-start
          "
        >
          <h1
            className="
              text-2xl
              font-semibold
              text-gray-100
              my-2
              font-nunito
            "
          >
            {movieData?.original_title}
          </h1>

          <p
            className="
              text-sm
              text-gray-300
              my-2
              leading-relaxed
            "
          >
            {movieData?.overview}
          </p>

          {/* INFO TABLE */}
          <div className="mt-4 space-y-3 text-sm">
            <InfoRow label="Type" value="Movie" />

            <InfoRow
              label="Country"
              value={movieData?.production_countries
                ?.map((c) => c.name)
                .join(", ")}
            />

            <InfoRow
              label="Genre"
              value={movieData?.genres?.map((g) => g.name).join(", ")}
            />

            <InfoRow label="Release" value={movieData?.release_date} />

            <InfoRow
              label="Production Company"
              value={movieData?.production_companies
                ?.map((c) => c.name)
                .join(", ")}
            />

            <InfoRow label="Tag" value={movieData?.tagline} />

            {/* CAST */}
            <div className="flex">
              <p
                className="
                  w-[180px]
                  text-gray-400
                  font-medium
                "
              >
                Cast :
              </p>

              <div className="flex flex-wrap gap-2">
                {movieCast?.cast?.slice(0, 6).map((curr) => (
                  <a
                    key={curr.id}
                    href={`https://www.google.com/search?q=${curr.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="
                        text-blue-400
                        hover:underline
                      "
                  >
                    {curr.name} - {curr.character}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TRAILER */}
      {videoUrl && (
        <div
          className="
            w-[70vw]
            h-[400px]
            mx-auto
          "
        >
          <Button className="mb-4">Watch Trailer</Button>

          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls
            playing={false}
          />
        </div>
      )}

      {/* MOVIE PLAYER */}
      <div
        className="
          w-[70vw]
          h-[400px]
          mx-auto
          mt-16
        "
      >
        <Button className="mb-4">Watch Movie</Button>

        <iframe
          className="
            w-full
            h-full
            border-0
            rounded-md
          "
          src={`https://multiembed.mov/?video_id=${id}&tmdb=1`}
          allowFullScreen
        />
      </div>

      {/* SIMILAR MOVIES */}
      <div className="mt-14">
        <CardList title="Similar Movies" movieData={similarMovies} />
      </div>
    </div>
  );
};

export default SingleMoviePage;

/* -------------------- */
/* HELPER COMPONENT */
/* -------------------- */

const InfoRow = ({ label, value }: { label: string; value?: string }) => {
  return (
    <div className="flex">
      <p
        className="
          w-[180px]
          text-gray-400
          font-medium
        "
      >
        {label} :
      </p>

      <p className="text-gray-300">{value || "-"}</p>
    </div>
  );
};
