import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Booking from '../Screen/Booking';
import Track from '../Screen/Track';
import Home from '../Screen/Home';
import Profile from '../Screen/Profile';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Dashboard() {
  const [activeScreen, setActiveScreen] = useState('Home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'Home':
        return <Home />;
      case 'Track':
        return <Track />;
      case 'Booking':
        return <Booking />;
      case 'Profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <View style={{width: '100%', flex: 1}}>
      <View style={{width: '100%', flex: 1}}>{renderScreen()}</View>

      <View
        style={{
          flexDirection: 'row',
          height: 65,
          backgroundColor: '#21252C',
          borderTopColor: '#ecf0f1',
          borderTopWidth: 1,
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => setActiveScreen('Home')}
          style={{
            width: '20%',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {activeScreen === 'Home' ? (
            <>
              <Feather
                name="home"
                size={25}
                color={'#fff'}
                style={{marginTop: 7}}
              />
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Poppins-Medium',
                  marginTop: 2,
                  color: '#fff',
                }}>
                Home
              </Text>
            </>
          ) : (
            <>
              <Feather
                name="home"
                size={25}
                color={'#76889A'}
                style={{marginTop: 7}}
              />
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Poppins-Medium',
                  marginTop: 2,
                  color: '#76889A',
                }}>
                Home
              </Text>
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveScreen('Track')}
          style={{
            width: '20%',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {activeScreen === 'Track' ? (
            <>
              <MaterialIcons
                name="gps-not-fixed"
                size={25}
                color={'#fff'}
                style={{marginTop: 7}}
              />
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Poppins-Medium',
                  marginTop: 2,
                  color: '#fff',
                }}>
                Track
              </Text>
            </>
          ) : (
            <>
              <MaterialIcons
                name="gps-not-fixed"
                size={25}
                color={'#76889A'}
                style={{marginTop: 7}}
              />
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Poppins-Medium',
                  marginTop: 2,
                  color: '#76889A',
                }}>
                Track
              </Text>
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveScreen('Booking')}
          style={{
            width: '20%',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {activeScreen === 'Booking' ? (
            <>
              <Feather
                name="truck"
                size={25}
                color={'#4A90E2'}
                style={{marginTop: 7}}
              />
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Poppins-Medium',
                  marginTop: 2,
                  color: '#4A90E2',
                }}>
                Booking
              </Text>
            </>
          ) : (
            <>
              <Feather
                name="truck"
                size={25}
                color={'#76889A'}
                style={{marginTop: 7}}
              />
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Poppins-Medium',
                  marginTop: 2,
                  color: '#76889A',
                }}>
                Booking
              </Text>
            </>
          )}
        </TouchableOpacity>
        {/* <TouchableOpacity  onPress={() => setActiveScreen('Job')} style={{width:"20%",height:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center",borderTopColor:activeScreen ==="Job"? "#4A90E2":"#fff",borderTopWidth:3}}>
     {
            activeScreen === "Job" ?
            <>
             <Feather name="briefcase"  size={25} color={"#4A90E2"} style={{marginTop:7}}/>
             <Text style={{fontSize:11,fontFamily:"Poppins-Medium",marginTop:2,color:"#4A90E2"}}>Job</Text>
            </>
            :
            <Feather name="briefcase"  size={25} color={"#000"} style={{marginTop:7}}/>
            
             
       }
      </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => setActiveScreen('Profile')}
          style={{
            width: '20%',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {activeScreen === 'Profile' ? (
            <>
              <Feather
                name="user"
                size={25}
                color={'#4A90E2'}
                style={{marginTop: 7}}
              />
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Poppins-Medium',
                  marginTop: 2,
                  color: '#4A90E2',
                }}>
                Profile
              </Text>
            </>
          ) : (
            <>
              <Feather
                name="user"
                size={25}
                color={'#76889A'}
                style={{marginTop: 7}}
              />
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Poppins-Medium',
                  marginTop: 2,
                  color: '#76889A',
                }}>
                Profile
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
