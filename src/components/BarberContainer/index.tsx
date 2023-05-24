import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

import Icon from "react-native-vector-icons/AntDesign";

interface BarberContainerProps {
  name: string;
  calendar: string;
  avatar_url: string;
  hour: string;
  navigation: any;
}

const BarberContainer = ({
  avatar_url,
  calendar,
  hour,
  name,
  navigation,
}: BarberContainerProps) => {
  const handlePress = () => {
    navigation.navigate("Calendar");
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View className="bg-gray-800 text-neutral-50 w-full  max-w-90 h-[112] rounded-md flex flex-row items-center gap-x-6">
        <View className="w-[72] h-[72]  rounded-full">
          <Image
            source={{
              uri: avatar_url,
            }}
            className="w-full h-full rounded-full"
          />
        </View>
        <View className="w-6/12 flex flex-col gap-y-1 m-0  p-0">
          <Text className="text-neutral-50 font-bold text-lg">{name}</Text>

          <View className="flex items-center justify-start flex-row gap-x-2">
            <Icon name="calendar" color="#FFF" size="20" />
            <Text className="text-neutral-50 font-medium">{calendar}</Text>
          </View>

          <View className="flex items-center justify-start flex-row gap-x-2">
            <Icon name="clockcircleo" color="#FFF" size="20" />
            <Text className="text-neutral-50 font-medium">{hour}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { BarberContainer };
