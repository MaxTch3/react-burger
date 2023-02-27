import { useState } from 'react';
import styles from './profile-page.module.css'

const ProfilePage = () => {
  const active = '';
  const inactive = ' text_color_inactive';
  const [linkStatus, setLinkStatus] = useState(
    { profileLink: active, orderListLink: inactive, logOutLink: inactive }
  );

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '320px' }}>
        <ul className={styles.links}>
          <li
            className={'text text_type_main-medium ' + styles.link + linkStatus.profileLink}
            onClick={() => {
              setLinkStatus(
                { profileLink: active, orderListLink: inactive, logOutLink: inactive }
              )
            }
            }
          >Профиль</li>
          <li
            className={'text text_type_main-medium ' + styles.link + linkStatus.orderListLink}
            onClick={() => {
              setLinkStatus(
                { profileLink: inactive, orderListLink: active, logOutLink: inactive }
              )
            }
            }
          >История заказов</li>
          <li
            className={'text text_type_main-medium ' + styles.link + linkStatus.logOutLink}
            onClick={() => {
              setLinkStatus(
                { profileLink: inactive, orderListLink: inactive, logOutLink: active }
              )
            }
            }
          >Выход</li>
        </ul>
        <p className="text text_type_main-default text_color_inactive pt-20" style={{ opacity: 0.4 }}>В этом разделе вы можете
          изменить&nbsp;свои персональные данные</p>
      </div>


    </div>
  )
}

export default ProfilePage;
