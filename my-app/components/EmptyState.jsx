import { View, Text, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { images } from '../constants'
import CustomButton from './CustomButton'

const EmptyState = ({title,subtitle,buttontitle,buttonlinkedpage}) => {
  return (
    <View className="justify-center items-center px-4">
        <Image
            source={images.empty} 
            className="w-[270px] h-[215px]"
            resizeMode='contain'
        />
        <Text className="font-psemibold text-center text-xl text-white mt-2">
            {title}
        </Text>
        <Text className="font-pmedium text-sm text-gray-100">
            {subtitle}
        </Text>
       
       <CustomButton
        title={buttontitle}
        handlePress={() => router.push(buttonlinkedpage)}
        containerStyles="w-full my-5"
       />
    </View>
  )
}

export default EmptyState