import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

interface BarberContainerProps {
  id: string;
  name: string;
  calendar: string;
  avatar_url: string;
  hour: string;
}

const BarberContainer = ({
  avatar_url,
  calendar,
  hour,
  name,
  id,
}: BarberContainerProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Calendar", { userId: id });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View className="bg-gray-800 border text-neutral-50 h-[112] rounded-md mt-5 flex items-center flex-row justify-around">
        <View className="w-[72] h-[72] rounded-full">
          <Image
            source={{
              uri: avatar_url,
            }}
            className="w-full h-full rounded-full"
          />
        </View>
        <View className="flex flex-col w-6/12 p-0 m-0 gap-y-0">
          <Text className="text-lg font-bold text-neutral-50">{name}</Text>

          <View className="flex flex-row items-center justify-start gap-x-2">
            <Icon name="calendar" color="#FFF" size={20} />
            <Text className="font-medium text-neutral-50">{calendar}</Text>
          </View>

          <View className="flex flex-row items-center justify-start gap-x-2">
            <Icon name="clockcircleo" color="#FFF" size={20} />
            <Text className="font-medium text-neutral-50">{hour}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { BarberContainer };
