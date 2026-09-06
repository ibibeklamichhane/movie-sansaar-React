import { FC } from "react";
import { Search, X } from "lucide-react";
import { Input } from "../components/ui/input";

interface Props {
  value: string;
  onChange: (query: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

const SearchBar: FC<Props> = ({
  value,
  onChange,
  onKeyDown,
  onBlur,
  placeholder = "Search movies, series...",
  className = "",
  autoFocus = false,
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        autoFocus={autoFocus}
        className="bg-black/40 backdrop-blur-md border border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-white/50 focus-visible:border-white/40 rounded-full pl-9 pr-9 h-9 text-sm"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
