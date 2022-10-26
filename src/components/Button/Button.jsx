import PropTypes from 'prop-types';
import { BtnLoadMore } from './Button.styled';

const Button = ({ onClick }) => {
  return <BtnLoadMore onClick={onClick}>Load more</BtnLoadMore>;
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
