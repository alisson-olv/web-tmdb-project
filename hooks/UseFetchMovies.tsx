import { MoviesListType } from '@/types/MoviesListType';
import React, { useEffect, useState } from 'react'

interface FetchMoviesProps {
  data: MoviesListType[];
  loading: boolean;
  error: string | null;
}

function UseFetchMovies(urlPath: string): FetchMoviesProps {
  const [data, setData] = useState<MoviesListType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDYyNGUyOTI3N2I1NzRhYTkxYTIzMDUxNmVlZjVhYiIsInN1YiI6IjYzODU0OTU0YmYwOWQxMDBkNzBjY2Y2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MD2-soD1_AJJqvgZbL-uXRSh9_LWzDbq81qw2aSKQfY'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${urlPath}`, options)
      .then(response => response.json())
      .then(response => setData(response.results))
      .catch(error => setError(`${error} - Não foi possível carregar os dados`));

    setLoading(false)

    // Desabilita o erro de adicionar dependencia no UseEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, loading, error }
}

export default UseFetchMovies