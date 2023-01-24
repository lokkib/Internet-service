import CurrentUserData from './CurrentUserData';

type InputProps = {
  text?: string;
  placeholder?: string;
  id?: string;
  classType: string;
  type?: string;
  name?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  passInputValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearInput?: (value: string) => void;
  currentUserData?: CurrentUserData;
};

export default InputProps;
