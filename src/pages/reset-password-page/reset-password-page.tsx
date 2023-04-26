import { FC, FormEvent, useRef, useState } from 'react';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Navigate, useLocation } from 'react-router-dom';
import styles from './reset-password-page.module.css';
import resetAction from '../../services/actions/reset-password';
import { useDispatch, useSelectorApp } from '../../services/hooks';
import { TICons } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';

const ResetPasswordPage: FC = () => {
  const [resetInfo, setResetInfo] = useState({ password: '', codeLetter: '' });
  const [showIcon, setShowIcon] = useState<keyof TICons>('HideIcon');
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const { isAuthorization, resetSucces } = useSelectorApp(state => state.userReducer);
  const location = useLocation();
  const prevName = location.state?.prevName;

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
    dispatch(resetAction(resetInfo.password, resetInfo.codeLetter));
  }

  if (!prevName || isAuthorization) { return (<Navigate to='/' />) };
  if (resetSucces) { return (<Navigate to='/login' />) };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h2 className='text text_type_main-medium'>Восстановление пароля</h2>
        <Input
          type={'password'}
          placeholder={'Введите новый пароль'}
          onChange={e => { setResetInfo({ ...resetInfo, [e.target.name]: e.target.value }) }}
          icon={showIcon}
          value={resetInfo.password}
          name={'password'}
          error={false}
          ref={passwordRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1"
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={e => { setResetInfo({ ...resetInfo, [e.target.name]: e.target.value }) }}
          value={resetInfo.codeLetter}
          name={'codeLetter'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1 p"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium">
          Сохранить
        </Button>
      </form>
      <div className={styles.line + ' mt-20'}>
        <p className='text text_type_main-default text_color_inactive'>Вспомнили пароль?</p>
        <Link to='/login' className={'text text_type_main-default ' + styles.link} >Войти</Link>
      </div>
    </div>
  )
}

export default ResetPasswordPage;


