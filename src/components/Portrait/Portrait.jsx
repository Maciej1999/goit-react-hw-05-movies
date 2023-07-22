import { PropTypes } from 'prop-types';
import { useTheme } from 'components/ThemeProvider/ThemeProvider';
import css from './Portrait.module.css';

export const Portrait = ({ url, alt = 'Title Big Movie', padding, bg }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`${css.imgFrame} ${padding ? css.padding : ''} ${
        theme ? '' : css.themeDark
      } ${bg ? css[bg] : ''}`}
    >
      {url && url !== '' ? (
        <img
          className={css.img}
          src={url}
          alt={`\n\n🎬\n${alt}\n Coming soon`}
        />
      ) : (
        <div className={css.textBox}>Missing {alt} poster</div>
      )}
    </div>
  );
};
Portrait.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  padding: PropTypes.bool,
  bg: PropTypes.string,
};
