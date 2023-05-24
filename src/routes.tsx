import HomeScreen from "./screens/Home";
import CalendarScreen from "./screens/Calendar";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Welcome to the mato" }}
      />
      <Screen name="Calendar" component={CalendarScreen} />
    </Navigator>
  );
};
