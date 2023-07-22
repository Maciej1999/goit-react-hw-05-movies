import { PropTypes } from 'prop-types';
export const Title = ({ txt }) => {
  return <h2>{txt}</h2>;
};
Title.propTypes = {
  txt: PropTypes.string.isRequired,
};
