import React from 'react';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <List>
      {images.map(image => (
        <ImageGalleryItem
          key={image.hits.id}
          src={image.hits.webformatURL}
          alt={image.hits.tags}
        />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ),
};
