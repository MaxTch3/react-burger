import styles from './modal-overlay.module.css'

const ModalOverlay = ({ active, setActive, children }) => {
  return (
    <div className={active ? `${styles.modal_overlay} ${styles.modal_overlay_active}` : `${styles.modal_overlay}`} onClick={() => setActive(false)}>
      {children}
    </div>
  )
}

export default ModalOverlay;

