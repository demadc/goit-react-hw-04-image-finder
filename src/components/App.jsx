import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { getGallery } from 'services/api';

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

  const API_KEY = '38277598-05a082c915074d2caf7c5aa6f';
  const BASE_URL = 'https://pixabay.com/api/';

  useEffect(() => {
    const fetchData = async () => {
      if (value === '') return;

      setLoading(true);

      try {
        const response = await fetch(
          `${BASE_URL}?key=${API_KEY}&q=${value}&page=${page}&image_type=photo&per_page=12`
        );

        if (!response.ok) {
          throw new Error('Error');
        }

        const data = await response.json();

        setImages(prevImages => [...prevImages, ...data.hits]);
        setIsLoadMore(page < Math.ceil(data.totalHits / 12));
      } catch (error) {
        console.error('Error fetching data:', error);
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
