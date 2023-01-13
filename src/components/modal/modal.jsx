import React from 'react';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay.jsx';

const Modal = ({ active, setActive, children }) => {
  React.useEffect(() => {
    const close = (evt) => {
      if (evt.key === 'Escape') {
        setActive(false)
      }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [])

  return (
    <ModalOverlay active={active} setActive={setActive}>
      <div
        className={active ? `${styles.modal__content} ${styles.modal__content_active}` : `${styles.modal__content}`}
        onClick={(evt) => evt.stopPropagation()}>
        {children}
      </div>
    </ ModalOverlay>
  )
}
export default Modal;
