import React, { Component } from 'react';
import { getGallery } from '../services/api';
import { List } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      getGallery(this.props.value)
        .then(response => response.json())
        .then(images => this.setState({ images }));
    }
  }

  render() {
    const { images } = this.state;
    return (
      <List>
        {images.map(image => (
          <li key={image.id} src={image.webformatURL} alt="image" />
        ))}
      </List>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ),
};
