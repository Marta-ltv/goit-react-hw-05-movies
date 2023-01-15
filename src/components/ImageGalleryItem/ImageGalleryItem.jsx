
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ largeImageURL, webformatURL, toggleModal }) => {
  return (
    <>
      <li className={css.imageGalleryItem}>
        <img
          className={css.imageGalleryItem__image}
          src={webformatURL}
          alt=""
          onClick={() => toggleModal(largeImageURL)}
        />
      </li>
    </>
  );
};
ImageGalleryItem.prototype = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,

  toggleModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;