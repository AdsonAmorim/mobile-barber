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
    <View className="flex-1 bg-gray-950 m-0 p-0 box-border">
      <Text>Calendar</Text>
      <Header showBackButton />

      <View className="mx-12 my-2 w-full ">
        <Text className="text-white"> hello word {params.userId}</Text>
      </View>
    </View>
  );
};

CalendarScreen.navigationOptions = {
  title: "Calendar",
};

export default CalendarScreen;
