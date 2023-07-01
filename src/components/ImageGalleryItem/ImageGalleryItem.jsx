import { ImageGalleryItemStyled, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ smallFormat, onClick, largeFormat }) => {
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
};

export default ImageGalleryItem;

ImageGalleryItem.propsTypes = {
  smallFormat: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  largeFormat: PropTypes.string.isRequired,
};