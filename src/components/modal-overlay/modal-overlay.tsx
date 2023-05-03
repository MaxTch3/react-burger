import { FC } from 'react';
import styles from './modal-overlay.module.css'

type TModalOverlayProps = {
  animation: boolean;
  closeModalAnimation: () => void;
}

const ModalOverlay: FC<TModalOverlayProps> = ({ animation, closeModalAnimation }) => {
  return (
    <div className={animation ? `${styles.modal_overlay} ${styles.modal_overlay_active}` : `${styles.modal_overlay}`} onClick={() => closeModalAnimation()}>
    </div>
  )
}

export default ModalOverlay;
