import PropTypes from 'prop-types';
import styles from './modal-header.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const ModalHeader = ({ header, closeModal }) => {
  return (
    <div className={styles.container + ' pt-10 pl-10 pr-10'}>
      <p className='text text_type_main-large'>{header}</p>
      <div className={styles.button} onClick={closeModal}>
        <CloseIcon type='primary' />
      </div>
    </div >
  )
}

ModalHeader.propTypes = {
  header: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
}
export default ModalHeader;
