import LoginScreen from "./Login/Login.container";
import { StackNavigationOptions } from "@react-navigation/stack";
import DashboardScreen from "./Dashboard/Dashboard.container";

export const options: StackNavigationOptions = {
  headerTitleAlign: 'center'
};

// ========= MAIN STACK
export type MainStackParamList = {
  Login: undefined;
  Dashboard: undefined;
};

export const mainStackScreens = {
  Login: { component: LoginScreen, options },
  Dashboard: { component: DashboardScreen, options },
};
