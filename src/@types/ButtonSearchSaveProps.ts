type ButtonSearchSaveProps = {
  text: string;
  classType: string;
  phoneNumber?: string;
  passInputValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPhoneNumber?: () => void;
  onClick?: () => void;
};

export default ButtonSearchSaveProps;
