import CurrentUserData from './CurrentUserData';

type SettingItemProps = {
  labelText: string;
  labelFor: string;
  classType: string;
  currentUserData?: CurrentUserData;
  currentUserDataProperty: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

};

export default SettingItemProps;
