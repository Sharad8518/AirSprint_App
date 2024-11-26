import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

export default function SignIn({navigation}) {
  return (
    <View style={{backgroundColor: '#fff', flex: 1, width: '100%'}}>
      <ScrollView
        style={{height: '100%', flexDirection: 'column', width: '100%'}}
        contentContainerStyle={{alignItems: 'center'}}>
        <Text
          style={{
            marginTop: 100,
            fontFamily: 'Inter_24pt-SemiBold',
            fontSize: 24,
            color: '#000',
          }}>
          Sign In
        </Text>

        <View style={{width: '90%', height: 100, marginTop: 10}}>
          <Text
            style={{
              fontFamily: 'Inter_24pt-Medium',
              fontSize: 16,
              color: '#000',
            }}>
            Email Address
          </Text>
          <View
            style={{
              width: '100%',
              height: 50,
              borderColor: '#CFD5DB',
              borderWidth: 1,
              marginTop: 15,
              borderRadius: 10,
              padding: 5,
            }}>
            <TextInput
              placeholderTextColor={'#BABFC5'}
              placeholder="Enter email address"
              style={{color: '#000'}}
            />
          </View>
        </View>

        <View style={{width: '90%', height: 100, marginTop: 10}}>
          <Text
            style={{
              fontFamily: 'Inter_24pt-Medium',
              fontSize: 16,
              color: '#000',
            }}>
            Password
          </Text>
          <View
            style={{
              width: '100%',
              height: 50,
              borderColor: '#CFD5DB',
              borderWidth: 1,
              marginTop: 15,
              borderRadius: 10,
              padding: 5,
              flexDirection: 'row',
            }}>
            <TextInput
              secureTextEntry={true}
              placeholderTextColor={'#BABFC5'}
              placeholder="Enter password"
              style={{color: '#000', width: '90%'}}
            />
            <Feather
              name="eye"
              size={25}
              color={'#4A4A4A'}
              style={{marginTop: 8}}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '90%',
            height: 25,
          }}>
          <Text
            style={{
              fontFamily: 'Inter_24pt-Medium',
              color: '#21252C',
              fontSize: 14,
            }}>
            Forgot password?
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Dashboard')}
          style={{
            height: 50,
            backgroundColor: '#21252C',
            width: '90%',
            borderRadius: 10,
            marginTop: 10,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Inter_24pt-SemiBold',
              fontSize: 16,
            }}>
            Sign In
          </Text>
        </TouchableOpacity>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text
            style={{
              fontFamily: 'Inter_24pt-SemiBold',
              color: '#76889A',
              fontSize: 14,
            }}>
            Don't have an account?{' '}
          </Text>
          <Text
            style={{
              fontFamily: 'Inter_24pt-SemiBold',
              color: '#000',
              fontSize: 14,
            }}>
            Create account{' '}
          </Text>
        </View>

        <Text
          style={{
            fontFamily: 'Inter_24pt-Light',
            color: '#7A848C',
            fontSize: 15,
            marginTop: 20,
          }}>
          Or Sign in with
        </Text>

        <View
          style={{
            width: '90%',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View
            style={{
              width: '48%',
              height: 50,
              borderColor: '#CFD5DB',
              borderWidth: 1,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png',
              }}
              style={{width: 25, height: 25}}
            />
            <Text
              style={{
                marginLeft: 5,
                fontFamily: 'Inter_24pt-SemiBold',
                color: '#000',
              }}>
              Google
            </Text>
          </View>
          <View
            style={{
              width: '48%',
              height: 50,
              borderColor: '#CFD5DB',
              borderWidth: 1,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
              }}
              style={{width: 25, height: 25}}
            />
            <Text
              style={{
                marginLeft: 5,
                fontFamily: 'Inter_24pt-SemiBold',
                color: '#000',
              }}>
              Apple
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
