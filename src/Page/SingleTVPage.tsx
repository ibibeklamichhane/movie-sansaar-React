import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { TVCast, Series, Season, TVShow } from "../Interface";
import CardList from "../Component/CardList";
import SeasonsAndEpisodes from "./SeasonsAndEpisodes";

interface Props {}

const SingleTVPage: React.FC<Props> = () => {
  const { id } = useParams();

  const [seriesData, setSeriesData] = useState<TVShow>();
  const [movieCast, setMovieCast] = useState<TVCast>();
  const [page, setPage] = useState<number>(1);
  const [similarSeries, setSimilarSeries] = useState<Array<Series>>([]);
  const [seasons, setSeasons] = useState<Season[]>([]);

  useEffect(() => {
    const getSeriesDetails = async () => {
      try {
        const response = await axios(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${
            import.meta.env.VITE_REACT_API_KEY
          }`,
        );

        const data = response.data;
        setSeriesData(data);
        setSeasons(data.seasons || []);
      } catch (e) {
        console.log(e);
      }
    };

    const getMovieCast = async () => {
      try {
        const response = await axios(
          `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${
            import.meta.env.VITE_REACT_API_KEY
          }`,
        );

        setMovieCast(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    getSeriesDetails();
    getMovieCast();
  }, [id]);

  useEffect(() => {
    const getSimilarSeries = async () => {
      try {
        const response = await axios(
          `https://api.themoviedb.org/3/discover/tv?with_genres=${
            seriesData?.genres?.[0]?.id + "," + seriesData?.genres?.[1]?.id
          }&api_key=${import.meta.env.VITE_REACT_API_KEY}&page=${page}`,
        );

        setSimilarSeries(response.data.results);
      } catch (e) {
        console.log(e);
      }
    };

    if (seriesData) getSimilarSeries();
  }, [seriesData, page]);

  return (
    <div className="px-[5vw] text-white">
      {/* TOP SECTION */}
      <div className="flex gap-10 pb-10 items-start">
        {/* POSTER */}
        <img
          src={"https://image.tmdb.org/t/p/original" + seriesData?.poster_path}
          className="w-[25%] h-[400px] object-cover rounded-md"
        />

        {/* DETAILS */}
        <div className="w-[75%] flex flex-col gap-3">
          <h1 className="text-2xl font-semibold font-nunito text-gray-200">
            {seriesData?.name}
          </h1>

          <p className="text-sm text-gray-300 leading-relaxed">
            {seriesData?.overview}
          </p>

          {/* INFO TABLE */}
          <div className="text-sm text-gray-400 space-y-2">
            <InfoRow label="Type" value="Series" />

            <InfoRow
              label="Country"
              value={seriesData?.production_countries
                ?.map((c) => c.name)
                .join(", ")}
            />

            <InfoRow
              label="Genre"
              value={seriesData?.genres?.map((g) => g.name).join(", ")}
            />

            <InfoRow label="Release" value={seriesData?.first_air_date} />

            <InfoRow
              label="Production"
              value={seriesData?.production_companies
                ?.map((c) => c.name)
                .join(", ")}
            />

            <InfoRow
              label="Season"
              value={seriesData?.seasons
                ?.map((s) => `${seriesData.name} ${s.name}`)
                .join(", ")}
            />

            {/* CAST */}
            <div className="flex">
              <p className="w-[180px] font-medium">Cast:</p>

              <p className="flex flex-wrap gap-2">
                {movieCast?.cast?.slice(0, 6).map((c) => (
                  <a
                    key={c.id}
                    href={`https://www.google.com/search?q=${c.name}`}
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    {c.name}
                  </a>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* EPISODES */}
      {seasons.length > 0 && (
        <SeasonsAndEpisodes seasons={seasons} tvId={id || ""} />
      )}

      {/* SIMILAR */}
      <div className="mt-12 mb-6">
        <CardList
          title="Similar Series"
          seriesData={similarSeries}
          page={page}
          appendData={(p) => setPage(p + 1)}
        />
      </div>
    </div>
  );
};

export default SingleTVPage;

/* Helper component */
const InfoRow = ({ label, value }: { label: string; value?: string }) => (
  <div className="flex">
    <p className="w-[180px] font-medium">{label}:</p>
    <p>{value || "-"}</p>
  </div>
);
