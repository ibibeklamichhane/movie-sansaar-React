import { FC } from "react";

const CardSkeleton: FC = () => (
  <div className="flex flex-col overflow-hidden rounded-md bg-zinc-950 w-full">
    <div className="w-full aspect-[2/3] bg-zinc-800 animate-pulse rounded-t-md" />
    <div className="p-2 flex flex-col gap-2 w-full">
      <div className="h-3 bg-zinc-800 animate-pulse rounded w-3/4" />
      <div className="h-2 bg-zinc-800 animate-pulse rounded w-1/2" />
    </div>
  </div>
);

interface Props {
  count?: number;
}

const CardListSkeleton: FC<Props> = ({ count = 10 }) => (
  <div className="w-full py-6">
    <div className="flex items-center">
      <div className="h-5 bg-zinc-800 animate-pulse rounded w-48" />
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-8">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  </div>
);

export default CardListSkeleton;
