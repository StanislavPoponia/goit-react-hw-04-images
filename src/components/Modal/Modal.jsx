import { Component } from 'react';
import { ModalStyled, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.eventModal);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.eventModal);
  };

  eventModal = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeFormat } = this.props;

    return (
      <Overlay onClick={this.onClickBackdrop}>
        <ModalStyled>
          <img src={largeFormat} alt="" />
        </ModalStyled>
      </Overlay>
    );
  }
}
export default Modal;
Modal.propTypes = {
  largeFormat: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};