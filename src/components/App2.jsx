// import React, { Component } from 'react';
// import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { getGallery } from 'services/api';

// import { nanoid } from 'nanoid';
// import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';
// import { Loader } from './Loader/Loader';

// export class App extends Component {
//   state = {
//     value: '',
//     images: [],
//     loading: false,
//     page: 1,

//     requestId: '',
//     isLoadMore: false,

//     largeImageURL: '',
//   };

//   componentDidUpdate(_, prevState) {
//     const { value, page, requestId } = this.state;
//     if (
//       prevState.value !== value ||
//       prevState.page !== page ||
//       requestId !== prevState.requestId
//     ) {
//       this.setState({ loading: true });
//       getGallery(value, page)
//         .then(({ hits, totalHits }) => {
//           this.setState(prevState => {
//             return {
//               images: [...prevState.images, ...hits],
//               isLoadMore: page < Math.ceil(totalHits / 12),
//             };
//           });
//         })
//         .catch(error => console.error('Error fetching data:', error))
//         .finally(() => {
//           this.setState({ loading: false });
//         });
//     }
//   }
//   handleSearch = value => {
//     // Генеруємо новий унікальний ідентифікатор
//     const requestId = nanoid();
//     this.setState({ value, requestId, page: 1, images: [] });
//   };
//   handleLoadMore = () => {
//     this.setState(prevState => {
//       return {
//         page: prevState.page + 1,
//       };
//     });
//   };

//   handleOpenModal = largeImageURL => {
//     this.setState({ largeImageURL });
//   };

//   render() {
//     const { images, isLoadMore, largeImageURL, loading } = this.state;

//     return (
//       <>
//         <Searchbar onSubmit={this.handleSearch} />
//         <ImageGallery images={images} openModal={this.handleOpenModal} />

//         {isLoadMore && <Button handleLoadMore={this.handleLoadMore} />}
//         {largeImageURL && (
//           <Modal
//             closeModal={this.handleOpenModal}
//             largeImageURL={largeImageURL}
//           />
//         )}
//         {loading && <Loader />}
//       </>
//     );
//   }
// }
