import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useRef, useState } from 'react';
import styles from './profile-page.module.css'

const ProfilePage = () => {
  const on = '';
  const off = ' text_color_inactive';
  const [linkStatus, setLinkStatus] = useState({ profileLink: on, orderListLink: off, logOutLink: off });
  const [profileInfo, setProfileInfo] = useState({ name: '', email: '', password: '' });
  const [icon, setIcon] = useState({ name: 'EditIcon', email: 'EditIcon', password: 'EditIcon' });
  const [activeButtons, setActiveButtons] = useState(false)
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onChangeInput = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
    setIcon({ ...icon, [e.target.name]: 'CloseIcon' });
    setActiveButtons(true)
  }

  const clearInput = (ref) => {
    setProfileInfo({ ...profileInfo, [ref.current.name]: '' });
    setIcon({ ...icon, [ref.current.name]: 'EditIcon' })
  }
  useEffect(() => {
    if (!profileInfo.name && !profileInfo.email && !profileInfo.password) {
      setActiveButtons(false)
    }
  }, [profileInfo])

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
      <form className={styles.form}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          ref={nameRef}
          onChange={onChangeInput}
          value={profileInfo.name}
          onIconClick={() => { clearInput(nameRef) }}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1 p"
          icon={icon.name}
        />
        <Input
          type={'email'}
          placeholder={'Логин'}
          ref={emailRef}
          onChange={onChangeInput}
          value={profileInfo.email}
          onIconClick={() => { clearInput(emailRef) }}
          name='email'
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1 p"
          icon={icon.email}
        />
        <Input
          type={'password'}
          placeholder={'Пароль'}
          ref={passwordRef}
          onChange={onChangeInput}
          value={profileInfo.password}
          onIconClick={() => { clearInput(passwordRef) }}
          name={'password'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1"
          icon={icon.password}
        />
        {activeButtons &&
          <div style={{ display: 'flex' }}>
            <Button htmlType="button" type="secondary" size="medium">
              Отмена
            </Button>
            <Button
              htmlType="button"
              type="primary"
              size="medium">
              Сохранить
            </Button>
          </div>
        }
      </form>
    </div>
  )
}

export default ProfilePage;
