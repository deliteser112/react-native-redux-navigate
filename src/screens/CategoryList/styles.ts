import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    marginBottom: 20,
    borderRadius: 20,
    width: 130,
    height: 150,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'rgb(18 23 35)',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    marginBottom: 20,
  },
  list: {flexDirection: 'row', flex: 1, gap: 20},
  description: {flex: 1, justifyContent: 'space-around'},
  movieSubject: {color: 'white', fontSize: 20},
  detail: {color: '#f9f9f9'},
});
