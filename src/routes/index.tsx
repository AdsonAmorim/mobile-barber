import { HomeScreen } from "../screens/Home";
import CalendarScreen from "../screens/Calendar";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppStackParamList } from "./type";

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

export const Routes = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home", headerShown: false }}
      />
      <Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
