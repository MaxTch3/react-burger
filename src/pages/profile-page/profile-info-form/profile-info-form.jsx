import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './profile-info-form.module.css';

const ProfileInfoForm = () => {

  const initialForm = { name: '', email: '', password: '' };
  const initialIcons = { name: 'EditIcon', email: 'EditIcon', password: 'EditIcon' };
  const [profileInfo, setProfileInfo] = useState(initialForm);
  const [icon, setIcon] = useState(initialIcons);
  const [activeButtons, setActiveButtons] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const userInfo = useSelector(state => state.userReducer.user)

  const onChangeInput = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
    setIcon({ ...icon, [e.target.name]: 'CloseIcon' });
    setActiveButtons(true)
  };

  const clearInput = (ref) => {
    setProfileInfo({ ...profileInfo, [ref.current.name]: '' });
    setIcon({ ...icon, [ref.current.name]: 'EditIcon' })
  };

  const resetForm = () => {
    setProfileInfo({ name: userInfo.name, email: userInfo.email, password: '' })
    setIcon(initialIcons)
  }

  useEffect(() => {
    if (JSON.stringify(profileInfo) === JSON.stringify({ name: userInfo.name, email: userInfo.email, password: '' })) {
      setActiveButtons(false)
    }
  }, [profileInfo])

  useEffect(() => {
    setProfileInfo({ password: '', name: userInfo.name, email: userInfo.email })
  }, [])

  return (
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
          <Button htmlType="button" type="secondary" size="medium"
            onClick={resetForm}>
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
  )
}
export default ProfileInfoForm;
