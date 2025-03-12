import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import P1 from '../components/guide/p1';
import P2 from '@/components/guide/p2';
import P3 from '@/components/guide/p3';
const index = () => {

  const [currentPage, setCurrentPage] = useState(1);

  // Function to navigate pages
  const nextPage = () => {
    setCurrentPage((prev) => (prev < 3 ? prev + 1 : prev)); // Move forward, but not beyond P3
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev)); // Move backward, but not before P1
  };
  return (
    <SafeAreaView className="bg-blue-500 h-full flex justify-center items-center">
      <View className="w-full h-full flex justify-center items-center">
        {currentPage === 1 && <P1 nextPage={nextPage} />}
        {currentPage === 2 && <P2 nextPage={nextPage} prevPage={prevPage} />}
        {currentPage === 3 && <P3 prevPage={prevPage} />}
      </View>
    </SafeAreaView>
  )
}

export default index