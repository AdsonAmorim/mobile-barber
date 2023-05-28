import { useRoute, ParamListBase, RouteProp } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { Header } from "../../components/Header";

interface IRoute extends RouteProp<ParamListBase> {
  readonly params: {
    userId: string;
  };
}

const CalendarScreen = ({}) => {
  const route = useRoute<IRoute>();

  const { params } = route;

  return (
    <View className="box-border flex-1 p-0 m-0 bg-gray-950">
      <Text>Calendar</Text>
      <Header showBackButton />

      <View className="w-full mx-12 my-2 ">
        <Text className="text-white"> hello word {params.userId}</Text>
      </View>
    </View>
  );
};

CalendarScreen.navigationOptions = {
  title: "Calendar",
};

export default CalendarScreen;
