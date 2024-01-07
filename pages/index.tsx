import Header from '@/components/Header/Header'
import MovieCarousel from '@/components/MovieCarousel/MovieCarousel';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const topRatedUrlMovies = 'movie/top_rated?language=pt-BR&page=1'
  const topRatedUrlSeries = 'tv/top_rated?language=pt-BR&page=1'

  return (
    <main
      className={`min-h-screen ${inter.className}`}
    >
      <Header />

      <h2>Assistir filmes online</h2>
      <MovieCarousel urlPath={topRatedUrlMovies} />

      <h2>Assistir séries online</h2>
      <MovieCarousel urlPath={topRatedUrlSeries} />

    </main>
  )
}
