import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Movie, MovieCast, MovieDetail } from "../Interface";
import CardList from "../Component/CardList";
import ReactPlayer from "react-player";

interface Props {}

let SingleMoviePage: FC<Props> = ({}) => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState<MovieDetail>();
  const [movieCast, setMovieCast] = useState<MovieCast>();
  const [page, setPage] = useState<number>(1);
  const [similarMovies, setSimilarMovies] = useState<Array<Movie>>([]);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [streamingUrl, setStreamingUrl] = useState<string>("");

  const pageg = setPage;
  console.log(pageg);
  const stream = streamingUrl;
  console.log(stream);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await axios(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${
            import.meta.env.VITE_REACT_API_KEY
          }`
        );
        const data = response.data;
        setMovieData(data);
        const videoResponse = await axios(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
            import.meta.env.VITE_REACT_API_KEY
          }`
        );
        const videoData = videoResponse.data.results.find(
          (video: any) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (videoData) {
          setVideoUrl(`https://www.youtube.com/watch?v=${videoData.key}`);
        }
      } catch (e) {
        console.log(e);
      }
    };

    const getMovieCast = async () => {
      try {
        const response = await axios(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${
            import.meta.env.VITE_REACT_API_KEY
          }`
        );
        const data = response.data;
        setMovieCast(data);
      } catch (e) {
        console.log(e);
      }
    };
    const getSimilarMovie = async () => {
      try {
        const response = await axios(
          `https://api.themoviedb.org/3/discover/movie?with_genres=28,16&api_key=${
            import.meta.env.VITE_REACT_API_KEY
          }&page=${page}`
        );
        const data = response.data.results;
        setSimilarMovies(data);
      } catch (e) {
        console.log(e);
      }
    };
    // Fetch the streaming URL
    const getStreamingUrl = async () => {
      try {
        const response = await axios(
          `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${
            import.meta.env.VITE_REACT_API_KEY
          }`
        );
        const providers = response.data.results; // Adjust based on the API response
        if (providers && providers.US) {
          // const { link } = providers.US; // Assuming US is the region and link is the streaming URL
          setStreamingUrl(`https://multiembed.mov/?video_id=${id}&tmdb=1`);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getMovieDetails();
    getMovieCast();
    getSimilarMovie();
    getStreamingUrl();
  }, [id]);

  return (
    <VStack alignItems={"flex-start"} m={"0px 5vw"}>
      <Text
        fontFamily={"Nunito"}
        color={"brand.500"}
        m={"10px 0px"}
        fontWeight={"regular"}
        fontSize={"xs"}
      >
        Watch Now : Movie {movieData?.original_title}
      </Text>
      <HStack gap={"40px"} pb={"40px"} alignItems={"flex-start"}>
        <Image
          src={"https://image.tmdb.org/t/p/original" + movieData?.poster_path}
          w={"25%"}
          height={"400px"}
          borderRadius={"5px"}
          objectFit={"cover"}
        />
        <VStack w={"75%"} alignItems={"flex-start"}>
          <Heading
            fontFamily={"Nunito"}
            color={"text.200"}
            m={"10px 0px"}
            fontWeight={"semibold"}
            fontSize={"md"}
          >
            {movieData?.original_title}
          </Heading>
          <Text
            fontFamily={"Nunito"}
            color={"text.100"}
            m={"10px 0px"}
            fontWeight={"regular"}
            fontSize={"xxs"}
          >
            {movieData?.overview}
          </Text>
          <table>
            <tbody>
              <tr>
                <td style={{ width: "180px" }}>
                  <Text
                    fontFamily={"Nunito"}
                    color={"text.500"}
                    fontWeight={"medium"}
                    fontSize={"xxs"}
                  >
                    Type :
                  </Text>
                </td>
                <td>
                  <Text
                    fontFamily={"Nunito"}
                    color={"text.500"}
                    fontWeight={"regular"}
                    fontSize={"xxs"}
                  >
                    Movie
                  </Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text
                    fontFamily={"Nunito"}
                    color={"text.500"}
                    fontWeight={"medium"}
                    fontSize={"xxs"}
                  >
                    Country :
                  </Text>
                </td>
                <td>
                  <Text
                    fontFamily={"Nunito"}
                    color={"text.500"}
                    fontWeight={"regular"}
                    fontSize={"xxs"}
                  >
                    {movieData?.production_countries.map((curr, indx) => {
                      if (indx != movieData?.production_countries.length - 1) {
                        return curr?.name + ", ";
                      } else {
                        return curr?.name;
                      }
                    })}
                  </Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text
                    fontFamily={"Nunito"}
                    color={"text.500"}
                    fontWeight={"medium"}
                    fontSize={"xxs"}
                  >
                    Genre :
                  </Text>
                </td>
                <td>
                  <Text
                    fontFamily={"Nunito"}
                    color={"text.500"}
                    fontWeight={"regular"}
                    fontSize={"xxs"}
                  >
                    {movieData?.genres?.map((curr, indx) => {
                      if (indx != movieData?.genres.length - 1) {
                        return curr?.name + ", ";
                      } else {
                        return curr?.name;
                      }
                    })}
                  </Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text
                    fontFamily={"Nunito"}
                    color={"text.500"}
                    fontWeight={"medium"}
                    fontSize={"xxs"}
                  >
                    Release :
                  </Text>
                </td>
                <td>
                  <Text
                    fontFamily={"Nunito"}
                    color={"text.500"}
                    fontWeight={"regular"}
                    fontSize={"xxs"}
                  >
                    {movieData?.release_date}
                  </Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text
                    fontFamily={"Nunito"}
                    color={"text.500"}
                    fontWeight={"medium"}
                    fontSize={"xxs"}
                  >
                    Production Company:
                  </Text>
                </td>
                <td>
                  <Text
                    fontFamily={"Nunito"}
                    color={"text.500"}
                    fontWeight={"regular"}
                    fontSize={"xxs"}
                  >
                    {movieData?.production_companies.map((curr, indx) => {
                      if (indx != movieData?.production_companies.length - 1) {
                        return curr?.name + ", ";
                      } else {
                        return curr?.name;
                      }
                    })}
                  </Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text
                    fontFamily={"Nunito"}
                    color={"text.500"}
                    fontWeight={"medium"}
                    fontSize={"xxs"}
                  >
                    Tag :
                  </Text>
                </td>
                <td>
                  <Text
                    fontFamily={"Nunito"}
                    color={"text.500"}
                    fontWeight={"regular"}
                    fontSize={"xxs"}
                  >
                    {movieData?.tagline}
                  </Text>
                </td>
              </tr>
              <tr>
                <td>
                  <Text
                    fontFamily={"Nunito"}
                    color={"text.500"}
                    fontWeight={"medium"}
                    fontSize={"xxs"}
                  >
                    Cast :
                  </Text>
                </td>
                <td>
                  <Text
                    fontFamily={"Nunito"}
                    color={"text.500"}
                    fontWeight={"regular"}
                    fontSize={"xxs"}
                  >
                    {movieCast?.cast?.slice(0, 6).map((curr, indx: number) => {
                      if (indx != 5) {
                        return (
                          <Link
                            to={`https://www.google.com/search?q=${curr?.name}`}
                            target="_blank"
                          >
                            {curr?.name + " - " + curr?.character + ", "}
                          </Link>
                        );
                      } else {
                        return (
                          <Link
                            to={`https://www.google.com/search?q=${curr?.name}`}
                            target="_blank"
                          >
                            {curr?.name + " - " + curr?.character}
                          </Link>
                        );
                      }
                    })}
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </VStack>
      </HStack>
      {/* ReactPlayer  */}
      {videoUrl && (
        <Box w={"70vw"} h={"400px"} mx="auto">
          <Button
            fontFamily={"Nunito"}
            color={"black"}
            m={"10px 0px"}
            fontWeight={"semibold"}
            fontSize={"md"}
          >
            Watch Trailer
          </Button>
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls={true}
            playing={false}
          />
        </Box>
      )}

      <Box w={"70vw"} h={"400px"} mx="auto" mt="64px">
        <Button
          fontFamily={"Nunito"}
          color={"black"}
          m={"10px 0px"}
          fontWeight={"semibold"}
          fontSize={"md"}
        >
          Watch Movie
        </Button>
        <iframe
          style={{
            borderColor: "rgba(0, 0, 0, 0.5)",
            width: "100%",
            height: "100%",
            border: "none",
          }}
          src={`https://multiembed.mov/?video_id=${id}&tmdb=1`}
          allowFullScreen
        />
      </Box>

      <Box marginTop={"56px"}>
        <CardList title="Similar Movies" movieData={similarMovies} />
      </Box>
    </VStack>
  );
};
export default SingleMoviePage;
