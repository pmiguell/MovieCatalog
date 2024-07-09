import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./styles.module.css";
import MoviePoster from "../MoviePoster/MoviePoster";
import MovieInfo from "../MovieInfo/MovieInfo";
import StreamingProviders from "../StreamingProviders/StreamingProviders";
import MovieSynopsis from "../MovieSynopsis/MovieSynopsis";
import MovieCast from "../MovieCast/MovieCast";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [providers, setProviders] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
        );
        setMovie(movieResponse.data);

        const castResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
        );
        setCast(castResponse.data.cast);

        const providersResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${apiKey}`
        );
        setProviders(providersResponse.data.results.BR || {});
      } catch (error) {
        console.error("Falha na busca: ", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.details}>
      <MoviePoster posterPath={movie.poster_path} title={movie.title} />
      <div className={style.info}>
        <MovieInfo
          title={movie.title}
          release_date={movie.release_date}
          genres={movie.genres}
          vote_average={movie.vote_average}
        />
        {providers.flatrate && providers.flatrate.length > 0 && (
          <StreamingProviders providers={providers} />
        )}
        <MovieSynopsis overview={movie.overview} />
        <MovieCast cast={cast} />
      </div>
    </div>
  );
}
