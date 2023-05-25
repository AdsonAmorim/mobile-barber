import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";

interface HeaderProps {
  showBackButton: boolean;
}

interface IRoute extends RouteProp<ParamListBase> {
  readonly name: "Calendar" | "Home";
}

const mockHeaderContentByRouteName = {
  Home: (
    <View className="max-w-[150]">
      <Text className="text-white text-xl font-semibold">
        Bem vindo, <Text className="text-green-500 "> {"Adson Amorim"}</Text>
      </Text>
    </View>
  ),
  Calendar: (
    <Text className="text-white text-xl font-semibold">Agendamento</Text>
  ),
};

export const Header = ({ showBackButton }: HeaderProps) => {
  const route = useRoute<IRoute>();
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View className="h-[152] w-full  bg-gray-950 mt-[-16] flex items-end justify-center flex-row border-b-2 border-white">
      <View className="h-3/4 w-full max-w-90  flex items-center justify-between flex-row  ">
        {showBackButton && (
          <Icon name="arrowleft" size={32} onPress={handlePress} color="#FFF" />
        )}

        {mockHeaderContentByRouteName[route.name]}

        <View className="w-[56] h-[56] rounded-full">
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/65864485?v=4",
            }}
            className="w-full h-full rounded-full"
          />
        </View>
      </View>
    </View>
  );
};
