import { lazy, Suspense } from "react";
import LoginPage from "./Page/LoginPage";
import { Routes, Route } from "react-router-dom";
const SignupPage = lazy(() => import("./Page/SignupPage"));
//import HomePage from './Page/HomePage';
import LayOut from "./Layout/Layout";
import ContactPage from "./Page/ContactPage";
import MoviePage from "./Page/MoviePage";
import TVSeriesPage from "./Page/TVSeriesPage";
import SingleMoviePage from "./Page/SingleMoviePage.tsx";
import SingleTVPage from "./Page/SingleTVPage.tsx";

function App() {
  return (
    <>
      <div className="bg-dark">
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<MoviePage />} />
            <Route path="/movie" element={<MoviePage />} />{" "}
            <Route path="/series" element={<TVSeriesPage />} />{" "}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/movie/:id" element={<SingleMoviePage />} />
            <Route path="/series/:id" element={<SingleTVPage />} />
            <Route path="/log-in" element={<LoginPage />} />
            <Route
              path="/sign-up"
              element={
                <Suspense fallback="Loading...">
                  <SignupPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
