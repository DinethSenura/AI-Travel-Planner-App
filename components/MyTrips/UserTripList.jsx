import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment'

export default function UserTripList({userTrips}) {
  const LatestTrip=JSON.parse(userTrips[0].tripData)
  return userTrips&& (
    <View>
      <View style={{
        marginTop:20
      }}>
        <Image source={require('./../../assets/images/placeholder.png')}
            style={{
                width:'100%',
                height:240,
                objectFit:'cover',
                borderRadius:15
            }}/>
            <View>
                <Text>{userTrips[0]?.tripPlane?.location?.hotel}</Text>
                <Text style={{
                  fontFamily:'outfit',
                  fontSize:17
                }}>{moment(LatestTrip.startDate).format('DD MMM YYYY')}</Text>

                {/* <Text>🚌{LatestTrip.traveler.title}</Text> */}
            </View>
      </View>
    </View>
  )
}