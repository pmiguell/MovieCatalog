import style from "./styles.module.css"

export default function MovieSynopsis({ overview }) {
  return (
    <div className={style.synopsis}>
    <h3>Sinopse:</h3>
    <p>{overview}</p>
  </div>
  );
}
