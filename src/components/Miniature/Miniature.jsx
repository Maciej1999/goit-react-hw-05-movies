import { PropTypes } from 'prop-types';
import { useTheme } from 'components/ThemeProvider/ThemeProvider';
import css from './Miniature.module.css';

export const Miniature = ({
  url,
  alt = 'Incognito',
  title,
  padding = false,
  bg,
}) => {
  const { theme } = useTheme();
  return (
    <figure className={`${css.miniature} ${theme ? '' : css.themeDark}`}>
      <div
        className={`${css.imgFrame} ${padding ? css.padding : ''} ${
          theme ? '' : css.themeDark
        } ${bg ? css[bg] : ''}`}
      >
        {url && url !== '' ? (
          <img className={css.img} src={url} alt={`\n${alt}`} />
        ) : (
          <div className={css.textBox}>Missing {alt}</div>
        )}
      </div>
      <figcaption className={css.figcaption}>{title || alt}</figcaption>
    </figure>
  );
};
Miniature.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.object,
  padding: PropTypes.bool,
  bg: PropTypes.string,
};
