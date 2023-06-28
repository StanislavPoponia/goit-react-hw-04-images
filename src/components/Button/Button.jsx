import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

const Button = props => {
  const { onClick } = props;

  return (
    <ButtonStyled type="button" onClick={onClick}>
      Load More
    </ButtonStyled>
  );
};
export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};