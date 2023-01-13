import styles from './modal.module.css';

const Modal = ({ active, setActive, children }) => {

  return (
    <div className={active ? `${styles.modal} ${styles.modal_active}` : `${styles.modal}`} onClick={() => setActive(false)}>
      <div
        className={active ? `${styles.modal__content} ${styles.modal__content_active}` : `${styles.modal__content}`}
        onClick={(evt) => evt.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
export default Modal;
