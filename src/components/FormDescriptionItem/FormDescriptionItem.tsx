import React, { useState } from 'react';
import styles from './style.module.scss';

const FormDescriptionItem: React.FC = () => {
  const [textArea, setTextArea] = useState('Lorem ipsum dolor sit amet');

  return (
    <div className={styles.formBlock}>
      <label className={styles.label} htmlFor="text">
        Описание
      </label>
      <textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
        placeholder="Введите описание"
        id="text"
        className={styles.settingsDescription}
        name="text"
        cols={30}
        rows={10}
      />
    </div>
  );
};

export default FormDescriptionItem;
