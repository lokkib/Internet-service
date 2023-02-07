type CurrentUserDataMain = {
  name: string;
  surname: string;
  phone: string;
  city: string;
};

export type currentUserDataState = {
  currentUserData: {
    name: string;
    surname: string;
    phone: string;
    city: string;
    avatar?: string;
  };
  newCurrentUserData: {
    name: string;
    surname: string;
    phone: string;
    city: string;
  };
  isDataChanged: {
    DataChanged: boolean;
  };
};

export default CurrentUserDataMain;
