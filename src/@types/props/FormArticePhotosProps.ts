type FormArticlePhotoProps = {
  loadImageToAd: (e: React.ChangeEvent<HTMLInputElement>) => void;
  file?: string;
  id?: string;
  true1?: string;
  fileLink?: string;
  deleteImageOnClick: (e: string) => void;
  dataPhoto?: string[];
  deleteImageFromAdOnClick?: (e: string) => void;
};

export default FormArticlePhotoProps;
