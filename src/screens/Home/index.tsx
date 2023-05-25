import React from "react";
import { View } from "react-native";
import { BarberContainer } from "../../components/BarberContainer";
import { Header } from "../../components/Header";

const mockBarbers = [
  {
    id: "1",
    avatar_url: "https://avatars.githubusercontent.com/u/65864485?v=4",
    name: "Adson Amorim",
    calendar: "Segunda à sábado",
    hour: "8h às 18h",
  },
  {
    id: "2",
    avatar_url: "https://avatars.githubusercontent.com/u/65864485?v=4",
    name: "Adson Amorim",
    calendar: "Segunda à sábado",
    hour: "8h às 18h",
  },
];

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-gray-950 m-0 p-0 box-border  ">
      <Header showBackButton={false} />
      <View className="w-full max-w-90 my-0 mx-auto border mt-2 ">
        {mockBarbers.map((mockBarber) => (
          <BarberContainer {...mockBarber} key={mockBarber.id} />
        ))}
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: "Home",
};

export { HomeScreen };
