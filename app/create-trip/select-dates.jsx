import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from 'expo-router';
import { Colors } from './../../constants/Colors';
import CalendarPicker from 'react-native-calendar-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SelectDates() {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    });
  }, []);

  const onDateChange = (date) => {
    console.log(date);
  };

  return (
    <View style={{
      padding: 25,
      paddingTop: 75,
      backgroundColor: Colors.WHITE
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 35,
        marginTop: 20
      }}>Travel Dates</Text>
     <View style={{
        marginTop:30
     }}>
      <CalendarPicker onDateChange={onDateChange} 
      allowRangeSelection={true}
      minDate={new Date()}
      maxRangeDuration={5}
      selectedRangeStyle={{
        backgroundColor:Colors.PRIMARY
      }}
      selectedDayTextStyle={{
        color:Colors.WHITE
      }}
      />
      </View>
      <TouchableOpacity style={{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15

      }}>
        <Text>Continue</Text>
        </TouchableOpacity>
    </View>
  );
}
