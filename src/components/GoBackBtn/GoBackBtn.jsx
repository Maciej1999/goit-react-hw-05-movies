import { PropTypes } from 'prop-types';
import { useTheme } from 'components/ThemeProvider/ThemeProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import css from './GoBackBtn.module.css';

export const GoBackBtn = ({ txt, hide = '/' }) => {
  const home = '/goit-react-hw-05-movies';
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const hasFrom = location.state && location.state.from;
  const pathIsRedundant =
    (!hasFrom && (location.pathname === hide || location.pathname === home)) ||
    (hasFrom &&
      (location.state.from === location.pathname ||
        location.state.from === hide ||
        location.state.from === home));
  if (pathIsRedundant) return <></>;

  const from = hasFrom
    ? `${location.state.from.substring(
        location.state.from.lastIndexOf('/') + 1
      )}`
    : 'Home';
  const shortFrom = `${(from === ''
    ? 'Home'
    : from)[0].toUpperCase()}${(from === '' ? 'Home' : from).slice(1)}`;
  const display =
    shortFrom === `${Number(shortFrom)}` ? 'Movie Details' : `${shortFrom}`;
  const goBack = () => {
    navigate(hasFrom ? location.state.from : '/', {
      replace: false,
      state: { from: location.pathname },
    });
  };
  return (
    <button
      className={`${css.button} ${theme ? '' : css.themeDark}`}
      type="button"
      onClick={goBack}
    >
      {txt || 'Back to \u2192 ' + display}
      {/* \u2190 */}
    </button>
  );
};

GoBackBtn.propTypes = {
  txt: PropTypes.string,
  hide: PropTypes.string,
};
