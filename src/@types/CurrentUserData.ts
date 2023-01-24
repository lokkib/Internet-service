interface CurrentUserData {
  id: number;
  name: string;
  email: string;
  city: string;
  avatar: string;
  sells_from: string;
  phone: string;
  role: string;
  surname: string;
}

export interface CurrentUserDataProps {
  currentUserData: CurrentUserData;
}

export default CurrentUserData;
