import { Logo, BurgerIcon, ListIcon, ProfileIcon, } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useMatch } from 'react-router-dom';
import styles from './app-header.module.css'
import { FC } from 'react';

const AppHeader: FC = () => {

  const constructorActive = useMatch('/');
  const feedActive = useMatch('/feed/*');
  const profileActive = useMatch('/profile/*');

  return (
    <header className={'pt-4 pb-4 ' + styles.header}>
      <nav className={styles.header__container}>
        <div className={styles.header__links}>
          <Link className={'pt-4 pr-5 pb-4 pl-5 ' + styles.header__link}
            to='/'
          >
            <BurgerIcon type={constructorActive ? 'primary' : 'secondary'} />
            <span className={`text text_type_main-default ml-2 ${constructorActive ? '' : 'text_color_inactive'}`}
            >Конструктор</span>
          </Link>
          <Link className={'pt-4 pr-5 pb-4 pl-5 ml-2 ' + styles.header__link}
            to='/feed'
          >
            <ListIcon type={feedActive ? 'primary' : 'secondary'} />
            <span className={`text text_type_main-default ml-2 ${feedActive ? '' : 'text_color_inactive'}`}>Лента заказов</span>
          </Link>
        </div>
        <div className={styles.header__logo}>
          <Logo />
        </div>

        <Link className={'pt-4 pr-5 pb-4 pl-5 ' + styles.header__link}
          to='/profile'
        >
          <ProfileIcon type={profileActive ? 'primary' : 'secondary'} />
          <span className={`text text_type_main-default ml-2 ${profileActive ? '' : 'text_color_inactive'}`}>Личный кабинет</span>
        </Link>
      </nav>
    </header>
  )
}
export default AppHeader;
