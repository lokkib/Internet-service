import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.scss';
import FormNewArticleProps from '../../@types/props/FormNewArticleProps';
import { passItemDescription } from '../../redux/slices/passNewAdParamsTextOnly';
import { getComment } from '../../redux/slices/getCommentSlice';

import { RootState } from '../../redux/store';

const FormDescriptionItem = ({ value }: FormNewArticleProps) => {
  const commentText = useSelector((state: RootState) => state.comment.text);
  const [textArea, setTextArea] = useState<string>(value || '');
  const [textAreaPlaceholder, setTextAreaPlaceholder] = useState('Введите описание');
  const dispatch = useDispatch();

  const passDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
    dispatch(passItemDescription(e.target.value));
    dispatch(getComment(e.target.value));
  };

  return (
    <div className={styles.formBlock}>
      <label className={styles.label} htmlFor="text">
        Описание
      </label>
      <textarea
        value={textArea && commentText}
        onFocus={() => setTextAreaPlaceholder('')}
        onBlur={() => setTextAreaPlaceholder('Введите описание')}
        onChange={(e) => passDescription(e)}
        placeholder={textAreaPlaceholder}
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
