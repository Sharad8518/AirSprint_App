import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  Animated,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useRef, useContext} from 'react';
import car from '../../assets/Img/Car.png';
import map from '../../assets/Img/map.png';
import ship from '../../assets/Img/ship.png';

const SCREEN_WIDTH = Dimensions.get('window').width;
const data = [
  {
    id: '1',
    title: 'Ship Your Parcel',
    step1:
      'Experience smooth and completely stress free shipping of your parcel',

    img: car,
  },
  {
    id: '2',
    title: 'Ship International',
    step1:
      'Ship your parcel internationally with our reliable shipping service',
    img: ship,
  },
  {
    id: '3',
    title: 'Track Your Parcel',
    step1: 'Stay informed about the parcel and get the real-time location',
    img: map,
  },
];

export default function OnBoardScreen({navigation}) {
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const size = 80;
  const strokeWidth = 3;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  console.log('currentIndex', currentIndex);

  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#f1f2f6',
          borderRadius: 100,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: currentIndex === 2 ? 149 : 224,
            height: currentIndex === 2 ? 173 : 130,
          }}
        />
      </View>

      <Text
        style={{
          fontFamily: 'Inter_24pt-SemiBold',
          fontSize: 23,
          marginTop: 20,
          color: '#000',
          textAlign: 'center',
          width: '80%',
        }}>
        {item.title}
      </Text>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: '#76889A',
          marginTop: 10,
          width: '80%',
          textAlign: 'center',
        }}>
        {item.step1}
      </Text>
    </View>
  );

  const handlePress = () => {
    if (currentIndex < data.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex); // Update state
      flatListRef.current.scrollToIndex({index: nextIndex, animated: true}); // Scroll to next slide
    } else {
      navigation.navigate('SignIn');
    }
  };

  const handleScroll = event => {
    const newIndex = Math.round(
      event.nativeEvent.contentOffset.x / SCREEN_WIDTH,
    );
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex); // Update state on user swipe
    }
  };
  return (
    <View
      style={{
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <StatusBar backgroundColor="#21252C" barStyle="light-content" />

      <TouchableOpacity
        style={{
          width: '90%',
          height: 30,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: 10,
        }}>
        <Text
          style={{
            color: '#76889A',
            fontFamily: 'Poppins-SemiBold',
            fontSize: 16,
          }}>
          Skip
        </Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onMomentumScrollEnd={handleScroll} // Update index on scroll
      />

      <View
        style={{
          width: '90%',
          height: 150,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => handlePress()}
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#000',
            borderRadius: 10,
          }}>
          <View
            style={{
              width: '100%',
              height: 50,
              borderRadius: 100,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Inter_24pt-Medium',
                color: '#fff',
                fontSize: 16,
                marginBottom: 3,
              }}>
              Continue
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            width: 90,
            height: 30,
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: currentIndex === 0 ? 25 : 20,
              height: 3,
              backgroundColor: currentIndex === 0 ? '#000' : '#D2D6DB',
            }}
          />
          <View
            style={{
              width: currentIndex === 1 ? 25 : 20,
              height: 3,
              backgroundColor: currentIndex === 1 ? '#000' : '#D2D6DB',
            }}
          />
          <View
            style={{
              width: currentIndex === 2 ? 25 : 20,
              height: 3,
              backgroundColor: currentIndex === 2 ? '#000' : '#D2D6DB',
            }}
          />
        </View>
      </View>
    </View>
  );
}
