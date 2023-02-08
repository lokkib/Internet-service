import CurrentUserData from './CurrentUserDataProps';

type InputProps = {
  text?: string;
  placeholderInput: string;
  id?: string;
  classType: string;
  type?: string;
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  passInputValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearInput?: (value: string) => void;
  currentUserData?: CurrentUserData;
  currentUserDataProperty?: string;
  removerError?: () => void;
};

export default InputProps;
