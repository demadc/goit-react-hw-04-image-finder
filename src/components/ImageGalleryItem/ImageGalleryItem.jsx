import React from 'react';
import { Item, Picture } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images, alt, src, onImageClick }) => {
  const { largeImageURL, tags, webformatURL } = images;

  return (
    <Item
      onClick={e => {
        e.preventDefault();
        onImageClick({ largeImageURL, tags });
      }}
    >
      <div>
        <Picture src={webformatURL} alt={tags} loading="lazy" />
      </div>
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};
