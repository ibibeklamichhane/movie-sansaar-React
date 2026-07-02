// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Box, Flex, Select, Text } from "@chakra-ui/react";

// interface Episode {
//   id: number;
//   name: string;
//   episode_number: number;
// }

// interface Season {
//   season_number: number;
// }

// interface SeasonsAndEpisodesProps {
//   seasons: Season[];
//   tvId: string;
// }

// const SeasonsAndEpisodes: React.FC<SeasonsAndEpisodesProps> = ({
//   seasons,
//   tvId,
// }) => {
//   const maxSeasonNumber = Math.max(
//     ...seasons.map((season) => season.season_number)
//   );
//   const validSeasonNumbers = Array.from(
//     { length: maxSeasonNumber },
//     (_, i) => i + 1
//   );

//   const [selectedSeason, setSelectedSeason] = useState<number>(1);
//   const [episodes, setEpisodes] = useState<Episode[]>([]);
//   const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
//   const [selectedEpisodeId, setSelectedEpisodeId] = useState<number | null>(
//     null
//   );

//   useEffect(() => {
//     const fetchEpisodes = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/tv/${tvId}/season/${selectedSeason}?api_key=${
//             import.meta.env.VITE_REACT_API_KEY
//           }`
//         );
//         const fetchedEpisodes: Episode[] = response.data.episodes;
//         setEpisodes(fetchedEpisodes);
//         setSelectedEpisode(
//           fetchedEpisodes.length > 0 ? fetchedEpisodes[0] : null
//         );
//         setSelectedEpisodeId(
//           fetchedEpisodes.length > 0 ? fetchedEpisodes[0].id : null
//         );
//       } catch (error) {
//         console.error("Error fetching episodes:", error);
//       }
//     };

//     fetchEpisodes();
//   }, [tvId, selectedSeason]);

//   return (
//     <>
//       <Flex h="75vh" bg="gray.900" color="white" w="full" mt="32px" >
//         {/* Left Section: Season and Episode List */}
//         <Flex
//           direction="column"
//           borderRight="1px solid"
//           borderColor="gray.700"
//           width={{ base: "full", sm: "25%" }}
//           overflowY="auto"
//         >
//           {/* Season Selector */}
//           <Box borderBottom="1px solid" borderColor="gray.700" p={2}>
//             <Select
//               bg="gray.800"
//               color="white"
//               onChange={(e) => setSelectedSeason(Number(e.target.value))}
//               focusBorderColor="gray.500"
//               _hover={{ bg: "gray.700" }}
//               borderRadius="md"
//               size="lg"
//             >
//               {validSeasonNumbers.map((seasonNumber) => (
//                 <option
//                   key={seasonNumber}
//                   value={seasonNumber}
//                   style={{ background: "#1A202C", color: "white" }}
//                 >
//                   Season {seasonNumber}
//                 </option>
//               ))}
//             </Select>
//           </Box>

//           {/* Episode List */}
//           {episodes.map((episode) => (
//             <Box
//               key={episode.id}
//               p={2}
//               cursor="pointer"
//               borderBottom="1px solid"
//               borderColor="gray.700"
//               bg={
//                 selectedEpisodeId === episode.id ? "gray.600" : "transparent"
//               }
//               _hover={{ bg: "gray.500" }}
//               onClick={() => {
//                 setSelectedEpisode(episode);
//                 setSelectedEpisodeId(episode.id);
//               }}
//             >
//               <Text
//                 fontWeight={
//                   selectedEpisodeId === episode.id ? "bold" : "normal"
//                 }
//               >
//                 Episode {episode.episode_number}: {episode.name}
//               </Text>
//             </Box>
//           ))}
//         </Flex>

//         {/* Right Section: Video Player */}
//         {selectedEpisode && (
//           <Box flex="1" pl={4}>
//             <Box
//               width="100%"
//               height="0"
//               paddingBottom="56.25%"
//               position="relative"
//               mx="auto"

//             >
//               <iframe
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   border: "none",
//                 }}
//                 src={`https://multiembed.mov/?video_id=${tvId}&tmdb=1&s=${selectedSeason}&e=${selectedEpisode.episode_number}`}
//                 allowFullScreen
//               ></iframe>
//             </Box>
//           </Box>
//         )}
//       </Flex>
//     </>
//   );
// };

// export default SeasonsAndEpisodes;

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

interface Episode {
  id: number;
  name: string;
  episode_number: number;
}

interface Season {
  season_number: number;
}

interface SeasonsAndEpisodesProps {
  seasons: Season[];
  tvId: string;
}

const SeasonsAndEpisodes: React.FC<SeasonsAndEpisodesProps> = ({
  seasons,
  tvId,
}) => {
  const maxSeasonNumber = Math.max(
    ...seasons.map((season) => season.season_number),
  );

  const validSeasonNumbers = Array.from(
    { length: maxSeasonNumber },
    (_, i) => i + 1,
  );

  const [selectedSeason, setSelectedSeason] = useState<number>(1);

  const [episodes, setEpisodes] = useState<Episode[]>([]);

  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  const [selectedEpisodeId, setSelectedEpisodeId] = useState<number | null>(
    null,
  );

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${tvId}/season/${selectedSeason}?api_key=${
            import.meta.env.VITE_REACT_API_KEY
          }`,
        );

        const fetchedEpisodes: Episode[] = response.data.episodes;

        setEpisodes(fetchedEpisodes);

        setSelectedEpisode(
          fetchedEpisodes.length > 0 ? fetchedEpisodes[0] : null,
        );

        setSelectedEpisodeId(
          fetchedEpisodes.length > 0 ? fetchedEpisodes[0].id : null,
        );
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    };

    fetchEpisodes();
  }, [tvId, selectedSeason]);

  return (
    <div
      className="
        flex
        h-[75vh]
        w-full
        mt-8
        bg-zinc-900
        text-white
        overflow-hidden
        rounded-lg
      "
    >
      {/* LEFT SIDEBAR */}
      <div
        className="
          flex
          flex-col
          border-r
          border-zinc-700
          w-full
          sm:w-[25%]
          overflow-y-auto
        "
      >
        {/* SEASON SELECT */}
        <div className="border-b border-zinc-700 p-2">
          <Select
            value={selectedSeason.toString()}
            onValueChange={(value) => setSelectedSeason(Number(value))}
          >
            <SelectTrigger
              className="
                bg-zinc-800
                border-zinc-700
                text-white
              "
            >
              <SelectValue placeholder="Select Season" />
            </SelectTrigger>

            <SelectContent className="bg-zinc-900 border-zinc-700 text-white">
              {validSeasonNumbers.map((seasonNumber) => (
                <SelectItem key={seasonNumber} value={seasonNumber.toString()}>
                  Season {seasonNumber}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* EPISODE LIST */}
        {episodes.map((episode) => (
          <div
            key={episode.id}
            onClick={() => {
              setSelectedEpisode(episode);
              setSelectedEpisodeId(episode.id);
            }}
            className={`
              p-3
              cursor-pointer
              border-b
              border-zinc-700
              transition-colors
              hover:bg-zinc-700
              ${selectedEpisodeId === episode.id ? "bg-zinc-700" : ""}
            `}
          >
            <p
              className={`
                text-sm
                ${
                  selectedEpisodeId === episode.id ? "font-bold" : "font-normal"
                }
              `}
            >
              Episode {episode.episode_number}: {episode.name}
            </p>
          </div>
        ))}
      </div>

      {/* VIDEO PLAYER */}
      {selectedEpisode && (
        <div className="flex-1 p-4">
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-lg
            "
            style={{
              paddingBottom: "56.25%",
            }}
          >
            <iframe
              className="
                absolute
                top-0
                left-0
                h-full
                w-full
                border-0
              "
              src={`https://multiembed.mov/?video_id=${tvId}&tmdb=1&s=${selectedSeason}&e=${selectedEpisode.episode_number}`}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SeasonsAndEpisodes;
