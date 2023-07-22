import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Miniature } from 'components/Miniature/Miniature';
import { fetchMovieCast } from 'services/api';
import { Separator } from 'components/Separator/Separator';
import css from './CastList.module.css';

export const CastList = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);

  if (!cast || cast.length < 1) {
    return (
      <>
        <br />
        <br />
        <Separator />
        No information about casting so far.
        <Separator />
      </>
    );
  }

  return (
    <div id="cast">
      <br />
      <Separator />
      <br />
      <ul className={css.CastList}>
        {cast.map(a => (
          <Miniature
            key={nanoid()}
            title={
              <>
                <h4>{a.name || 'Unknown actor'}</h4>
                Character:
                <br /> {a.character || 'unknown'}
              </>
            }
            url={
              a.profile_path
                ? `https://image.tmdb.org/t/p/w200${a.profile_path}`
                : undefined
            }
            alt={`photo of\n${a.name}`}
          />
        ))}
      </ul>
    </div>
  );
};
export default CastList;
