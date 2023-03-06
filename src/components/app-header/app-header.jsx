import { Logo, BurgerIcon, ListIcon, ProfileIcon, } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';
import styles from './app-header.module.css'

const AppHeader = () => {
  const location = useLocation();

  const iconStatus = (path) => {
    if (location.pathname === path) { return 'primary' }
    else { return 'secondary' }
  }
  const textStyle = (path) => {
    if (location.pathname === path) { return '' }
    else { return 'text_color_inactive' }
  }

  return (
    <header className={'pt-4 pb-4 ' + styles.header}>
      <nav className={styles.header__container}>
        <div className={styles.header__links}>
          <Link className={'pt-4 pr-5 pb-4 pl-5 ' + styles.header__link}
            to='/'
          >
            <BurgerIcon type={iconStatus('/')} />
            <span className={`text text_type_main-default ml-2 ${textStyle('/')}`}
            >Конструктор</span>
          </Link>
          <Link className={'pt-4 pr-5 pb-4 pl-5 ml-2 ' + styles.header__link}
            to='/feed'
          >
            <ListIcon type={iconStatus('/feed')} />
            <span className={`text text_type_main-default ml-2 ${textStyle('/feed')}`}>Лента заказов</span>
          </Link>
        </div>
        <div className={styles.header__logo}>
          <Logo />
        </div>

        <Link className={'pt-4 pr-5 pb-4 pl-5 ' + styles.header__link}
          to='/profile'
        >
          <ProfileIcon type={iconStatus('/profile')} />
          <span className={`text text_type_main-default ml-2 ${textStyle('/profile')}`}>Личный кабинет</span>
        </Link>
      </nav>
    </header>
  )
}
export default AppHeader;
