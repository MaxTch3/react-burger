import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC, FormEvent, useRef, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import registerAction from '../../services/actions/register-user';
import styles from './register-page.module.css';
import { useDispatchApp, useSelectorApp } from '../../services/hooks';
import { TICons } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';

const RegisterPage: FC = () => {
  const [registerInfo, setRegisterInfo] = useState({ name: '', email: '', password: '' });
  const [showIcon, setShowIcon] = useState<keyof TICons>('HideIcon');
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatchApp();
  const isAuthorization = useSelectorApp(state => state.userReducer.isAuthorization);

  const onIconClick = () => {
    if (passwordRef.current) {
      if (passwordRef.current.type === 'password') {
        setShowIcon('ShowIcon');
        passwordRef.current.type = 'text'
      } else {
        setShowIcon('HideIcon');
        passwordRef.current.type = 'password'
      }
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      registerAction(registerInfo.email, registerInfo.password, registerInfo.name)
    );
  };

  if (isAuthorization) { return <Navigate to='/' /> }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h2 className='text text_type_main-medium'>Регистрация</h2>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={e => { setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value }) }}
          value={registerInfo.name}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1"
        />
        <Input
          type={'email'}
          placeholder={'E-mail'}
          onChange={e => { setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value }) }}
          value={registerInfo.email}
          name={'email'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1 p"
        />
        <Input
          type={'password'}
          placeholder={'Пароль'}
          onChange={e => { setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value }) }}
          icon={showIcon}
          value={registerInfo.password}
          name={'password'}
          error={false}
          ref={passwordRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles.line + ' mt-20'}>
        <p className='text text_type_main-default text_color_inactive'>Уже зарегистрированы?</p>
        <Link to='/login' className={'text text_type_main-default ' + styles.link}>Войти</Link>
      </div>

    </div>
  )
};

export default RegisterPage;
