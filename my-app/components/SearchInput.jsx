import { View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React , { useState } from 'react'

import { icons } from '../constants'
import { router, usePathname } from 'expo-router'

const SearchInput = ({initialQuery , placeholdertext }) => {
  const pathname = usePathname()
  const [query, setQuery] = useState( initialQuery || '' );
  const [placeholder, setPlaceholder] = useState( placeholdertext );


  return (
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
        <TextInput 
            className="flex-1 mt-0.5 text-white font-pregular text-base"
            value={query}
            placeholder= { placeholder }
            placeholderTextColor="#CDCDE0"
            onChangeText={(e)=>setQuery(e)}
        />

        <TouchableOpacity
          onPress={()=>{
            if(!query) {
              return Alert.alert('Missing query' , 
                "Please input something to search resuls across database"
              )
            }

            if(pathname.startsWith('/search')) router.setParams({query})
            else router.push(`/search/${query}`)
          }}
        >
            <Image
                source={icons.search}
                className="w-5 h-5"
                resizeMode='contain'            
            />
        </TouchableOpacity>
      </View>

  )
}

export default SearchInput