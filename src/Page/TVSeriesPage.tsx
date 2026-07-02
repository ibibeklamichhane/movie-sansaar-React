import { FC } from "react";

import CardList from "../Component/CardList";
import HomeBannerCarousel from "./HomeBanner";

import {
  usePopularSeries,
  useTrendingSeries,
  useUpComingSeries,
  useTopRatedSeries,
} from "../apis/SeriesApi";

interface Props {}

const TVSeriesPage: FC<Props> = () => {
  const { data: popularseries } = usePopularSeries();

  const { data: trendingseries } = useTrendingSeries();

  const { data: upComingseries } = useUpComingSeries();

  const { data: topRatedseries } = useTopRatedSeries();

  const bannerSeries =
    trendingseries?.slice(0, 5) || popularseries?.slice(0, 5) || [];

  return (
    <>
      {bannerSeries.length > 0 && (
        <div className="relative">
          <HomeBannerCarousel
            movies={bannerSeries}
            type="tv"
            autoPlayDelay={6000}
          />
        </div>
      )}

      <div className="flex flex-col mt-6">
        <div className="w-full max-w-7xl mx-auto">
          <CardList title="Popular Series" seriesData={popularseries} />
          <CardList title="Trending Series" seriesData={trendingseries} />
          <CardList title="Up Coming Series" seriesData={upComingseries} />
          <CardList title="Top Rated Series" seriesData={topRatedseries} />
        </div>
      </div>
    </>
  );
};

export default TVSeriesPage;
