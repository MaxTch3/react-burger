import styles from './modal-overlay.module.css'
import PropTypes from 'prop-types';

const ModalOverlay = ({ animation, closeModalAnimation }) => {
  return (
    <div className={animation ? `${styles.modal_overlay} ${styles.modal_overlay_active}` : `${styles.modal_overlay}`} onClick={() => closeModalAnimation()}>
    </div>
  )
}

ModalOverlay.propTypes = {
  animation: PropTypes.bool.isRequired,
  closeModalAnimation: PropTypes.func.isRequired
}

export default ModalOverlay;
