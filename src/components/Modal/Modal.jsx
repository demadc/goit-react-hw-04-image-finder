import { useEffect } from 'react';
import { Overlay } from 'components/Overlay/Overlay';

export function Modal(props) {
  const { largeImageURL, closeModal } = props;

  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') {
        closeModal('');
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [closeModal]);

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      closeModal('');
    }
  };

  return (
    <Overlay onClick={handleBackdrop}>
      <img src={largeImageURL} width="70%" alt="img" />
    </Overlay>
  );
}

// import { Overlay } from 'components/Overlay/Overlay';
// import { Component } from 'react';

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleEsc);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleEsc);
//   }
//   handleEsc = e => {
//     if (e.code === 'Escape') {
//       this.props.closeModal('');
//     }
//   };
//   handleBackdrop = e => {
//     if (e.target === e.currentTarget) {
//       this.props.closeModal('');
//     }
//   };
//   render() {
//     return (
//       <Overlay onClick={this.handleBackdrop}>
//         <img src={this.props.largeImageURL} width="70%" alt="img" />
//       </Overlay>
//     );
//   }
// }
