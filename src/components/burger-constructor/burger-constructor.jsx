import PropTypes from 'prop-types';
import {
   CurrencyIcon,
   DragIcon,
   ConstructorElement,
   Button
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';

const BurgerConstructor = ({ data, openModal, closeModal, setModal }) => {
   const bun = data[0];
   const ingredient1 = data[3];
   const ingredient2 = data[4];
   const ingredient3 = data[7];
   const ingredient4 = data[9];
   const ingredient5 = data[11];

   return (
      <section className='pt-25 pl-4'>
         <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: 'calc(65vh - 56px)' }}>
            <div className='pl-8'>
               <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={`${bun?.name || ""}\n` + "(верх)"}
                  price={Number(bun?.price)}
                  thumbnail={String(bun?.image)}
               />
            </div>
            <div className={styles.sauce_and_main + ' pr-4'}>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <DragIcon type='primary' />
                  <ConstructorElement
                     text={String(ingredient1?.name)}
                     price={Number(ingredient1?.price)}
                     thumbnail={String(ingredient1?.image)}
                     extraClass='ml-2'
                  />
               </div>

               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <DragIcon type='primary' />
                  <ConstructorElement
                     text={String(ingredient2?.name)}
                     price={Number(ingredient2?.price)}
                     thumbnail={String(ingredient2?.image)}
                     extraClass='ml-2'
                  />
               </div>

               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <DragIcon type='primary' />
                  <ConstructorElement
                     text={String(ingredient3?.name)}
                     price={Number(ingredient3?.price)}
                     thumbnail={String(ingredient3?.image)}
                     extraClass='ml-2'
                  />
               </div>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <DragIcon type='primary' />
                  <ConstructorElement
                     text={String(ingredient4?.name)}
                     price={Number(ingredient4?.price)}
                     thumbnail={String(ingredient4?.image)}
                     extraClass='ml-2'
                  />
               </div>

               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <DragIcon type='primary' />
                  <ConstructorElement
                     text={String(ingredient5?.name)}
                     price={Number(ingredient5?.price)}
                     thumbnail={String(ingredient5?.image)}
                     extraClass='ml-2'
                  />
               </div>
            </div>

            <div className='pl-8'>
               <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${bun?.name || ""}\n` + "(низ)"}
                  price={Number(bun?.price)}
                  thumbnail={String(bun?.image)}
               />
            </div>
         </div>
         <div style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center'
         }} className='pt-10 pr-4'>
            <p className="text text_type_digits-medium mr-2">5336</p>
            <CurrencyIcon type="primary" />
            <Button htmlType="button" type="primary" size="large" extraClass='ml-10'
            onClick={() => {setModal(2); openModal()}}>
               Оформить заказ
            </Button>
         </div>

      </section>
   )
}

BurgerConstructor.propTypes = {
   data: PropTypes.arrayOf(
      PropTypes.shape({
         _id: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         type: PropTypes.string.isRequired,
         proteins: PropTypes.number.isRequired,
         fat: PropTypes.number.isRequired,
         carbohydrates: PropTypes.number.isRequired,
         calories: PropTypes.number.isRequired,
         price: PropTypes.number.isRequired,
         image: PropTypes.string.isRequired,
         image_mobile: PropTypes.string.isRequired,
         image_large: PropTypes.string.isRequired,
         __v: PropTypes.number,
      })
   ).isRequired
}

export default BurgerConstructor;