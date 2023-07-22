import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import css from './ArticleList.module.css';
import { Article } from 'components/Article/Article';
import { fetchMovieReviews } from 'services/api';
import { Separator } from 'components/Separator/Separator';
export const ArticleList = () => {
  const { movieId } = useParams();
  const [list, setList] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setList(results);
      } catch (error) {
        console.log(error);
      }
    };
    getArticles();
  }, [movieId]);

  return (
    <div id="reviews">
      <br />
      <Separator />
      {list.length > 0 ? (
        <ul className={css.ArticleList}>
          {list.map(art => (
            <li key={nanoid()}>
              <Article
                title={<>Author: {art.author}</>}
                content={<>{art.content}</>}
              />
              <Separator />
            </li>
          ))}
        </ul>
      ) : (
        <>
          No reviews yet.
          <Separator />
        </>
      )}
    </div>
  );
};
export default ArticleList;
