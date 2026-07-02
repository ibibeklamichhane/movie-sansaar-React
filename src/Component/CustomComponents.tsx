import { FC } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

import { LoginInputProps } from "../Interface";
import { Input } from "../components/ui/input";

export const errorToast = (toast: any, title: string, error: string) => {
  toast({
    title,
    description: error,
    duration: 5000,
  });
};

export const successToast = (toast: any, title: string, message: string) => {
  toast({
    title,
    description: message,
    duration: 3000,
  });
};

export const LoginInput: FC<LoginInputProps> = ({
  type,
  name,
  label,
  placeholder,
  register,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[12px] text-gray-400 font-nunito">{label}</p>

      <Input
        {...register(name, { required: true })}
        type={type}
        placeholder={placeholder}
        className="
          bg-zinc-900
          border-none
          text-gray-200
          placeholder:text-gray-500
          focus-visible:ring-1
          focus-visible:ring-white
          font-nunito
        "
      />
    </div>
  );
};

export const Card: FC<any> = ({ title, image, date, id, isMovie }) => {
  return (
    <Link
      to={isMovie ? `/movie/${id}` : `/series/${id}`}
      className="relative flex flex-col items-start overflow-hidden rounded-md bg-zinc-950 w-full group"
    >
      {/* Hover overlay covers full card */}
      <div className="absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center rounded-md">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
          <svg className="w-6 h-6 text-white fill-white" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      <ImageLoader
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={title}
        width="100%"
        height="100%"
      />

      <div className="p-2 flex flex-col gap-1 w-full">
        <h2 className="text-xs font-semibold text-gray-100 leading-tight font-nunito line-clamp-2">
          {title}
        </h2>
        {date && (
          <p className="text-[10px] text-gray-400 font-nunito">{date}</p>
        )}
      </div>
    </Link>
  );
};

export const ImageLoader: FC<any> = ({ alt, src }) => {
  return (
    <div className="w-full aspect-[2/3] overflow-hidden">
      <LazyLoadImage
        alt={alt}
        src={src}
        effect="opacity"
        width="100%"
        height="100%"
        className="object-cover w-full h-full rounded-t-md"
      />
    </div>
  );
};
