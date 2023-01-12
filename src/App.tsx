import React from 'react';
import AppHeader from './components/app-header/app-header'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients.jsx'
import BurgerConstructor from './components/burger-constructor/burger-constructor.jsx'
import styles from './App.module.css';
import Modal from './components/modal/modal.jsx';
import ModalHeader from './components/modal/modal-header/modal-header';
import IngredientDetails from './components/ingredient-details/ingredient-details';
// import data from './utils/data.js';


function App() {
   const [state, setState] = React.useState({
      ingredientsData: [],
      loading: true
   });
   const [modalActive, setModalActive] = React.useState(false);
   const [modal, setModal] = React.useState(null);
   const [dataModal, setDataModal] = React.useState(null);

   const url = 'https://norma.nomoreparties.space/api/ingredients';

   const handleCloseModal = () => {
      setModalActive(false);
   }
   const handleOpenModal = () => {
      setModalActive(true)
   }


   React.useEffect(() => {
      const getData = async () => {
         setState({ ...state, loading: true });
         try {
            const res = await fetch(url);
            if (res.ok) {
               const data = await res.json();
               setState({ ingredientsData: data.data, loading: false });
            }
         }
         catch (error) {
            console.log(error);
         };
      };
      getData();
   }, []);

   return (
      <div className={styles.app}>
         <AppHeader />
         <main className={styles.main} >
            <BurgerIngredients
               data={state.ingredientsData}
               openModal={handleOpenModal}
               closeModal={handleCloseModal}
               setModal={setModal}
               setDataModal={setDataModal}
            />
            <BurgerConstructor
               data={state.ingredientsData}
               openModal={handleOpenModal}
               closeModal={handleCloseModal}
               setModal={setModal} />
         </main>
         {(modal === 1) && 
            <Modal active={modalActive} setActive={setModalActive}>
               <ModalHeader header={'Детали ингредиента'} closeModal={handleCloseModal} />
               <IngredientDetails itemId={dataModal} data={state.ingredientsData}/>
               <p>{dataModal}</p>
            </Modal>}
         {(modal === 2) &&
            <Modal active={modalActive} setActive={setModalActive}>
               <ModalHeader header={''} closeModal={handleCloseModal} />
               <p>До свидания</p>
            </Modal>}
      </div>
   );
}

export default App;
