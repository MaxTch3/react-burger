import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon, } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './app-header.module.css'
const AppHeader = () => {
   return (
      <header className={"pt-4 pb-4 " + style.header}>
         <div className={style.header__container}>
            <div className={style.header__links}>
               <div className={"pt-4 pr-5 pb-4 pl-5 " + style.header__link}>
                  <BurgerIcon type="primary" />
                  <span className="text text_type_main-default ml-2">Конструктор</span>
               </div>
               <div className={"pt-4 pr-5 pb-4 pl-5 ml-2 " + style.header__link}>
                  <ListIcon type="secondary" />
                  <span className="text text_type_main-default ml-2">Лента заказов</span>
               </div>
            </div>
            <div className={style.header__logo}>
               <Logo />
            </div>

            <div className={"pt-4 pr-5 pb-4 pl-5 " + style.header__link}>
               <ProfileIcon type="secondary" />
               <span className="text text_type_main-default ml-2">Личный кабинет</span>
            </div>
         </div>

      </header>
   )
}
export default AppHeader;