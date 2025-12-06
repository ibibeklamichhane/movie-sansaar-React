// import { FC, useState } from 'react';
// import { Input, Box } from '@chakra-ui/react';

// interface Props {
//   onSearch: (query: string) => void;
// }

// const SearchBar: FC<Props> = ({ onSearch }) => {
//   const [input, setInput] = useState('');

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (

//     <Box mx="auto" maxW="4xl" px={1}>
//       <Input color="brand.500"
//         placeholder="Search for movies,series......."
//         value={input}
//         onChange={handleInputChange}
//         size="md"
//       />
//     </Box>
//   );
// };

// export default SearchBar;
import { FC, useState } from "react";

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
    <div className="w-full  md:max-w-4xl mx-auto">
      <input
        className="w-full t border-4 h-10 border-red-500
                   text-white px-4"
        placeholder="Search for movies, series.."
        value={input}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
