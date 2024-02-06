import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  swipperContainer: {flexDirection: 'column', alignItems: 'center'},
  image: {
    borderRadius: 10,
  },
  swipperText: {
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
