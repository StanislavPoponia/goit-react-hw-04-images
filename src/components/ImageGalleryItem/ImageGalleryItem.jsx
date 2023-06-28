import { Component } from 'react';
import { ImageGalleryItemStyled, Image } from './ImageGalleryItem.styled';

import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    const { smallFormat, onClick, largeFormat } = this.props;

    return (
      <ImageGalleryItemStyled>
        <Image
          src={smallFormat}
          alt=""
          onClick={() => {
            onClick(largeFormat);
          }}
        />
      </ImageGalleryItemStyled>
    );
  }
}
export default ImageGalleryItem;

ImageGalleryItem.propsTypes = {
  smallFormat: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  largeFormat: PropTypes.string.isRequired,
};