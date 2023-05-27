import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../routes/type";

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  "Home"
>;

export type HomeScreenRouteProp = RouteProp<AppStackParamList, "Home">;
