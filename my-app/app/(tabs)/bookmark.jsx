import { View, Text, FlatList, Image } from 'react-native'
import React , { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import SearchInput from '../../components/SearchInput'
import EmptyState from '../../components/EmptyState'
import VideoCard from '../../components/VideoCard'
import { getLikedPost } from '../../lib/appwrite'

import useAppwrite from '../../lib/useAppwrite'
import { useLocalSearchParams } from 'expo-router'
import { images } from '../../constants'
import { useGlobalContext } from '../../context/GlobalProvider'


const Bookmark = () => {
  const { user } = useGlobalContext()
  const { data: posts , refetch} = useAppwrite(() => getLikedPost(user.$id));

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data = {posts}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4">
            <Text className="font-psemibold text-2xl text-white">
              Saved Videos
            </Text>

            <View className="mt-6 mb-8">
              <SearchInput placeholdertext= "Search your saved videos " />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Liked Yet"
            subtitle="Like a video first for it to appear here"
            buttontitle="Like a video"
            buttonlinkedpage="/home"
          />
        )}
      />
    </SafeAreaView>
  )
}

export default Bookmark