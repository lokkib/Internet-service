import { Items } from '../props/ContentCardsProps';

type FilteredAds = {
  allItems: Items[];
  inputValue: string;
  filteredItems: Items[];
  notFound: boolean;
};

export default FilteredAds;
