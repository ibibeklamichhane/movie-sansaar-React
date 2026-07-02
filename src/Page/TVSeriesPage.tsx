import { FC } from "react";

import CardList, { CardListSkeleton } from "../Component/CardList";
import HomeBannerCarousel from "./HomeBanner";

import {
  usePopularSeries,
  useTrendingSeries,
  useUpComingSeries,
  useTopRatedSeries,
} from "../apis/SeriesApi";

interface Props {}

const TVSeriesPage: FC<Props> = () => {
  const { data: popularseries, isLoading: popularLoading } = usePopularSeries();

  const { data: trendingseries, isLoading: trendingLoading } = useTrendingSeries();

  const { data: upComingseries, isLoading: upcomingLoading } = useUpComingSeries();

  const { data: topRatedseries, isLoading: topRatedLoading } = useTopRatedSeries();

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

      {popularLoading && trendingLoading && upcomingLoading && topRatedLoading ? (
        <CardListSkeleton count={10} />
      ) : (
        <div className="flex flex-col mt-6">
          <div className="w-full max-w-7xl mx-auto">
            <CardList title="Popular Series" seriesData={popularseries} />
            <CardList title="Trending Series" seriesData={trendingseries} />
            <CardList title="Up Coming Series" seriesData={upComingseries} />
            <CardList title="Top Rated Series" seriesData={topRatedseries} />
          </div>
        </div>
      )}
    </>
  );
};

export default TVSeriesPage;
