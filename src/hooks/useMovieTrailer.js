import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch} from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter(
      (video) => video.name === "Final Trailer"
    );
    dispatch(addTrailerVideo(filterData[0]));
    // console.log(json);
    // console.log(trailer);
  };
  // console.log(`https://www.youtube.com/embed/${trailerVideo?.key}?si=j57FgPWesOzV064i`);

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
