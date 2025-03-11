import { View, Text, Image } from 'react-native'
import React from 'react'

const P1 = () => {
  return (
    <View className='h-full flex flex-col justify-center items-center'>
      <Image
      source={require('../../assets/p1.png')}
      className='w-[300px] h-[300px]'
      />
      <Text>Consultation with a Doctor</Text>
      <Text>We help patients manage and schedule appoinments with the doctor</Text>
    </View>
  )
}

export default P1