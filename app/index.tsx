import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import P1 from '../components/guide/p1';
const index = () => {
  return (
    <SafeAreaView className="bg-blue-500 h-full">
      <View>
         <P1/>
      </View>
    </SafeAreaView>
  )
}

export default index