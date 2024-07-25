import { useEffect, useState, useContext } from "react";
import Navigation from "../components/Navigation/Navigation";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import UserContext from "../contexts/UserContext";

const apiKey = import.meta.env.VITE_API_KEY;

async function fetchMovies(selectedGenre, searchTerm) {
  let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR`;

  if (selectedGenre === "top_rated") {
    url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR`;
  } else if (selectedGenre) {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenre}&language=pt-BR`;
  } else if (searchTerm) {
    url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&language=pt-BR`;
  }

  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genreName, setGenreName] = useState("");
  const { searchTerm, isMenuOpen, setIsMenuOpen } = useContext(UserContext);

  useEffect(() => {
    fetchMovies(selectedGenre, searchTerm)
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.log("Falha na busca: ", error);
      });
  }, [selectedGenre, searchTerm]);

  const handleGenreChange = (genreId, genreName) => {
    setSelectedGenre(genreId);
    setGenreName(genreName);
    setIsMenuOpen(false);
  };

  let title;
  if (selectedGenre === "top_rated") {
    title = "Filmes mais bem avaliados";
  } else if (selectedGenre) {
    title = `Filmes de ${genreName}`;
  } else if (searchTerm.length > 0) {
    title = `Resultados da busca para: "${searchTerm}"`;
  } else {
    title = "Filmes mais bem avaliados";
  }

  return (
    <>
      <Navigation
        onGenreChange={handleGenreChange}
        isMenuOpen={isMenuOpen}
      />
      <main>
        <h2>{title}</h2>
        <CardsContainer movies={movies} />
      </main>
    </>
  );
}
