import { View, Text, FlatList, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { SelectTravelesList } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from '../../context/CreateTripContext';
export default function SelectTraveler() {

const navigation=useNavigation();
const [selectedTraveler,setSelectedTraveler]=useState();
const {tripData,setTripData}=useContext(CreateTripContext);


    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransperent:true,
            headerTitle:''
        })
    },[])

    useEffect(()=>{
        setTripData({...tripData,
            traveler:selectedTraveler
        })
    },[selectedTraveler]);

    useEffect(()=>{
        console.log(tripData);
    },[tripData])
  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>
      <Text style={{
        fontSize:35,
        fontFamily:'outfit-bold',
        
      }}>Who's Traveling</Text>

      <View style={{
        marginTop:20
      }}>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:23
        }}>Choose your traveles</Text>

        <FlatList
        data={SelectTravelesList}
        renderItem={({item,index})=>(
            <TouchableOpacity
             onPress={()=>setSelectedTraveler(item)}
            style={{
                marginVertical:10
            }}>
                <OptionCard option={item} selectedTraveler={selectedTraveler} />
            </TouchableOpacity>
        )}
        />
      </View>
      <TouchableOpacity style={{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        marginTop:20
      }}>
        <Text style={{
            textAlign:'center',
            color:Colors.WHITE,
            fontFamily:'outfit-medium',
            fontSize:20
        }}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}