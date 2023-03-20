import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styles from './profile-page.module.css';
import ProfileInfoForm from './profile-info-form/profile-info-form.jsx';
import { useDispatch, useSelector } from 'react-redux';
import getUserAction from '../../services/actions/get-user';
import logoutUserAction from '../../services/actions/logout-user';
import UserOrdersPage from './user-orders-page/user-orders-page';

const ProfilePage = () => {
  const on = '';
  const off = ' text_color_inactive';
  const [linkStatus, setLinkStatus] = useState({ profileLink: on, orderListLink: off, logOutLink: off });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutUserFailed = useSelector(state => state.userReducer.logoutUserFailed);

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  const logoutUser = () => {
    setLinkStatus({ profileLink: off, orderListLink: off, logOutLink: on });
    dispatch(logoutUserAction());
    if (!logoutUserFailed) {
      setLinkStatus({ profileLink: on, orderListLink: off, logOutLink: off });
      navigate('/')
    }
  }

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '320px' }}>
        <ul className={styles.links}>
          <li
            className={'text text_type_main-medium ' + styles.link + linkStatus.profileLink}
            onClick={() => {
              setLinkStatus({ profileLink: on, orderListLink: off, logOutLink: off })
              navigate('/profile');
            }}
          >Профиль</li>
          <li
            className={'text text_type_main-medium ' + styles.link + linkStatus.orderListLink}
            onClick={() => {
              setLinkStatus({ profileLink: off, orderListLink: on, logOutLink: off })
              navigate('/profile/orders');
            }}
          >История заказов</li>
          <li
            className={'text text_type_main-medium ' + styles.link + linkStatus.logOutLink}
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
