import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './profile-page.module.css';
import ProfileInfoForm from './profile-info-form/profile-info-form.jsx';

const ProfilePage = () => {
  const on = '';
  const off = ' text_color_inactive';
  const [linkStatus, setLinkStatus] = useState({ profileLink: on, orderListLink: off, logOutLink: off });

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '320px' }}>
        <ul className={styles.links}>
          <li
            className={'text text_type_main-medium ' + styles.link + linkStatus.profileLink}
            onClick={() => { setLinkStatus({ profileLink: on, orderListLink: off, logOutLink: off }) }}
          >Профиль</li>
          <li
            className={'text text_type_main-medium ' + styles.link + linkStatus.orderListLink}
            onClick={() => { setLinkStatus({ profileLink: off, orderListLink: on, logOutLink: off }) }}
          >История заказов</li>
          <li
            className={'text text_type_main-medium ' + styles.link + linkStatus.logOutLink}
            onClick={() => { setLinkStatus({ profileLink: off, orderListLink: off, logOutLink: on }) }}
          >Выход</li>
        </ul>
        <p className="text text_type_main-default text_color_inactive pt-20" style={{ opacity: 0.4 }}>В этом разделе вы можете
          изменить&nbsp;свои персональные данные</p>
      </div>
      <Routes>
        <Route path='/' element={<ProfileInfoForm />} />
      </Routes>
    </div >
  )
}

export default ProfilePage;
