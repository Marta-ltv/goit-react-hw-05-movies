
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ pictures, toggleModal }) => {
  return (
    <ul className={css.imageGallery}>
      {!!pictures.length &&
        pictures.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              toggleModal={toggleModal}
            />
          );
        })}
    </ul>
  );
};

ImageGallery.prototype = {
  pictures: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};


export default ImageGallery;