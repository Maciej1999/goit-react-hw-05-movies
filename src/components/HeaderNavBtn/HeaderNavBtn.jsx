import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from 'components/ThemeProvider/ThemeProvider';
import { PropTypes } from 'prop-types';
import css from './HeaderNavBtn.module.css';

export const HeaderNavBtn = ({ to = '/', display }) => {
  const { theme } = useTheme();
  const location = useLocation();
  const isHereAlready = location.state && location.pathname === to;
  return isHereAlready ? (
    <NavLink
      className={nav =>
        `${css.navLink} ${theme ? '' : css.themeDark} ${
          nav.isActive ? css.active : ''
        }`
      }
      to={to}
      state={prev => prev}
    >
      {display || to[0].toUpperCase() + '' + `${to}`.slice(1)}
    </NavLink>
  ) : (
    <NavLink
      className={nav =>
        `${css.navLink} ${theme ? '' : css.themeDark} ${
          nav.isActive ? css.active : ''
        }`
      }
      to={to}
      state={{ from: location.pathname }}
    >
      {display || to[0].toUpperCase() + '' + `${to}`.slice(1)}
    </NavLink>
  );
};
HeaderNavBtn.propTypes = {
  to: PropTypes.string,
  display: PropTypes.string,
};
