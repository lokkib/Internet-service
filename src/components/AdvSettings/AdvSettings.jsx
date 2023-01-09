import styles from './style.module.scss';
import ButtonClose from '../ButtonClose/ButtonClose';
import FormNewArticleItem from '../FormNewArticleItem/FormNewArticleItem';
import FormNewArticlePhotos from '../FormNewArticlePhotos/FormNewArticlePhotos';
import FormArticlePrice from '../FormArticlePrice/FormArticlePrice';
import ButtonSearchSave from '../ButtonSearchSave/ButtonSearchSave';
import FormDescriptionItem from '../FormDescriptionItem/FormDescriptionItem';

const AdvSettings = () => {
  return (
    <div className={styles.advSettingsWrapper}>
      <div className={styles.advSettingsContent}>
        <h3 className={styles.advSettingsHeader}>Редактировать объявление</h3>
        <ButtonClose />
        <form className={styles.advSettingsForm} action="">
          <FormNewArticleItem />
          <FormDescriptionItem />
          <FormNewArticlePhotos />
          <FormArticlePrice />
          <ButtonSearchSave classType="saveAdvSettings" text="Сохранить" />
        </form>
      </div>
    </div>
  );
};

export default AdvSettings;
