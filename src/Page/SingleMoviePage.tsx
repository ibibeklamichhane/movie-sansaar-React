import {
  Box,
  Text,
  Icon,
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
      {/* ReactPlayer 
            {videoUrl && (
        <Box w={"90vw"} h={"550px"}>
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls={true}
            playing={false}
          />
        </Box>
      )}*/}
      {/* Movie Player  
            {streamingUrl ? (
        <ReactPlayer
          url={streamingUrl} // Link to the streaming source
          width="100%"
          height="500px"
       
          controls={true} // Show player controls
          playing={true} // If you want autoplay, set this to true
        />
      ) : (
        <Text color="red.500">Movie streaming not available</Text>
      )}  */}
      {/*
                  <div className='movie-player m-2 sm:m-5 mb-10 w-full h-full z-[50]'>
                <iframe
                    className="sm:w-[90%] md:w-[80%] w-full min-h-[50vh] sm:min-h-[80vh] z-[50] m-auto rounded-xl border-1 shadow-2xl"
                    style={{
                        borderColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                    src={`https://multiembed.mov/?video_id=${id}&tmdb=1`}
                    allowFullScreen
                />
            </div>
{/* 
      <Box
        w={"90vw"}
        h={"550px"}
        bg={`linear-gradient(rgb(31, 29, 31,0.6),rgb(31, 29, 31,0.6)),url(${
          "https://image.tmdb.org/t/p/original" + movieData?.backdrop_path
        })`}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        display={"flex"}
      ></Box> */}
      {/*

      <Box style={{ margin: "20px auto" }}>
        <Text
          fontFamily={"Nunito"}
          color={"text.500"}
          textAlign={"center"}
          m={"10px 0px"}
          fontWeight={"regular"}
          fontSize={"xs"}
        >
          If the current server doesn’t work please try other server below
        </Text>
        <HStack
          w={"40vw"}
          bgColor={"dark.800"}
          justifyContent={"space-between"}
          p={"0px 20px"}
          borderRadius={"10px"}
        >
          <Text
            color={"brand.500"}
            m={"10px 0px"}
            fontWeight={"medium"}
            fontSize={"xs"}
          >
            Vidstream
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{ color: "brand.500" }}
            color={"text.500"}
            m={"10px 0px"}
            fontWeight={"medium"}
            fontSize={"xs"}
          >
            My Cloud
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{ color: "brand.500" }}
            color={"text.500"}
            m={"10px 0px"}
            fontWeight={"medium"}
            fontSize={"xs"}
          >
            Up Cloud
          </Text>
          <Text
            cursor={"pointer"}
            _hover={{ color: "brand.500" }}
            color={"text.500"}
            m={"10px 0px"}
            fontWeight={"medium"}
            fontSize={"xs"}
          >
            DoodStream
          </Text>
          <Button
            fontFamily={"Nunito"}
            color={"brand.500"}
            fontWeight={"medium"}
            fontSize={"xxs"}
            bgColor={"dark.900"}
            _hover={{ bgColor: "dark.800" }}
          >
            Watch Later
          </Button>
          <Button
            fontFamily={"Nunito"}
            color={"brand.500"}
            fontWeight={"medium"}
            fontSize={"xxs"}
            leftIcon={<Icon color={"brand.400"} />}
            bgColor={"dark.900"}
            _hover={{ bgColor: "dark.800" }}
          >
            Like
          </Button>
        </HStack>
      </Box> */}
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

      <Box w={"70vw"} h={"400px"} mx="auto">
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
            border: 'none'
          }}
          src={`https://multiembed.mov/?video_id=${id}&tmdb=1`}
          allowFullScreen
        />
      
      </Box>

      <CardList
        title="Similar Movies"
        movieData={similarMovies}
      />
    </VStack>
  );
};
export default SingleMoviePage;
