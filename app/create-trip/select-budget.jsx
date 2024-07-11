import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { SelectBudgetOptions } from '../../constants/Options';
import OptionCard from './../../components/CreateTrip/OptionCard'

export default function SelectBudget() {
    const navigation=useNavigation();
    const [selectedOption,setSelctedOption]=useState();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[])
  
    return (
    <View style={{
        paddingTop:75,
        padding:25

    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20
      }}>Budget</Text>
      <View style={{
        marginTop:20
      }}>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:20
        }}>Choose sepending habits for your trips</Text>
        
        <FlatList
        data={SelectBudgetOptions}
        renderItem={({item,index})=>(
            <View>
                <OptionCard option={item} selectedOption={selectedOption}/>
                </View>
        )}
        />
      </View>
    </View>
  )
}