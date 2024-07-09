import style from "./styles.module.css";

const genres = [
  { name: "Top Rated", id: "top_rated" },
  { name: "Ação", id: 28 },
  { name: "Aventura", id: 12 },
  { name: "Comédia", id: 35 },
  { name: "Documentário", id: 99 },
  { name: "Drama", id: 18 },
  { name: "Fantasia", id: 14 },
  { name: "Terror", id: 27 },
  { name: "Música", id: 10402 },
  { name: "Romance", id: 10749 },
  { name: "Suspense", id: 53 }
];

export default function Navigation({ onGenreChange, isMenuOpen }) {
  return (
    <nav className={isMenuOpen ? style.nav_visible : style.nav_hidden}>
      <ul>
        {genres.map((genre) => (
          <li
            key={genre.id}
            onClick={() => onGenreChange(genre.id, genre.name)}
            data-genre={genre.name.toLowerCase()}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
