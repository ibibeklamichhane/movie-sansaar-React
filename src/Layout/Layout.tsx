import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import BgImg from '../assets/Image/BackgroundImage.png';
import NavBar from '../Component/Navbar';
interface Props {
}
let LayOut: FC<Props> = ({ }) => {
    return (
        <Box bg={`linear-gradient(rgb(31, 29, 31,0.98),rgb(31, 29, 31,0.98)),url(${BgImg})`} bgAttachment={"fixed"}>
            <NavBar />
            <Outlet />
        </Box>
    )
}
export default LayOut