import { FC } from "react";

const CardListSkeleton: FC = () => (
  <div className="flex flex-col overflow-hidden rounded-md bg-zinc-950 w-full">
    <div className="w-full aspect-[2/3] bg-zinc-800 animate-pulse rounded-t-md" />
    <div className="p-2 flex flex-col gap-2 w-full">
      <div className="h-3 bg-zinc-800 animate-pulse rounded w-3/4" />
      <div className="h-2 bg-zinc-800 animate-pulse rounded w-1/2" />
    </div>
  </div>
);

export default CardListSkeleton;
