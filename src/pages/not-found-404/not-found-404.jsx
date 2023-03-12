import styles from './not-found-404.module.css';

const NotFound404 = () => {
  return (
    <div className={styles.container}>
      <h3 className='text text_type_main-medium pb-5'>Ошибка 404</h3>
      <div className={styles.image}></div>
      <p className='text text_type_main-default pt-5'>Запрошенная Вами страница не существует</p>
    </div>
  )
}

export default NotFound404;
