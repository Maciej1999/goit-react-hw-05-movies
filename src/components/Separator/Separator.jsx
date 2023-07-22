import { PropTypes } from 'prop-types';
import css from './Separator.module.css';
export const Separator = ({ vertical = false, relative = false }) => {
  return (
    <>
      {vertical || relative ? '' : <div className={css.margin} />}
      <div
        className={`${vertical ? css.vertical : css.horizontal} ${
          relative ? '' : css.absolute
        }`}
      />
    </>
  );
};
Separator.propTypes = {
  vertical: PropTypes.bool,
  relative: PropTypes.bool,
};
