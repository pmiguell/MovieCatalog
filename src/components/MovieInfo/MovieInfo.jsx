import style from "./styles.module.css"

export default function MovieInfo({ title, release_date, genres, vote_average }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className={style.movie_info}>
        <p>
          {release_date} |{" "}
          {genres.map((genre) => genre.name).join(", ")}
        </p>
        <p id={style.rating}>{vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
}
