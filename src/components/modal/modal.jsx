import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay.jsx';

const Modal = ({ active, setActive, children }) => {

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
