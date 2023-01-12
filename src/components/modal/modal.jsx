import React from 'react';
import styles from './modal.module.css';

// const Modal = (props) => {
//    const { children, header, onClose } = props;
//    const [state, setState] = React.useState({ overflow: hidden });

// const handleOpenModal = () => {
//    setState({ overflow: visible })
// }
// const handleCloseModal = () => {
//    setState({ overflow: hidden })
// }
//    return (
//       <div>

//       </div>
//    )
// };

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