import { FC, useState } from "react";

import { Card } from "../Component/CustomComponents";

import { Movie, Series } from "../Interface";
import { Button } from "../components/ui/button";

interface Props {
  title: string;
  page?: number;
  movieData?: Array<Movie>;
  seriesData?: Array<Series>;
  appendData?: (page: number) => void;
  isLoading?: boolean;
}

const CardList: FC<Props> = ({ title, movieData, seriesData, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const [limit, setLimit] = useState<number>(10);

  const [seriesLimit, setSeriesLimit] = useState<number>(10);

  if (movieData) {
    return (
      <div className="w-full py-6">
        <div className="flex items-center">
          <h1
            className="
              text-xl
              font-semibold
              text-white
              font-nunito
            "
          >
            {title}
          </h1>
        </div>

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-4
            py-8
          "
        >
          {movieData?.slice(0, limit).map((curr, index) => (
            <Card
              key={index}
              isMovie={true}
              title={curr.title}
              image={curr.poster_path}
              id={curr.id}
            />
          ))}
        </div>

        {limit < movieData.length && (
          <div className="flex justify-end">
            <Button
              variant="ghost"
              onClick={() => setLimit(limit + 6)}
              className="
                text-red-400
                hover:text-red-300
              "
            >
              See More
            </Button>
          </div>
        )}
      </div>
    );
  }

  if (seriesData) {
    return (
      <div className="w-full py-6">
        <div className="flex items-center">
          <h1
            className="
              text-xl
              font-semibold
              text-white
              font-nunito
            "
          >
            {title}
          </h1>
        </div>

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-4
            py-8
          "
        >
          {seriesData?.slice(0, seriesLimit).map((curr, index) => (
            <Card
              key={index}
              isMovie={false}
              title={curr.name}
              image={curr.poster_path}
              id={curr.id}
            />
          ))}
        </div>

        {seriesLimit < seriesData.length && (
          <div className="flex justify-end">
            <Button
              variant="ghost"
              onClick={() => setSeriesLimit(seriesLimit + 6)}
              className="
                text-red-400
                hover:text-red-300
              "
            >
              See More
            </Button>
          </div>
        )}
      </div>
    );
  }

  return <div>No Movies/Series Found</div>;
};

export default CardList;
