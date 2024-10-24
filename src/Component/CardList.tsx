import { FC,useState } from 'react';
import { Box, HStack, Heading, Icon,Text } from '@chakra-ui/react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Card } from '../Component/CustomComponents';
import { Movie,Series } from '../Interface/index.ts';
//import {useAppDispatch } from '../App/store';
//import { setPopularPage } from '../App/movieListSlice.ts';
//import React from 'react';
//import { usePopularMovies } from '../apis/MovieApi.ts';

interface Props {
    icon?: typeof LocalFireDepartmentIcon,
    title: string,
    page?:number,
    movieData?: Array<Movie>,
    seriesData?: Array<Series>,
    appendData?: (page: number) => void,
    isLoading?: boolean;
}


//let CardList: FC<Props> = ({ icon, title,movieData,page,appendData,seriesData ,isLoading}) => {
    let CardList: FC<Props> = ({ icon, title,movieData,seriesData ,isLoading}) => {


    if (isLoading) return <div>Loading...</div>;

   
    const [limit,setLimit] = useState<number>(7)

    if (movieData != undefined) {

    return (
        <Box w={'100%'} p={"25px 0%"}>
            <HStack>
                <Icon as={icon} color={"brand.500"} fontSize={"xxl"} />
                <Heading color={"text.100"} fontFamily={"Nunito"} fontWeight={"semibold"} fontSize={"md"}>
                    {title}
                </Heading>
            </HStack>
            <HStack p={"30px 0px"} gap={"15px"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"start"}>
                <Card />
                {
                    movieData.slice(0,limit).map((curr: Movie, index: number) => {
                        return (
                            <Card title={curr.title} key={index} image={curr.poster_path}  id={curr?.id}/>
                        )
                    })
                }
            </HStack>
            <Text  
            
            onClick={()=>{
                setLimit(limit+7);
                
            }}
            position={"absolute"} cursor={"pointer"} fontSize={"xs"} right={"7%"} color={"brand.400"} fontFamily={"Nunito"}>See More</Text>
        </Box>
    )
}
else if(seriesData != undefined){
    return (
        <Box w={'100%'} p={"25px 0%"}>
            <HStack>
                <Icon as={icon} color={"brand.500"} fontSize={"xxl"} />
                <Heading color={"text.100"} fontFamily={"Nunito"} fontWeight={"semibold"} fontSize={"md"}>
                    {title}
                </Heading>
            </HStack>
            <HStack p={"30px 0px"} gap={"15px"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"start"}>
                {
                    seriesData?.slice(0, limit).map((curr: Series, index: number) => {
                        return (
                            <Card title={curr.name} key={index} image={curr.poster_path} />
                        )
                    })
                }
            </HStack>
            <Text
                onClick={() => {
                    setLimit(limit + 7);
                    if (limit > seriesData?.length) {
                        
                    }
                }}
                position={"absolute"} cursor={"pointer"} fontSize={"xs"} right={"7%"} color={"brand.400"} fontFamily={"Nunito"}>See More</Text>
        </Box>
    )
}
else{
    return <></>
}
}

export default CardList;