import {View, Text, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import logo from '../../assets/Img/Logo.png';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.push('OnBoardScreen');
    }, 5000); // Change the timeout duration as needed
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#21252C',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor="#21252C" barStyle="light-content" />
      <Image source={logo} />
    </View>
  );
}
