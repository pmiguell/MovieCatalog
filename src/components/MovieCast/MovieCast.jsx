import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import style from './styles.module.css';

export default function MovieCast({ cast }) {
  const castSettings = {
    slidesPerView: 5,
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
      950: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      470: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  return (
    <div className={style.cast}>
      <h3>Elenco:</h3>
      <Swiper {...castSettings}>
        {cast.map((member) => (
          <SwiperSlide key={member.cast_id} className={style.cast_member}>
            <img
              src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
              alt={member.name}
            />
            <p>{member.name}</p>
            <p>{member.character}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
