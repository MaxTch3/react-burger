import React from 'react';
import { createPortal } from "react-dom";
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay.jsx';
import PropTypes from 'prop-types';


const Modal = ({ active, setActive, children }) => {
  React.useEffect(() => {
    const close = (evt) => {
      if (evt.key === 'Escape') {
        setActive(false)
      }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [setActive])

  return createPortal(
    <>
      <ModalOverlay active={active} setActive={setActive} />
      <div className={active ? `${styles.wrapper} ${styles.wrapper_active}` : `${styles.wrapper}`}>
        <div
          className={active ? `${styles.modal__content} ${styles.modal__content_active}` : `${styles.modal__content}`}
          onClick={(evt) => evt.stopPropagation()}>
          {children}
        </div>
      </div>
    </>,
    document.getElementById('modal-root')
  )
};

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
