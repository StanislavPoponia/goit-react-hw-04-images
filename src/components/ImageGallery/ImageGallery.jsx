import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { ImageGalleryStyled } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = props => {
  const { imgArray, onClick } = props;

  return (
    <ImageGalleryStyled>
      {imgArray.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            smallFormat={webformatURL}
            largeFormat={largeImageURL}
            onClick={onClick}
          />
        );
      })}
    </ImageGalleryStyled>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  imgArray: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};