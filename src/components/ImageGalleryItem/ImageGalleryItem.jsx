import React from 'react';
import { Item, Picture } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ alt, src, openModal, largeImageURL }) => {
  // const { largeImageURL, tags, webformatURL } = images;

  return (
    <Item>
      <div>
        <Picture
          src={src}
          alt={alt}
          onClick={() => openModal(largeImageURL)}
          loading="lazy"
        />
      </div>
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,

  openModal: PropTypes.func.isRequired,
};
