import React from 'react';
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx'
import styles from './App.module.css';
import Modal from '../modal/modal.jsx';
import ModalHeader from '../modal/modal-header/modal-header';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import { getIngredients } from '../../utils/burgers-api';

function App() {
  const [state, setState] = React.useState({
    ingredientsData: [],
    loading: true
  });
  const [modalActive, setModalActive] = React.useState(false);
  const [modal, setModal] = React.useState(null);
  const [dataModal, setDataModal] = React.useState('');

  const handleCloseModal = () => {
    setModalActive(false);
  }
  const handleOpenModal = () => {
    setModalActive(true)
  }

  React.useEffect(() => {
    setState({ ingredientsData: [], loading: true });
    getIngredients()
      .then((data) => {
        setState({ ingredientsData: data.data, loading: false })
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className={styles.app}>
        <AppHeader />
        <main className={styles.main} >
          <BurgerIngredients
            data={state.ingredientsData}
            openModal={handleOpenModal}
            setModal={setModal}
            setDataModal={setDataModal}
          />
          <BurgerConstructor
            data={state.ingredientsData}
            openModal={handleOpenModal}
            setModal={setModal} />
        </main>
        {(modal === 1) &&
          <Modal active={modalActive} setActive={setModalActive}>
            <ModalHeader header={'Детали ингредиента'} closeModal={handleCloseModal} />
            <IngredientDetails itemId={dataModal} data={state.ingredientsData}/>
          </Modal>}
        {(modal === 2) &&
          <Modal active={modalActive} setActive={setModalActive}>
            <ModalHeader header={''} closeModal={handleCloseModal} />
            <OrderDetails />
          </Modal>}
    </div>
  );
}

export default App;
