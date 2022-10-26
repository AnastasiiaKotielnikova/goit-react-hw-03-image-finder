import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li>
      <img src={src} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
