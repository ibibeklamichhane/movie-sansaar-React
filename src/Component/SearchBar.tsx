import { FC, useState } from "react";
import { Input } from "../components/ui/input";

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="w-full">
      <Input
        placeholder="🔍  Search movies, series..."
        value={input}
        onChange={handleInputChange}
        className="bg-black/40 backdrop-blur-md border border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-white/50 focus-visible:border-white/40 rounded-full px-4 h-9 text-sm"
      />
    </div>
  );
};

export default SearchBar;
