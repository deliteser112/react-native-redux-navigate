/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useContext} from 'react';
import {IContextValueUtility} from './type';
import {AppStateContext} from './context';
type AppStateContextProviderPropType = {
  children: React.ReactNode;
};

export const AppStateContextProvider: React.FC<
  AppStateContextProviderPropType
> = ({children}) => {
  const [text, onChangeText] = useState<IContextValueUtility['text']>('');
  const [searchText, setSearchText] =
    useState<IContextValueUtility['searchText']>('');
  const [photos, setPhotos] = useState<IContextValueUtility['photos']>([]);
  const [history, setHistory] = useState<IContextValueUtility['history']>([]);
  const [showHistory, setShowHistory] =
    useState<IContextValueUtility['showHistory']>(false);
  const [page, setPage] = useState<IContextValueUtility['page']>(1);
  const [loading, setLoading] =
    useState<IContextValueUtility['loading']>(false);
  const [isSearch, setIsSearch] =
    useState<IContextValueUtility['isSearch']>(false);
  const [isLoadMore, setIsLoadMore] =
    useState<IContextValueUtility['isLoadMore']>(false);

  const loadMorePhotos = () => {
    if (page) {
      setPage(page + 1);
      setIsLoadMore(true);
    }
  };

  const searchPhotos = () => {
    setIsSearch(true);
    setPage(1);
  };
  const contextValue = {
    text,
    onChangeText,
    isSearch,
    setIsSearch,
    history,
    setHistory,
    showHistory,
    setShowHistory,
    photos,
    setPhotos,
    loading,
    setLoading,
    page,
    setPage,
    loadMorePhotos,
    searchPhotos,
    searchText,
    setSearchText,
    isLoadMore,
    setIsLoadMore,
  };
  return (
    <AppStateContext.Provider value={contextValue}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useContextValue = () => {
  const state = useContext(AppStateContext);
  return state;
};
