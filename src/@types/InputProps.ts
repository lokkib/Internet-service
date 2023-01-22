type InputProps = {
  text?: string;
  placeholder?: string;
  id?: string;
  classType: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  passInputValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default InputProps;
