/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';
import HistoryList from '../components/HistoryList';
import {API_KEY, PER_PAGE} from '../constants';
import {useContextValue} from '../context';
import styles from '../styles/styles';
import {SafeAreaView} from 'react-native';

function Home() {
  const {
    photos,
    setPhotos,
    isSearch,
    setIsSearch,
    history,
    setHistory,
    searchText,
    setShowHistory,
    isLoadMore,
    setIsLoadMore,
    setLoading,
    page,
  } = useContextValue();

  useEffect(() => {
    const loadImages = async () => {
      console.log(searchText);
      setLoading(true);
      const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1&text=${searchText}&per_page=${PER_PAGE}&page=${page}`;
      const response = await fetch(url);
      const responseBody = await response.json();
      const newPhotos = responseBody?.photos?.photo;
      if (isSearch && setPhotos) {
        setPhotos([...newPhotos]);
      } else {
        if (photos && setPhotos) {
          setPhotos([...photos, ...newPhotos]);
        }
      }
      if (searchText && history && !history.includes(searchText)) {
        setHistory([...history, searchText]);
      }
      setShowHistory(false);
    };
    if (isSearch || isLoadMore) {
      loadImages();
    }
    setIsSearch(false);
    setLoading(false);
    setIsLoadMore(false);
  }, [page, isSearch, isLoadMore, searchText]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <HistoryList />
      <ImageList />
    </SafeAreaView>
  );
}

export default Home;
