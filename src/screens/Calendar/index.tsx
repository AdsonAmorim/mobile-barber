import React from "react";
import { Text, View } from "react-native";

const CalendarScreen = () => {
  return (
    <View className="flex-1 bg-gray-950 m-0 p-0 box-border">
      <Text>Calendar</Text>

      <View className="mx-12 my-0 w-full">
        <Text>hello word</Text>
      </View>
    </View>
  );
};

CalendarScreen.navigationOptions = {
  title: "Calendar",
};

export default CalendarScreen;
