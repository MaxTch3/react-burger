import styles from './forgot-password.module.css'
import { useState } from 'react';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Navigate } from 'react-router-dom';
import forgotAction from '../../services/actions/forgot-password';
import { useDispatch, useSelector } from 'react-redux';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const isAuthorization = useSelector(state => state.userReducer.isAuthorization);
  const forgotCodeSend = useSelector(state => state.userReducer.forgotCodeSend);
  const onSubmit = (e) => {
    e.preventDefault();
    if (email) { dispatch(forgotAction(email)) };
  }
  if (isAuthorization) { return (<Navigate to='/' />) };
  if (forgotCodeSend) { return (<Navigate to='/reset-password' />) };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h2 className='text text_type_main-medium'>Восстановление пароля</h2>
        <Input
          type={'email'}
          placeholder={'Укажите e-mail'}
          onChange={e => { setEmail(e.target.value) }}
          value={email}
          name={'email'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1 p"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium">
          Восстановить
        </Button>
      </form>
      <div className={styles.line + ' mt-20'}>
        <p className='text text_type_main-default text_color_inactive'>Вспомнили пароль?</p>
        <Link to='/login' className={'text text_type_main-default ' + styles.link}>Войти</Link>
      </div>

    </div>
  )
}

export default ForgotPasswordPage;
