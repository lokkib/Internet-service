export type ImgLink = {
  id: number;
  ad_id: number;
  url: string;
};

type ImagesInfo = {
  imgLinks: ImgLink[];
};

export default ImagesInfo;
