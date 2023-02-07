export interface Items {
  title: string;
  description: string;
  price: number;
  id: number;
  images: [
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
}

interface ContentCardsProps {
  classType?: string;
  classTypeCardItem?: string;
  classTypeImgMain?: string;
  data?: Items[];
  title?: string;
  price?: number;
  city?: string;
  createdOn?: string;
  imgLink?: string | undefined;
  itemDetails?: Items;
  id?: number;
}

export default ContentCardsProps;
