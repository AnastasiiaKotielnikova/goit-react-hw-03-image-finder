import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Backdrop, ModalWindow, Image } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  handleEscClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscClose);
  }

  render() {
    const { url, onClose, alt } = this.props;
    return createPortal(
      <Backdrop onClick={onClose}>
        <ModalWindow>
          <Image src={url} alt={alt} />
        </ModalWindow>
      </Backdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
