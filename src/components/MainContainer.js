import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //   IF movies is null we will not render the main container
  if (!movies) return;

  const mainMovie = movies[6];
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="w-screen">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
