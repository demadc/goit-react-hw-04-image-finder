import { Overlay } from 'components/Overlay/Overlay';
import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }
  handleEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal('');
    }
  };
  handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal('');
    }
  };
  render() {
    return (
      <Overlay onClick={this.handleBackdrop}>
        <img src={this.props.largeImageURL} width="70%" alt="img" />
      </Overlay>
    );
  }
}
