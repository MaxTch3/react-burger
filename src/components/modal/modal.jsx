import React, { useState } from 'react';
import { createPortal } from "react-dom";
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay.jsx';
import PropTypes from 'prop-types';
import ModalHeader from './modal-header/modal-header';


const Modal = ({ setActive, onClose, header, children, textStyle }) => {

  const [animation, setAnimation] = useState(true);

  const closeModalAnimation = () => {
    const closeModal = () => {
      setActive(false);
    };
    setAnimation(false);
    setTimeout(() => {
      closeModal();
      setTimeout(onClose, 1)
    }, 300);
  }

  React.useEffect(() => {
    const close = (evt) => {
      if (evt.key === 'Escape') {
        closeModalAnimation()
      }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  })

  return createPortal(
    <>
      <ModalOverlay animation={animation} closeModalAnimation={closeModalAnimation} />
      <div className={animation ? `${styles.wrapper} ${styles.wrapper_active}` : `${styles.wrapper}`}>
        <div
          className={animation ? `${styles.modal__content} ${styles.modal__content_active}` : `${styles.modal__content}`}
          onClick={(evt) => evt.stopPropagation()}>
          <ModalHeader header={header} closeModal={closeModalAnimation} textStyle={textStyle} />
          {children}
        </div>
      </div>
    </>,
    document.getElementById('modal-root')
  )
};

Modal.propTypes = {
  setActive: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string
};

export default Modal;
