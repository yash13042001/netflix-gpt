import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // Fetch data from TMDB API and update store
  useNowPlayingMovies();

  return (
    <div>
      {/* 
        Main Container
           - Video Background
           - Video Title
        Secondary Container
           - Movielists * n
              - Cards * n   
      */}
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
