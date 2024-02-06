import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },
  input: {
    flex: 1,
    color: '#6B3FAB',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 45,
    borderRadius: 20,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: '#F6C1FD',
  },
  icon: {
    marginRight: 10,
  },
  buttonContainer: {
    width: '80%',
    height: 45,
    marginBottom: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(218 26 55)',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 32,
  },
  imageTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '25%',
    height: '15%',
    resizeMode: 'stretch',
  },
  mainImage: {
    width: '80%',
    marginBottom: '35%',
  },
  loginBottom: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '20%',
    height: '10%',
    resizeMode: 'stretch',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    marginBottom: '10%',
    width: '100%',
  },
});
