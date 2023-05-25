import React from "react";
import { View } from "react-native";
import { BarberContainer } from "../../components/BarberContainer";
import { Header } from "../../components/Header";

const mockBarbers = [
  {
    id: "1",
    avatar_url:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    name: "Sêneca",
    calendar: "Segunda à sábado",
    hour: "8h às 18h",
  },
  {
    id: "2",
    avatar_url:
      "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    name: "Marco Aurélio",
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
