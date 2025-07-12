import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./styles.module.css";
import MoviePoster from "../../components/MoviePoster/MoviePoster";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import StreamingProviders from "../../components/StreamingProviders/StreamingProviders";
import MovieSynopsis from "../../components/MovieSynopsis/MovieSynopsis";
import MovieCast from "../../components/MovieCast/MovieCast";

const apiKey = import.meta.env.VITE_API_KEY;

async function fetchMovie(id) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`);
  const data = await response.json();
  return data;
}

async function fetchCast(id) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`);
  const data = await response.json();
  return data;
}

async function fetchProviders(id) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${apiKey}`);
  const data = await response.json();
  return data;
}

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [providers, setProviders] = useState([]);


  useEffect(() => {
    fetchMovie(id)
    .then(data => {
      setMovie(data)
    })

    fetchCast(id)
    .then(data => {
      setCast(data.cast)
    })

    fetchProviders(id)
    .then(data => {
      setProviders(data.results?.BR || {})
    })
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
