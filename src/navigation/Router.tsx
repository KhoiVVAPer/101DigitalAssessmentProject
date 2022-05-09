import React, { createRef } from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  authStackScreens,
  MainStackParamList,
  AuthStackParamList,
  InvoiceStackParamList,
  invoiceStackScreens,
} from "screens";
import { RouteName } from "@constants/routes";

export const Stack = createStackNavigator();

export default function Router() {
  const navigationRef = createRef<NavigationContainerRef<MainStackParamList>>();

  const AuthStack = () => {
    const StackAuth = createStackNavigator<AuthStackParamList>();
    return (
      <StackAuth.Navigator>
        {Object.entries({
          ...authStackScreens,
        }).map(([name, props]) => {
          return (
            <StackAuth.Screen
              key={name}
              name={name as keyof AuthStackParamList}
              {...props}
            />
          );
        })}
      </StackAuth.Navigator>
    );
  };

  const MainStack = () => {
    const StackMain = createStackNavigator<InvoiceStackParamList>();
    return (
      <StackMain.Navigator>
        {Object.entries({
          ...invoiceStackScreens,
        }).map(([name, props]) => {
          return (
            <StackMain.Screen
              key={name}
              name={name as keyof InvoiceStackParamList}
              {...props}
            />
          );
        })}
      </StackMain.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}
        >
          <Stack.Screen name={RouteName.AuthStack} component={AuthStack} />
          <Stack.Screen name={RouteName.MainStack} component={MainStack} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
