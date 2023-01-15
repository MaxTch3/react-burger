import styles from './modal-overlay.module.css'
import PropTypes from 'prop-types';

const ModalOverlay = ({ active, setActive }) => {
  return (
    <div className={active ? `${styles.modal_overlay} ${styles.modal_overlay_active}` : `${styles.modal_overlay}`} onClick={() => setActive(false)}>
    </div>
  )
}

ModalOverlay.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired
}

export default ModalOverlay;

