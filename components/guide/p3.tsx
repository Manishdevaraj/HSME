import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { router } from 'expo-router';

const P3 = () => {
  return (
    <View className="h-full flex flex-col justify-center items-center px-6">
      <Image source={require('../../assets/p3.png')} className="w-72 h-72 rounded-xl shadow-lg" resizeMode="contain" />

      <View className="mt-6 text-center">
        <Text className="text-white text-3xl font-bold text-center">Keep EHR files in one place</Text>
        <Text className="text-gray-300 text-lg text-center mt-2 px-4">We help patients manage and schedule appointments with the doctor.</Text>
      </View>

      {/* Back Button */}
      <TouchableOpacity className="mt-6 bg-pink-500 px-6 py-3 rounded-full shadow-md active:bg-gray-700" onPress={()=>router.push('/Sign-in')}>
        <Text className='text-2xl text-white'>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default P3;
