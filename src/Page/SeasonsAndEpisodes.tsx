/*import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";

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
    ...seasons.map((season) => season.season_number)
  );
  const validSeasonNumbers = Array.from(
    { length: maxSeasonNumber },
    (_, i) => i + 1
  );

  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchEpisodes = async () => {
      //   const apiKey = import.meta.env.VITE_TMDB_API_KEY;
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${tvId}/season/${selectedSeason}?api_key=${
            import.meta.env.VITE_REACT_API_KEY
          }`
        );
        const fetchedEpisodes: Episode[] = response.data.episodes;
        setEpisodes(fetchedEpisodes);
        setSelectedEpisode(
          fetchedEpisodes.length > 0 ? fetchedEpisodes[0] : null
        );
        setSelectedEpisodeId(
          fetchedEpisodes.length > 0 ? fetchedEpisodes[0].id : null
        );
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    };

    fetchEpisodes();
  }, [tvId, selectedSeason]);

  return (
    <>
<div className="flex flex-row dark:bg-[#111111] h-screen">
  {/* Left Section: Season and Episode List 
  <div className="flex flex-col border-r border-black dark:border-white sm:w-1/4 overflow-y-auto">
    {/* Season Selector 
    <div className="border-b border-black dark:border-white p-2">
      <select
        onChange={(e) => setSelectedSeason(Number(e.target.value))}
        className="w-full px-2 py-1 shadow-sm dark:shadow-gray-200 shadow-gray-950 dark:bg-[#111111] dark:text-gray-200 cursor-pointer rounded-md focus:outline-none dark:hover:bg-[#333333be] text-xl"
      >
        {validSeasonNumbers.map((seasonNumber) => (
          <option key={seasonNumber} value={seasonNumber}>
            Season {seasonNumber}
          </option>
        ))}
      </select>
    </div>

    {/* Episode List 
    {episodes.map((episode) => (
      <Box mx="auto" maxW="4xl" px={1} 
      
        key={episode.id}
        onClick={() => {
          setSelectedEpisode(episode);
          setSelectedEpisodeId(episode.id);
        }}
        className={`border-b border-black dark:border-white cursor-pointer p-2 hover:bg-gray-500 ${
          selectedEpisodeId === episode.id ? "text-white bg-gray-700" : "dark:text-black"
        }`}
      >
        Episode {episode.episode_number}: {episode.name}
        </Box>
    ))}
  </div>

  {/* Right Section: Video 

</div>

          {selectedEpisode && (
            <Box w={"80vw"} h={"40vw"} mx="auto" mt="64px">

            <iframe
            style={{
              borderColor: "rgba(0, 0, 0, 0.5)",
              width: "100%",
              height: "100%",
              border: 'none'
            }}
              src={`https://multiembed.mov/?video_id=${tvId}&tmdb=1&s=${selectedSeason}&e=${selectedEpisode.episode_number}`}
              allowFullScreen
            ></iframe>
                      </Box>

          )}



      {/* Streaming Player 
    </>
  );
};

export default SeasonsAndEpisodes; */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Flex, Select, Text } from "@chakra-ui/react";

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
    ...seasons.map((season) => season.season_number)
  );
  const validSeasonNumbers = Array.from(
    { length: maxSeasonNumber },
    (_, i) => i + 1
  );

  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${tvId}/season/${selectedSeason}?api_key=${
            import.meta.env.VITE_REACT_API_KEY
          }`
        );
        const fetchedEpisodes: Episode[] = response.data.episodes;
        setEpisodes(fetchedEpisodes);
        setSelectedEpisode(
          fetchedEpisodes.length > 0 ? fetchedEpisodes[0] : null
        );
        setSelectedEpisodeId(
          fetchedEpisodes.length > 0 ? fetchedEpisodes[0].id : null
        );
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    };

    fetchEpisodes();
  }, [tvId, selectedSeason]);

  return (
    <>
      <Flex h="75vh" bg="gray.900" color="white" w="full" mt="32px" >
        {/* Left Section: Season and Episode List */}
        <Flex
          direction="column"
          borderRight="1px solid"
          borderColor="gray.700"
          width={{ base: "full", sm: "25%" }}
          overflowY="auto"
        >
          {/* Season Selector */}
          <Box borderBottom="1px solid" borderColor="gray.700" p={2}>
            <Select
              bg="gray.800"
              color="white"
              onChange={(e) => setSelectedSeason(Number(e.target.value))}
              focusBorderColor="gray.500"
              _hover={{ bg: "gray.700" }}
              borderRadius="md"
              size="lg"
            >
              {validSeasonNumbers.map((seasonNumber) => (
                <option
                  key={seasonNumber}
                  value={seasonNumber}
                  style={{ background: "#1A202C", color: "white" }}
                >
                  Season {seasonNumber}
                </option>
              ))}
            </Select>
          </Box>

          {/* Episode List */}
          {episodes.map((episode) => (
            <Box
              key={episode.id}
              p={2}
              cursor="pointer"
              borderBottom="1px solid"
              borderColor="gray.700"
              bg={
                selectedEpisodeId === episode.id ? "gray.600" : "transparent"
              }
              _hover={{ bg: "gray.500" }}
              onClick={() => {
                setSelectedEpisode(episode);
                setSelectedEpisodeId(episode.id);
              }}
            >
              <Text
                fontWeight={
                  selectedEpisodeId === episode.id ? "bold" : "normal"
                }
              >
                Episode {episode.episode_number}: {episode.name}
              </Text>
            </Box>
          ))}
        </Flex>

        {/* Right Section: Video Player */}
        {selectedEpisode && (
          <Box flex="1" pl={4}>
            <Box
              width="100%"
              height="0"
              paddingBottom="56.25%"
              position="relative"
              mx="auto"
             
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                src={`https://multiembed.mov/?video_id=${tvId}&tmdb=1&s=${selectedSeason}&e=${selectedEpisode.episode_number}`}
                allowFullScreen
              ></iframe>
            </Box>
          </Box>
        )}
      </Flex>
    </>
  );
};

export default SeasonsAndEpisodes;

