import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, alt, openModal }) => {
  return (
    <GalleryItem onClick={openModal}>
      <Image src={src} alt={alt} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
