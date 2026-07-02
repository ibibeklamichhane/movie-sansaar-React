import { FC } from "react";
import { Outlet } from "react-router-dom";
import BgImg from "../assets/Image/BackgroundImage.png";
import NavBar from "../Component/Navbar";

interface Props {}

let LayOut: FC<Props> = ({}) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgb(31, 29, 31,0.98),rgb(31, 29, 31,0.98)),url(${BgImg})`,
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <div className="pt-14 lg:pt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default LayOut;
