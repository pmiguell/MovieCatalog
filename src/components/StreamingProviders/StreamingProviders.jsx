import style from "./styles.module.css"

export default function StreamingProviders({ providers }) {
  return (
    <div className={style.streaming}>
      <h3>Disponível em:</h3>
      <ul className={style.streaming_list}>
        {providers.flatrate.map((provider) => (
          <li key={provider.provider_id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${provider.logo_path}`}
              alt={provider.provider_name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
