import { NavLink, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useTheme } from 'components/ThemeProvider/ThemeProvider';
import css from './MovieLink.module.css';
export const MovieLink = ({ to = '', text = '' }) => {
  const location = useLocation();
  const { theme } = useTheme();
  return (
    <li className={css.MovieLi}>
      <div className={css.MovieLink}>
        <NavLink
          className={`${css.NavLink} ${theme ? '' : css.themeDark}`}
          to={to}
          state={{ from: location.pathname }}
        >
          {text}{' '}
        </NavLink>
      </div>
    </li>
  );
};
MovieLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
};
