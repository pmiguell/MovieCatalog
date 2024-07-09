import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import style from "./styles.module.css";
import MovieCard from "../MovieCard/MovieCard";


export default function CardsContainer({ movies }) {
  const settings = {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      2560: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      1920: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    }
  };

  return (
    <div className={style.cards}>
      {movies.length === 0 ? (
        <p className={style.no_results}>Nenhum filme encontrado.</p>
      ) : (
        movies.length === 1 ? (
          <MovieCard
            key={movies[0].id}
            id={movies[0].id}
            src={`https://image.tmdb.org/t/p/w500${movies[0].poster_path}`}
            title={movies[0].title}
            rating={movies[0].vote_average}
          />
        ) : (
          <Swiper {...settings}>
            {movies.map(movie => (
              <SwiperSlide key={movie.id}>
                <MovieCard 
                  id={movie.id}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  title={movie.title}
                  rating={movie.vote_average}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )
      )}
    </div>
  );
}
