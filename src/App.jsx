import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import CardsContainer from "./components/CardsContainer/CardsContainer";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genreName, setGenreName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR`;

    if (selectedGenre === "top_rated") {
      url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR`;
    } else if (selectedGenre) {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenre}&language=pt-BR`
    } else if (searchTerm) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&language=pt-BR`;
    }

    axios
      .get(url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Falha na busca: ", error);
      });
  }, [selectedGenre, searchTerm]);

  const handleGenreChange = (genreId, genreName) => {
    setSelectedGenre(genreId);
    setSearchTerm("");
    setGenreName(genreName);
    setIsMenuOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setSelectedGenre(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <Router>
      <Header searchChange={handleSearchChange} searchTerm={searchTerm} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation onGenreChange={handleGenreChange} isMenuOpen={isMenuOpen} />
              <main>
                <h2>{title}</h2>
                <CardsContainer movies={movies} />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}
