
import { useEffect } from 'react';
import { ModalStyled, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';

const Modal = ({ largeFormat, onClose}) => {
  useEffect(()=> {
    const eventModal = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
      window.addEventListener('keydown', eventModal);
   return ()=>{
    window.removeEventListener('keydown', eventModal);
   };
  });
  

  
  const onClickBackdrop = e => {
    if (e.target === e.currentTarget) {
     onClose();
    }
  };

   return (
      <Overlay onClick={onClickBackdrop}>
        <ModalStyled>
          <img src={largeFormat} alt="" />
        </ModalStyled>
      </Overlay>
    );
 };

export default Modal;
Modal.propTypes = {
  largeFormat: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};