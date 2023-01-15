import  { useState, useEffect } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import imgAPI from 'services/api';

export default function App() {
  const [request, setRequest] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const length = pictures.length !== 0;
  const maxLength = pictures.length !== totalHits;

  const hendleFormSubmit = keyword => {
    if (keyword === request) {
      return;
    }
    setPictures([]);
    setRequest(keyword);
    setPage(1);
  };

  useEffect(() => {
    if (request === '') {
      return;
    }
    setIsLoading(isLoading => isLoading);
    imgAPI
      .fetchData(request, page)
      .then(picture => {
        setPictures(pictures => [...pictures, ...picture.hits]);
        setTotalHits(picture.totalHits);
      })
      .finally(setIsLoading(isLoading => isLoading));
  }, [request, page]);

  const onLoadMore = () => {
    setPage(page => page + 1);
  };

  const toggleModal = largeImageURL => {
    setShowModal(showModal => !showModal);
    setLargeImageURL(largeImageURL);
  };

  return (
    <>
      <Searchbar onSubmit={hendleFormSubmit} />
      <ImageGallery pictures={pictures} toggleModal={toggleModal} />
      {isLoading && <Loader />}
      {!isLoading && length && maxLength && <Button onLoadMore={onLoadMore} />}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={toggleModal} />
      )}
    </>
  );
}