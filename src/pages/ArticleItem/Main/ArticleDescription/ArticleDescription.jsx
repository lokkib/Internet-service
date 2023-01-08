import styles from './style.module.scss';

const ArticleDescription = () => {
  return (
    <div className={styles.descriptionWrapper}>
      <h3 className={styles.title}>Описание товара</h3>
      <div className={styles.contentBlock}>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </div>
  );
};

export default ArticleDescription;
