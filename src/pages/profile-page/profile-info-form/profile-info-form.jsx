import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import updateUserAction from '../../../services/actions/update-user';
import styles from './profile-info-form.module.css';

const ProfileInfoForm = () => {

  const initialForm = { name: '', email: '', password: '' };
  const initialIcons = { name: 'EditIcon', email: 'EditIcon', password: 'EditIcon' };
  const initialDisabled = { name: true, email: true, password: true };

  const [profileInfo, setProfileInfo] = useState(initialForm);
  const [icon, setIcon] = useState(initialIcons);
  const [isDisabled, setIsDisabled] = useState(initialDisabled);
  const [activeButtons, setActiveButtons] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const userInfo = useSelector(state => state.userReducer.user);
  const updateUserFailed = useSelector(state => state.userReducer.updateUserFailed);
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
    setActiveButtons(true)
  };

  const clickIcon = (ref) => {
    if (isDisabled[ref.current.name]) {
      setIsDisabled({ ...isDisabled, [ref.current.name]: false });
      setIcon({ ...icon, [ref.current.name]: 'CloseIcon' })
    } else {
      setIsDisabled({ ...isDisabled, [ref.current.name]: true });
      setIcon({ ...icon, [ref.current.name]: 'EditIcon' });
      const resetElement = () => {
        if (ref.current.name !== 'password') { return userInfo[ref.current.name] }
        else { return '' }
      };
      setProfileInfo({ ...profileInfo, [ref.current.name]: resetElement() })
    }
  };

  const resetForm = () => {
    setProfileInfo({ name: userInfo.name, email: userInfo.email, password: '' });
    setIcon(initialIcons);
    setIsDisabled(initialDisabled)
  }

  useEffect(() => {
    if (
      ((profileInfo.name === userInfo.name) && (profileInfo.email === userInfo.email) && (profileInfo.password === ''))
      || !profileInfo.name
      || !profileInfo.email
    ) {
      setActiveButtons(false)
    }
  }, [profileInfo])

  useEffect(() => {
    setProfileInfo({ password: '', name: userInfo.name, email: userInfo.email })
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAction(profileInfo.name, profileInfo.email, profileInfo.password));
    if (!updateUserFailed) {
      setActiveButtons(false);
      setIsDisabled(initialDisabled);
      setIcon(initialIcons);
      setProfileInfo({ ...profileInfo, password: '' })
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        type={'text'}
        placeholder={'Имя'}
        ref={nameRef}
        onChange={onChangeInput}
        value={profileInfo.name}
        onIconClick={() => { clickIcon(nameRef) }}
        name={'name'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass="ml-1 p"
        icon={icon.name}
        disabled={isDisabled.name}
      />
      <Input
        type={'email'}
        placeholder={'Логин'}
        ref={emailRef}
        onChange={onChangeInput}
        value={profileInfo.email}
        onIconClick={() => { clickIcon(emailRef) }}
        name='email'
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass="ml-1 p"
        icon={icon.email}
        disabled={isDisabled.email}
      />
      <Input
        type={'password'}
        placeholder={'Пароль'}
        ref={passwordRef}
        onChange={onChangeInput}
        value={profileInfo.password}
        onIconClick={() => { clickIcon(passwordRef) }}
        name={'password'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass="ml-1"
        icon={icon.password}
        disabled={isDisabled.password}
      />
      {activeButtons &&
        <div style={{ display: 'flex' }}>
          <Button htmlType="button" type="secondary" size="medium"
            onClick={resetForm}>
            Отмена
          </Button>
          <Button
            htmlType="submit"
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
