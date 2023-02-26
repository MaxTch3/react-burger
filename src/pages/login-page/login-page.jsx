
import { useRef, useState } from 'react';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './login-page.module.css'
import { Link } from 'react-router-dom';


const LoginPage = () => {
  const [signIn, setSignIn] = useState({ email: '', password: '' });
  const [showIcon, setShowIcon] = useState('HideIcon');
  const passwordRef = useRef(null);

  const onIconClick = () => {
    if (passwordRef.current.type === 'password') {
      setShowIcon('ShowIcon');
      passwordRef.current.type = 'text'
    } else {
      setShowIcon('HideIcon');
      passwordRef.current.type = 'password'
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className='text text_type_main-medium'>Вход</h2>
        <Input
          type={'email'}
          placeholder={'E-mail'}
          onChange={e => { setSignIn({ ...signIn, [e.target.name]: e.target.value }) }}
          value={signIn.email}
          name={'email'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1 p"
        />
        <Input
          type={'password'}
          placeholder={'Пароль'}
          onChange={e => { setSignIn({ ...signIn, [e.target.name]: e.target.value }) }}
          icon={showIcon}
          value={signIn.password}
          name={'password'}
          error={false}
          ref={passwordRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1"
        />
        <Button
          htmlType="button"
          type="primary"
          size="medium">
          Войти
        </Button>
      </form>
      <div className={styles.line + ' mt-20'}>
        <p className='text text_type_main-default text_color_inactive'>Вы — новый пользователь?</p>
        <Link to='/register' className={'text text_type_main-default ' + styles.link} >Зарегистрироваться</Link>
      </div>
      <div className={styles.line + ' mt-4'}>
        <p className='text text_type_main-default text_color_inactive'>Забыли пароль?</p>
        <Link to='/forgot-password' className={'text text_type_main-default ' + styles.link}>Восстановить пароль</Link>
      </div>
    </div>
  )
}

export default LoginPage;
