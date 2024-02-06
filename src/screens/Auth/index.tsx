import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  StatusBar,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {auth} from '../../constants';

type RootStackParamList = {
  MainTabNavigator: undefined;
  LoginScreen: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

const Login = () => {
  const navigation = useNavigation<NavigationProp>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authData, setAuthData] = useState({email: null, password: null});

  const handleLogin = () => {
    navigation.navigate('MainTabNavigator');
    if (!username || !password) {
      Alert.alert(auth.validateError.title, auth.validateError.content);
    } else if (authData.email === username && authData.password === password) {
      navigation.navigate('MainTabNavigator');
    } else {
      Alert.alert(auth.loginError.title, auth.loginError.content);
    }
  };

  useEffect(() => {
    const loadCredential = async () => {
      try {
        const credential = await fetch('https://koe71.wiremockapi.cloud/auth');

        if (!credential.ok) {
          throw new Error(`HTTP error! status: ${credential.status}`);
        }

        const contentType = credential.headers.get('content-type');

        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('The response from the server is not JSON.');
        }

        const response = await credential.json();
        setAuthData(response);
      } catch (error) {
        console.error(error);
      }
    };

    loadCredential();
  }, []);
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={styles.background}>
        <Image
          resizeMode="contain"
          style={styles.imageTop}
          source={require('../../assets/main_top.png')}
        />
        <Image
          resizeMode="contain"
          style={styles.loginBottom}
          source={require('../../assets/login_bottom.png')}
        />
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            style={styles.mainImage}
            source={require('../../assets/login.png')}
          />
          <KeyboardAvoidingView
            style={styles.inputContainer}
            behavior="padding">
            <View style={styles.inputWrapper}>
              <Icon name="user" size={20} color="#6B3FAB" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder={auth.username}
                placeholderTextColor="#6B3FAB"
                onChangeText={text => setUsername(text.toLowerCase())}
                value={username}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Icon name="lock" size={20} color="#6B3FAB" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholderTextColor="#6B3FAB"
                placeholder={auth.Password}
                secureTextEntry
                textContentType="password"
                onChangeText={setPassword}
                value={password}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleLogin}>
              <Text style={styles.buttonText}>{auth.Login}</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;
