import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getGallery } from 'services/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    value: '',
    images: [],
    loading: false,

    requestId: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      getGallery({ value: this.state.value, requestId: this.state.requestId })
        .then(response => response.json())
        .then(images => this.setState({ images }))
        .catch(error => console.error('Error fetching data:', error));
    }
  }
  handleSearch = value => {
    // Генеруємо новий унікальний ідентифікатор
    const requestId = nanoid();
    this.setState({ value, requestId });
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
        <ToastContainer position="top-right" autoClose={1500} />

        {/* <Loader />
        <Button />
        <Modal></Modal> */}
      </div>
    );
  }
}

//const BASE_URL = 'https://pixabay.com/api/'
//const API_KEY = '38277598-05a082c915074d2caf7c5aa6f'
