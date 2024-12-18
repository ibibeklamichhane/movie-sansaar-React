
//import { Box, Text, Icon, VStack, HStack, Image, Heading, Button } from '@chakra-ui/react';
import {  Text, VStack, HStack, Image, Heading,Box } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TVCast,Series, Season, TVShow } from '../Interface';
import CardList from '../Component/CardList';
import axios from 'axios';
import SeasonsAndEpisodes from './SeasonsAndEpisodes';


interface Props {

}

let SingleTVPage: FC<Props> = ({ }) => {

    const { id } = useParams();
    const [seriesData, setSeriesData] = useState<TVShow>();
    const [movieCast, setMovieCast] = useState<TVCast>();
    const [page, setPage] = useState<number>(1);
    const [similarSeries, setSimilarSeries] = useState<Array<Series>>([]);
 //   const [videoUrl, setVideoUrl] = useState<string>("");
    const [seasons, setSeasons] = useState<Season[]>([]);



    useEffect(() => {
        const getSeriesDetails = async () => {
            try {
                const response = await axios(`https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_REACT_API_KEY}`);
                const data = response.data;
                setSeriesData(data);
                setSeasons(data.seasons || []); // Set seasons data here for streaming

            } catch (e) {

            }
        }
        const getMovieCast = async () => {
            try {
                const response = await axios(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${import.meta.env.VITE_REACT_API_KEY}`);
                const data = response.data;
                setMovieCast(data);
            } catch (e) {
                console.log(e);
            }
        }
        getSeriesDetails();
        getMovieCast();

    }, [id]);

    useEffect(() => {
        const getSimilarSeries = async () => {
            try {
                const response = await axios(`https://api.themoviedb.org/3/discover/tv?with_genres=${seriesData?.genres[0]?.id + "," + seriesData?.genres[1]?.id}&api_key=${import.meta.env.VITE_REACT_API_KEY}&page=${page}`);
                const data = response.data.results
                setSimilarSeries(data);
            } catch (e) {
                console.log(e);
            }
        }
        if (seriesData) {
            getSimilarSeries();
        }
    }, [seriesData]);


    return (
        <>
        <VStack alignItems={"flex-start"} m={"0px 5vw"}>
            
            <HStack gap={"40px"} pb={"40px"} alignItems={"flex-start"}>
                <Image src={"https://image.tmdb.org/t/p/original" + seriesData?.poster_path} w={"25%"} height={"400px"} borderRadius={"5px"} objectFit={'cover'} />
                <VStack w={"75%"} alignItems={"flex-start"}>
                    <Heading fontFamily={"Nunito"} color={"text.200"} m={"10px 0px"} fontWeight={"semibold"} fontSize={"md"}>{seriesData?.name}</Heading>
                    <Text fontFamily={"Nunito"} color={"text.100"} m={"10px 0px"} fontWeight={"regular"} fontSize={"xxs"}>{seriesData?.overview}</Text>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ width: "180px" }}>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"}>Type :</Text>
                                </td>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>Series</Text>
                                </td>
                            </tr>
                            <tr>
                                <td><Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"}>Country :</Text></td>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>{seriesData?.production_countries.map((curr, indx) => {
                                        if (indx != seriesData?.production_countries.length - 1) {
                                            return (curr?.name + ", ")
                                        } else {
                                            return (curr?.name)
                                        }
                                    })}</Text>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"}>Genre :</Text>
                                </td>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>{
                                        seriesData?.genres?.map((curr, indx) => {
                                            if (indx != seriesData?.genres.length - 1) {
                                                return (curr?.name + ", ")
                                            } else {
                                                return (curr?.name)
                                            }
                                        })
                                    }</Text>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"}>Release :</Text></td>
                                <td>

                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>
                                        {seriesData?.first_air_date}
                                    </Text>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"} >Production Company:</Text>
                                </td>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>
                                        {seriesData?.production_companies.map((curr, indx) => {
                                            if (indx != seriesData?.production_companies.length - 1) {
                                                return (curr?.name + ", ");
                                            } else {
                                                return (curr?.name);
                                            }
                                        })}
                                    </Text>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"} >Season :</Text>
                                </td>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>
                                        {
                                            seriesData?.seasons.map((curr: Season,indx:number) => {
                                                if (indx != seriesData?.seasons.length -1 ) {
                                                    return (seriesData.name + " " + curr?.name + ",");
                                                }else{
                                                    return (seriesData.name +" "+curr?.name);
                                                }
                                            })
                                        }
                                    </Text>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"medium"} fontSize={"xxs"} >Cast :</Text>
                                </td>
                                <td>
                                    <Text fontFamily={"Nunito"} color={"text.500"} fontWeight={"regular"} fontSize={"xxs"}>
                                        {movieCast?.cast?.slice(0, 6).map((curr, indx: number) => {
                                            if (indx != 5) {
                                                return (<Link to={`https://www.google.com/search?q=${curr?.name}`} target='_blank'>{curr?.name }</Link>)
                                            } else {
                                                return (<Link to={`https://www.google.com/search?q=${curr?.name}`} target='_blank'>{curr?.name }</Link>)
                                            }
                                        })}
                                    </Text>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </VStack>
            </HStack>
           {seasons.length > 0 && 
            
            <SeasonsAndEpisodes seasons={seasons} tvId={id || ''} />}
            

        <Box mb="24px" mt="52px">
        <CardList 
                title='Similar Series' seriesData={similarSeries} page={page} appendData={(page) => setPage(page + 1)} />
        </Box>
           
               
               </VStack>

        </>
    )
}
export default SingleTVPage
