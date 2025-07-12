import style from "./styles.module.css";

export default function MoviePoster({ posterPath, title }) {
    return (
        <div className={style.posterContainer}>
        <img
          className={style.poster}
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={`Capa do ${title}`}
        />
      </div>
    )
}