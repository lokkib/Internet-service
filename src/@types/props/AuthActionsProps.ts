type AuthActionsProps = {
  clickEnterAccount?: () => void;
  closeModalNewAdv?: () => void;
  closeSignUpWindow?: () => void;
  closeAuthWindow?: () => void;
  clickSignUp?: () => void;
  onChangePage?: (n: number) => void;
  openSignInModalCloseSignUp?: () => void;
};

export default AuthActionsProps;
