import React, { useState } from 'react';
import { createPortal } from "react-dom";
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay.jsx';
import PropTypes from 'prop-types';


const Modal = ({ setActive, children }) => {

  const [animation, setAnimation] = useState(true);

  const closeModalAnimation = () => {
    const closeModal = () => {
      setActive(false);
    };
    setAnimation(false);
    setTimeout(closeModal, 400)
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
          {children}
        </div>
      </div>
    </>,
    document.getElementById('modal-root')
  )
};

Modal.propTypes = {
  setActive: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
