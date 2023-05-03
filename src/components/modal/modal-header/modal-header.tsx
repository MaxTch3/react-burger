import styles from './modal-header.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';

type TModalHeaderProps = {
  header: string;
  closeModal: () => void;
  textStyle?: string
};

const ModalHeader: FC<TModalHeaderProps> = ({ header, closeModal, textStyle }) => {
  return (
    <div className={styles.container + ' pt-10 pl-10 pr-10'}>
      <p className={!textStyle ? 'text text_type_main-large' : textStyle}>{header}</p>
      <div className={styles.button} onClick={closeModal}>
        <CloseIcon type='primary' />
      </div>
    </div >
  )
}

export default ModalHeader;
