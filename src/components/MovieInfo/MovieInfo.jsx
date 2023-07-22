import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Title } from 'components/Title/Title';
import { Portrait } from 'components/Portrait/Portrait';
import { Separator } from 'components/Separator/Separator';
import { fetchMovieById } from 'services/api';
import css from './MovieInfo.module.css';
import { NavBtn } from 'components/NavBtn/NavBtn';
import { Loader } from 'components/Loader/Loader';

export const MovieInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async movieId => {
      try {
        const movieData = await fetchMovieById(movieId);
        setMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie(movieId);
  }, [movieId]);
  if (!movie.title) {
    return <Loader />;
  }
  return (
    <>
      <div className={css.dividedSection}>
        <div className={css.frame}>
          <Portrait
            url={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
                : undefined
            }
            alt={movie.title}
          />
        </div>
        <div className={css.frame}>
          <Title txt={movie.title} />
          User score:
          {movie.vote_average
            ? ` ${(movie.vote_average * 10).toFixed(0)}%`
            : ' Not rated yet'}
          <br />
          <h3>Overwiev</h3>
          {movie.overview}
          <br />
          <h4>Genres</h4>
          {movie.genres.map(genre => genre.name).join(', ')}
          <br />
        </div>
      </div>
      <Separator />
      Additional information: <br />
      <br />
      <NavBtn to={`cast`} display="Cast" />
      <NavBtn to={`reviews`} display="Reviews" />
      <Outlet />
    </>
  );
};
export default MovieInfo;
