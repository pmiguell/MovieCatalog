import { Link } from "react-router-dom";
import style from "./styles.module.css";

export default function MovieCard({ id, src, title, rating }) {
  return (
    <div className={style.card}>
      <Link to={`/movie/${id}`}>
        <img src={src} alt={`Capa do ${title}`} />
        <h3>{title}</h3>
        <p>Nota: {rating}</p>
      </Link>
    </div>
  );
}
