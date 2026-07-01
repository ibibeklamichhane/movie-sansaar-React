// import { FC, useState } from "react";
// import { Link } from "react-router-dom";

// interface Props {}

// const NavBar: FC<Props> = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-end p-5 lg:px-[5%] lg:py-5">
//       <div className="w-full flex justify-between items-center">
//         <Link to="/">
//           <h1 className="text-blue-300 text-2xl font-medium">Movie Sansaar</h1>
//         </Link>

//         {/* Hamburger Button */}
//         <button
//           className="lg:hidden z-50"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <div className="space-y-2">
//             <span
//               className={`block w-8 h-0.5 bg-blue-500 transition-transform duration-300 ${
//                 isMenuOpen ? "rotate-45 translate-y-2.5" : ""
//               }`}
//             ></span>
//             <span
//               className={`block w-8 h-0.5 bg-blue-500 transition-opacity duration-300 ${
//                 isMenuOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`block w-8 h-0.5 bg-blue-500 transition-transform duration-300 ${
//                 isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
//               }`}
//             ></span>
//           </div>
//         </button>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center gap-8 text-lg">
//           <Link to="/">
//             <span className="font-nunito  text-blue-300">Home</span>
//           </Link>
//           <Link to="/movie">
//             <span className="font-nunito  text-blue-300">Movies</span>
//           </Link>
//           <Link to="/series">
//             <span className="font-nunito  text-blue-300">TV Series</span>
//           </Link>
//           <Link to="/watchlist">
//             <span className="font-nunito  text-blue-300">Watch List</span>
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-dark-800 shadow-lg transform transition-transform duration-300 ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col gap-6 mt-24 ml-6">
//           <Link to="/" onClick={() => setIsMenuOpen(false)}>
//             <span className="text-blue-300 text-lg">Home</span>
//           </Link>
//           <Link to="/movie" onClick={() => setIsMenuOpen(false)}>
//             <span className="text-blue-300 text-lg">Movies</span>
//           </Link>
//           <Link to="/series" onClick={() => setIsMenuOpen(false)}>
//             <span className="text-blue-300 text-lg">TV Series</span>
//           </Link>
//           <Link to="/watchlist" onClick={() => setIsMenuOpen(false)}>
//             <span className="text-blue-300 text-lg">Watch List</span>
//           </Link>
//           <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
//             <span className="text-blue-300 text-lg">Contact Us</span>
//           </Link>
//           <Link to="/log-in" onClick={() => setIsMenuOpen(false)}>
//             <button className="text-blue-300 border border-brand-500 w-32 px-4 py-2">
//               Sign In
//             </button>
//           </Link>
//           <Link to="/sign-up" onClick={() => setIsMenuOpen(false)}>
//             <button className="text-dark-700 bg-brand-400 w-32 px-4 py-2">
//               Sign Up
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface Props {}

const NavBar: FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="flex flex-col items-end p-5 lg:px-[5%] lg:py-4">
        <div className="w-full flex justify-between items-center">
          <Link to="/">
            <h1 className="text-blue-300 text-2xl font-medium">
              Movie Sansaar
            </h1>
          </Link>

          {/* Hamburger Button */}
          <button
            className="lg:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-2">
              <span
                className={`block w-8 h-0.5 bg-blue-500 transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-blue-500 transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-blue-500 transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-lg">
            <Link to="/">
              <span className="font-nunito text-blue-300 hover:text-blue-400 transition-colors">
                Home
              </span>
            </Link>
            <Link to="/movie">
              <span className="font-nunito text-blue-300 hover:text-blue-400 transition-colors">
                Movies
              </span>
            </Link>
            <Link to="/series">
              <span className="font-nunito text-blue-300 hover:text-blue-400 transition-colors">
                TV Series
              </span>
            </Link>
            <Link to="/watchlist">
              <span className="font-nunito text-blue-300 hover:text-blue-400 transition-colors">
                Watch List
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-dark-800/95 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 mt-24 ml-6">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <span className="text-blue-300 text-lg hover:text-blue-400 transition-colors">
                Home
              </span>
            </Link>
            <Link to="/movie" onClick={() => setIsMenuOpen(false)}>
              <span className="text-blue-300 text-lg hover:text-blue-400 transition-colors">
                Movies
              </span>
            </Link>
            <Link to="/series" onClick={() => setIsMenuOpen(false)}>
              <span className="text-blue-300 text-lg hover:text-blue-400 transition-colors">
                TV Series
              </span>
            </Link>
            <Link to="/watchlist" onClick={() => setIsMenuOpen(false)}>
              <span className="text-blue-300 text-lg hover:text-blue-400 transition-colors">
                Watch List
              </span>
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <span className="text-blue-300 text-lg hover:text-blue-400 transition-colors">
                Contact Us
              </span>
            </Link>
            <Link to="/log-in" onClick={() => setIsMenuOpen(false)}>
              <button className="text-blue-300 border border-brand-500 w-32 px-4 py-2 hover:bg-blue-500/10 transition-colors">
                Sign In
              </button>
            </Link>
            <Link to="/sign-up" onClick={() => setIsMenuOpen(false)}>
              <button className="text-dark-700 bg-brand-400 w-32 px-4 py-2 hover:bg-brand-500 transition-colors">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
