import styles from './forgot-password.module.css'
import { useState } from 'react';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  return (
    <div className={styles.container}>
      <form className={styles.form}>
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
          htmlType="button"
          type="primary"
          size="medium">
          Войти
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
