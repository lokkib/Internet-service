type NewAdCurrentUser = {
  title: string;
  description: string;
  price: number;
  id: number;
  images?: [
    {
      id: number;
      ad_id: number;
      url: string;
    }
  ];
  user_id: number;
  created_on: string;
  user: {
    id: number;
    name: string;
    email: string;
    city: string;
    avatar: string;
    sells_from: string;
    phone: string;
  };
};

export default NewAdCurrentUser;
