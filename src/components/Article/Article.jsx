import css from './Article.module.css';
import { PropTypes } from 'prop-types';
export const Article = ({ title, content, id }) => {
  return title || content ? (
    <article
      className={css.article}
      id={id ? id : `Article:${(title + '').replaceAll(' ', '').toLowerCase}`}
    >
      {title ? <h4>{title}</h4> : ''}
      {content ? content : ''}
    </article>
  ) : (
    ''
  );
};
Article.propTypes = {
  title: PropTypes.object,
  content: PropTypes.object,
  id: PropTypes.string,
};
