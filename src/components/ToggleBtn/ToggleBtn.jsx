import { PropTypes } from 'prop-types';
import { useTheme } from 'components/ThemeProvider/ThemeProvider';
import css from './ToggleBtn.module.css';
export const ToggleBtn = ({
  display = ['', ''],
  toggle = console.log,
  selectedIndex = 0,
}) => {
  const { theme } = useTheme();
  return (
    <button
      className={`${css.toggleBtn} ${theme ? '' : css.themeDark}`}
      type="button"
      onClick={toggle}
    >
      {display[selectedIndex]}
    </button>
  );
};
ToggleBtn.propTypes = {
  display: PropTypes.arrayOf(PropTypes.string),
  toggle: PropTypes.func,
};
