import { useEffect } from 'react';
import { Route, Routes, useMatch, useNavigate } from 'react-router-dom';
import styles from './profile-page.module.css';
import ProfileInfoForm from './profile-info-form/profile-info-form.jsx';
import { useDispatch, useSelector } from 'react-redux';
import getUserAction from '../../services/actions/get-user';
import logoutUserAction from '../../services/actions/logout-user';
import UserOrdersPage from './user-orders-page/user-orders-page';
import { useDispatchApp } from '../../components/app/App';
import { useSelectorApp } from '../../components/burger-constructor/burger-constructor';

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatchApp();
  const logoutUserFailed = useSelectorApp(state => state.userReducer.logoutUserFailed);

  const profileLinkActive = useMatch('/profile');
  const ordersLinkActive = useMatch('/profile/orders/*');
  const profileLinkStyle = !profileLinkActive ? ' text_color_inactive' : '';
  const ordersLinkStyle = !ordersLinkActive ? ' text_color_inactive' : '';

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  const logoutUser = () => {
    dispatch(logoutUserAction());
    if (!logoutUserFailed) {
      navigate('/')
    }
  }

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '320px' }}>
        <ul className={styles.links}>
          <li
            className={'text text_type_main-medium ' + styles.link + profileLinkStyle}
            onClick={() => {
              navigate('/profile');
            }}
          >Профиль</li>
          <li
            className={'text text_type_main-medium ' + styles.link + ordersLinkStyle}
            onClick={() => {
              navigate('/profile/orders');
            }}
          >История заказов</li>
          <li
            className={'text text_type_main-medium text_color_inactive ' + styles.link}
            onClick={logoutUser}
          >Выход</li>
        </ul>
        <p className="text text_type_main-default text_color_inactive pt-20" style={{ opacity: 0.4 }}>В этом разделе вы можете
          изменить&nbsp;свои персональные данные</p>
      </div>
      <Routes>
        <Route path='/' element={<ProfileInfoForm />} />
        <Route path='/orders' element={<UserOrdersPage />} />
      </Routes>
    </div >
  )
}

export default ProfilePage;
