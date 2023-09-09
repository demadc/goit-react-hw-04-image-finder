import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getGallery } from '../services/api';

// import { nanoid } from 'nanoid';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [requestId, setRequestId] = useState('');
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (value === '') return;

      setLoading(true);

      try {
        const { hits, totalHits } = await getGallery(value, page);

        setImages(prevImages => [...prevImages, ...hits]);
        setIsLoadMore(page < Math.ceil(totalHits / 12));
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    if (requestId !== '') {
      fetchData();
    }
  }, [value, page, requestId]);

  const handleSearch = value => {
    const newRequestId = Date.now().toString();
    setValue(value);
    setRequestId(newRequestId);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleOpenModal = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} openModal={handleOpenModal} />

      {isLoadMore && <Button handleLoadMore={handleLoadMore} />}
      {largeImageURL && (
        <Modal
          closeModal={() => handleOpenModal('')}
          largeImageURL={largeImageURL}
        />
      )}
      {loading && <Loader />}
    </>
  );
};
