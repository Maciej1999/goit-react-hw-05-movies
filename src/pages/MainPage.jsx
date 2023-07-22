import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchTrending } from 'services/api';
import { Loader } from 'components/Loader/Loader';
export const MainPage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchTrending();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, [setError, setIsLoading, setTrendingMovies]);
  return (
    <article>
      {isLoading ? (
        <Loader />
      ) : error ? (
        error
      ) : (
        <MovieList list={trendingMovies} />
      )}
    </article>
  );
};
export default MainPage;
