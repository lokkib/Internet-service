export type reviewItemData = {
  id: number;
  text: string;
  created_on: string;
  author: {
    id: number;
    name: string;
    email: string;
    city?: string;
    avatar?: string;
    sells_from: string;
    phone?: string;
  };
};

type ReviewItemProps = {
  reviewItemData: {
    id: number;
    text: string;
    created_on: string;
    author: {
      id: number;
      name: string;
      email: string;
      city?: string;
      avatar?: string;
      sells_from: string;
      phone?: string;
    };
  };
};

export default ReviewItemProps;
