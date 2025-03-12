import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

const P1 = ({ nextPage }) => {
  return (
    <View className="h-full flex flex-col justify-center items-center px-6">
      <Image source={require('../../assets/p1.png')} className="w-72 h-72 rounded-xl shadow-lg" resizeMode="contain" />
      
      <View className="mt-6 text-center">
        <Text className="text-white text-3xl font-bold text-center">Consultation with a Doctor</Text>
        <Text className="text-gray-300 text-lg text-center mt-2 px-4">We help patients manage and schedule appointments with the doctor.</Text>
      </View>

      {/* Next Button */}
      <TouchableOpacity onPress={nextPage} className="mt-6 bg-pink-600 px-6 py-3 rounded-full shadow-md active:bg-blue-600">
        <Icon name="chevron-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default P1;
