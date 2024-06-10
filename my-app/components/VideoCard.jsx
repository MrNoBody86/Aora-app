import { useState } from "react";
import { ResizeMode, Video } from "expo-av";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const VideoCard = ({ title, creator, avatar, thumbnail, video }) => {
  const [play, setPlay] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false);

  

  return (
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 items-start relative z-10">
        <View className="flex justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>

          <View className="flex justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="font-psemibold text-sm text-white"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-pregular"
              numberOfLines={1}
            >
              {creator}
            </Text>
          </View>
        </View>

        {menuStatus ? (
          <View className="first-letter:absolute top-0 right-0">
            <TouchableOpacity 
              className="pt-2 ml-14"
              onPress={() => setMenuStatus(false)}
            >
              <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
            </TouchableOpacity>

            <View className="w-20 h-20 bg-black-100 rounded-2xl border-1 ">
              <TouchableOpacity className="w-[100%] h-10 pt-2 items-center justify-center flex flex-row space-x-1">
                <Image
                  source={icons.bookmark}
                  resizeMode="contain"
                  className="w-3 h-3"
                />
                <Text className="text-sm text-white ">Save</Text>
              </TouchableOpacity>

              <TouchableOpacity className="w-[100%] h-10 pb-2 items-center justify-center flex flex-row space-x-1">
                <Image
                  source={icons.delete}
                  resizeMode="contain"
                  className="w-3 h-3"
                />
                <Text className="text-sm text-white ">Delete</Text>
              </TouchableOpacity>
            </View>
          </View>  

        ) : (
              <TouchableOpacity 
                className="pt-2 mr-1"
                onPress={() => setMenuStatus(true)}
              >
                <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
              </TouchableOpacity>
        )}

        
      </View>

      {play ? (
        <Video
          source={{ uri: video }}
          className="w-full h-60 rounded-xl mt-3"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center z-0 "
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />

          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;