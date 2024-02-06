import React from 'react';
import {
  StatusBar,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <ImageBackground
        source={require('../assets/background_dot.png')}
        resizeMode="repeat"
        style={styles.background}>
        <Image
          resizeMode="contain"
          style={styles.imageTop}
          source={require('../assets/main_top.png')}
        />
        <Image
          resizeMode="contain"
          style={styles.loginBottom}
          source={require('../assets/login_bottom.png')}
        />
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            style={styles.mainImage}
            source={require('../assets/login.png')}
          />
          <KeyboardAvoidingView
            style={styles.inputContainer}
            behavior="padding">
            {/* <Content> */}
            <View style={styles.inputWrapper}>
              <Icon name="user" size={20} color="#6B3FAB" style={styles.icon} />

              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#6B3FAB"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Icon name="lock" size={20} color="#6B3FAB" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholderTextColor="#6B3FAB"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            {/* </Content> */}
          </KeyboardAvoidingView>
          {/* <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Icon name="user" size={20} color="#6B3FAB" style={styles.icon} />

              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#6B3FAB"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Icon name="lock" size={20} color="#6B3FAB" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholderTextColor="#6B3FAB"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F6C1FD',
    position: 'relative',
  },
  input: {
    flex: 1,
    color: 'white',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 45,
    borderRadius: 20,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
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
    backgroundColor: '#6B3FAB',
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

export default Login;
