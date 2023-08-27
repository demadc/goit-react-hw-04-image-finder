import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    value: '',
    images: [],
    page: 1,
    loading: false,
  };

  handleSearch = value => {
    this.setState({ value });
  };

  render() {
    const { images } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} />
        {/* <Loader />
        <Button />
        <Modal></Modal> */}
      </div>
    );
  }
}

//const BASE_URL = 'https://pixabay.com/api/'
//const API_KEY = '38277598-05a082c915074d2caf7c5aa6f'
