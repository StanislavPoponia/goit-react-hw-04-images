import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

const Button =  ({ onClick }) =>{
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