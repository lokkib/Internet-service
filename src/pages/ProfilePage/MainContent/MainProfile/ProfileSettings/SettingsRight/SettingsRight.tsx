import React, {useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import styles from './style.module.scss';
import ButtonSearchSave from '../../../../../../components/ButtonSearchSave/ButtonSearchSave';
import SettingsItem from './SettingsItem/SettingsItem';
import { CurrentUserDataProps, CurrentUserData } from '../../../../../../@types/CurrentUserData';
import { getNewCurrentUserName, getNewCurrentUserSurName, getNewCurrentUserPhone, getNewCurrentUserCity } from '../../../../../../redux/slices/detectUserDataChangeSlice';
import { RootState } from '../../../../../../redux/store';
import { useChangeCurrentUserDataMutation } from '../../../../../../redux/api/avitoApi';


const SettingsRight: React.FC<CurrentUserDataProps> = ({ currentUserData }) => {
  const [sendNewData] = useChangeCurrentUserDataMutation();

const isCurrentUserDataChanged = useSelector((state: RootState) => state.currentUserData.isDataChanged.DataChanged)
const newDataUser = useSelector((state:RootState) => state.currentUserData.newCurrentUserData);

console.log({...newDataUser})

  const saveUserNewData = async () => {
    await sendNewData({
        ...newDataUser
    })
    .unwrap()
    .catch(() => {
      throw new Error
    })
    .then((response) => {
      console.log(response)
    })
  };
  const currentData = useSelector((state:RootState) => state.currentUserData.currentUserData)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getCurrentUserData({ currentUserData: {name: currentUserData.name, surname: currentUserData.surname, phone: currentUserData.phone, city: currentUserData.city}} ))
  // },[])

  useEffect(() => {
    dispatch(getNewCurrentUserName((currentUserData as CurrentUserData).name ))
      console.log(currentData)
    dispatch(getNewCurrentUserSurName((currentUserData as CurrentUserData).surname))
  

    dispatch(getNewCurrentUserCity((currentUserData as CurrentUserData).city))
  
 
    dispatch(getNewCurrentUserPhone((currentUserData as CurrentUserData).phone))

  },[])


      const passUserNewName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(getNewCurrentUserName(e.target.value ))
      
      }
      const passUserNewSurName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(getNewCurrentUserSurName(e.target.value ))
      
      }


      const passUserNewSurCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(getNewCurrentUserCity(e.target.value ))
      
      }


      const passUserNewSurPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(getNewCurrentUserPhone(e.target.value ))
      
      }

    


    


  return (
    <div className={styles.settingsWrapper}>
      <form className={styles.form} action={process.env.REACT_APP_API as string}>
        <SettingsItem
        onChange={passUserNewName}
          currentUserDataProperty={(currentUserData as CurrentUserData).name}
          classType="nameInput"
          labelFor="name"
          labelText="Имя"

        />
        <SettingsItem
         onChange={passUserNewSurName}
          currentUserDataProperty={(currentUserData as CurrentUserData).surname }
          classType="lastNameInput"
          labelFor="surname"
          labelText="Фамилия"
   

        />
        <SettingsItem
              onChange={passUserNewSurCity}
          currentUserDataProperty={(currentUserData as CurrentUserData).city }
          classType="cityInput"
          labelFor="city"
          labelText="Город"
       
 
        />
        <SettingsItem
        onChange={passUserNewSurPhone}
  
          currentUserDataProperty={(currentUserData as CurrentUserData).phone }
          classType="phoneInput"
          labelFor="phone"
          labelText="Телефон"
     
        />
        <ButtonSearchSave onClick={saveUserNewData} disabled={!isCurrentUserDataChanged} classType={isCurrentUserDataChanged ? 'activeSave' : 'disabledSave'} text="Сохранить" />
      </form>
    </div>
  );
};

export default SettingsRight;
