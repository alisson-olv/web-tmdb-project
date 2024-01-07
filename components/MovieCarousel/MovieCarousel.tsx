import UseFetchMovies from '@/hooks/UseFetchMovies'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface MovieCarouselProps {
  urlPath: string;
}

function MovieCarousel({ urlPath }: MovieCarouselProps) {
  const { data, error, loading } = UseFetchMovies(urlPath);

  return (
    <div className='flex'>
      {loading && <p>Carregando</p>}

      {error && <p>Erro ao carregar os dados</p>}

      <Swiper
        spaceBetween={50}
        slidesPerView={4}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className='max-w-[185px]'>
            <p>{item.title}</p>
            <p>{item.overview}</p>
            <Image
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={`Logo ${item.title}`}
              title={item.title}
              priority
              width="0"
              height="0"
              sizes='100vw'
              style={{ width: '150px', height: 'auto' }}
            />
            <p>{item.release_date}</p>
            <p>{item.vote_average}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieCarousel