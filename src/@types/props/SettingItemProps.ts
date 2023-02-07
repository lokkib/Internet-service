import CurrentUserData from './CurrentUserDataProps';

type SettingItemProps = {
  labelText: string;
  labelFor: string;
  classType: string;
  currentUserData?: CurrentUserData;
  currentUserDataProperty: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default SettingItemProps;
