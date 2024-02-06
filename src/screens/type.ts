export interface IContextValueUtility {
  text?: string;
  onChangeText?: React.Dispatch<React.SetStateAction<string>> | any;
  searchText?: string;
  setSearchText?: React.Dispatch<React.SetStateAction<string>> | any;
  isSearch?: boolean;
  setIsSearch?: React.Dispatch<React.SetStateAction<boolean>> | any;
  history?: string[];
  setHistory?: React.Dispatch<React.SetStateAction<string[]>> | any;
  showHistory?: boolean;
  setShowHistory?: React.Dispatch<React.SetStateAction<boolean>> | any;
  photos?: any[];
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>> | any;
  page?: number;
  setPage?: React.Dispatch<React.SetStateAction<number>> | any;
  isLoadMore?: boolean;
  setIsLoadMore?: React.Dispatch<React.SetStateAction<boolean>> | any;
  loadMorePhotos?: () => void;
  searchPhotos?: () => void;
  setPhotos?: (newPhotos: any[]) => void;
}
