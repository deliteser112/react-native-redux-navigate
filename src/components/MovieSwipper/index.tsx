import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import FastImage from 'react-native-fast-image';
import styles from './styles';

interface MoiveSwipperComponentProps {
  slidesData: any[];
  title: string;
  autoplay: boolean;
  navigate: () => void;
}

const MoiveSwipperComponent: React.FC<MoiveSwipperComponentProps> = ({
  slidesData,
  title,
  autoplay,
  navigate,
}) => {
  const size = autoplay
    ? {
        width: Dimensions.get('screen').width / 3 + 25,
        height: Dimensions.get('screen').height / 5,
      }
    : {
        width: Dimensions.get('screen').width / 3 + 40,
        height: Dimensions.get('screen').height / 8,
      };

  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={navigate}>
        {title}
      </Text>
      <SwiperFlatList
        data={slidesData}
        renderItem={({item}) => (
          <View style={styles.swipperContainer}>
            <View style={[styles.slide, size]}>
              <FastImage
                resizeMode="cover"
                style={[styles.image, size]}
                source={{uri: item.Poster}}
              />
            </View>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.swipperText}>
              {item.Title.length > 16
                ? `${item.Title.substring(0, 16)}...`
                : item.Title}
            </Text>
          </View>
        )}
        index={0}
        autoplay={autoplay}
        autoplayLoop
        autoplayDelay={5}
      />
    </View>
  );
};

export default MoiveSwipperComponent;
