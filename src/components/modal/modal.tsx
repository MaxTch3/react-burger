import React, { FC, ReactNode, useState } from 'react';
import { createPortal } from "react-dom";
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import ModalHeader from './modal-header/modal-header';

type TModalProps = {
  setActive: (a: boolean) => void;
  children?: ReactNode;
  onClose: () => void;
  header: string;
  textStyle?: string;
}

const Modal: FC<TModalProps> = ({ setActive, onClose, header, children, textStyle }) => {

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
    const close = (evt: any) => {
      if (evt.key === 'Escape') {
        closeModalAnimation()
      }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  })

  const modalRootElement = document.getElementById('modal-root') as HTMLElement;

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
    modalRootElement
  )
};


export default Modal;
