import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images }) => {
    return (
        <ul>
            {images.map(({ id, webformatURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    src={webformatURL}
                    alt={tags}
                />
            ))}
        </ul>);
};

export default ImageGallery;

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        })
    )
};