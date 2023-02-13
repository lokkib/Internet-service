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
  newCurrentUserData: CurrentUserDataMain;
  isDataChanged: {
    DataChanged: boolean;
  };
};

export default CurrentUserDataMain;
