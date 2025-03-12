import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { router } from 'expo-router';

const SignIn = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      
      {/* Logo */}
      {/* <Image source={require('../../assets/logo.png')} className="w-20 h-20 mb-6" /> */}

      {/* Title */}
      <Text className="text-pink-600 text-3xl font-bold mb-6">Sign In</Text>

      {/* Email Input */}
      <TextInput
        placeholder="Email"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg mb-4"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg mb-4"
        secureTextEntry
      />

      {/* Sign In Button */}
      <TouchableOpacity className="w-full bg-pink-500 py-3 rounded-lg flex items-center mb-4 active:bg-pink-700">
        <Text className="text-white text-lg font-semibold">Sign In</Text>
      </TouchableOpacity>

      {/* Google Sign In */}
      <TouchableOpacity className="w-full bg-gray-100 py-3 rounded-lg flex flex-row items-center justify-center space-x-3 border border-gray-300">
        <Icon name="google" size={20} color="red" />
        <Text className="text-gray-700 text-lg font-semibold">Sign in with Google</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <Text className="text-gray-600 mt-4">
        Don't have an account? 
        <Text className="text-pink-600 font-bold" onPress={()=>router.push('/Sign-up')}> Sign Up</Text>
      </Text>
    </View>
  );
};

export default SignIn;
