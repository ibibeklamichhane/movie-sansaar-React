// import { FC, useState } from "react";
// import { Input, Box } from "@chakra-ui/react";

// interface Props {
//   onSearch: (query: string) => void;
// }

// const SearchBar: FC<Props> = ({ onSearch }) => {
//   const [input, setInput] = useState("");

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <Box
//       mx="auto"
//       maxW={{ base: "100%", md: "4xl" }}
//       px={{ base: 4, sm: 6, md: 1 }}
//     >
//       <Input
//         color="brand.500"
//         placeholder="Search for movies,series......."
//         value={input}
//         onChange={handleInputChange}
//         size={{ base: "sm", md: "md" }}
//         borderColor="brand.500"
//         borderWidth="2px"
//         _focus={{
//           borderColor: "brand.500",
//           boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)",
//         }}
//       />
//     </Box>
//   );
// };

// export default SearchBar;
import React, { FC, useState } from "react";
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
