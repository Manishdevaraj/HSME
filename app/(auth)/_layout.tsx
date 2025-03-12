import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Authlayout = () => {
  return (

    <Stack>
       <Stack.Screen name="Signin" options={{ headerShown: false }} />
       <Stack.Screen name="Signup" options={{ headerShown: false }} />
     </Stack>
  )
}

export default Authlayout