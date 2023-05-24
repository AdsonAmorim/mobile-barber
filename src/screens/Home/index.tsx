import React from "react";
import { Text, View } from "react-native";
import { BarberContainer } from "../../components/BarberContainer";

const mockBarbers = [
  {
    avatar_url: "https://avatars.githubusercontent.com/u/65864485?v=4",
    name: "Adson Amorim",
    calendar: "Segunda à sábado",
    hour: "8h às 18h",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-gray-950 m-0 p-0 box-border">
      <Text>Home</Text>

      <View className="mx-12 my-0 w-full">
        {mockBarbers.map((mockBarber) => (
          <BarberContainer
            {...mockBarber}
            navigation={navigation}
            key={mockBarber.name}
          />
        ))}
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: "Home",
};

export default HomeScreen;
