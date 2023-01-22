import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import styles from './style.module.scss';
import ButtonSearchSaveProps from '../../@types/ButtonSearchSaveProps';
// import { filteringItems, searchResultEmptyRenderAllItems } from '../../redux/slices/searchSlice';
// import { RootState } from '../../redux/store';

const ButtonSearchSave: React.FC<ButtonSearchSaveProps> = ({
  text,
  classType,
  phoneNumber,
  // showPhoneNumber,
  onClick,
}) => {
  // const inputValue = useSelector((state: RootState) => state.items.inputValue)

  // const dispatch = useDispatch();

  // const searching = ()  => {
  //   if(inputValue) {
  //     dispatch(searchResultEmptyRenderAllItems(false))
  //     dispatch(filteringItems(inputValue));
  //   }
  //   dispatch(searchResultEmptyRenderAllItems(true))

  // }

  return (
    <button type="button" onClick={() => onClick && onClick()} className={styles[classType]}>
      {text}
      <span>{phoneNumber && phoneNumber}</span>
    </button>
  );
};

export default ButtonSearchSave;
