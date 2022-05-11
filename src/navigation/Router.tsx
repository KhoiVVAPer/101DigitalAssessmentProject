import React, { createRef, useEffect, useState } from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  authStackScreens,
  MainStackParamList,
  AuthStackParamList,
  InvoiceStackParamList,
  invoiceStackScreens,
} from "screens";
import { RouteName } from "@constants/routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { selectIsLoggedState } from "@redux/selectors/auth";

export const Stack = createStackNavigator();

export default function Router() {
  const navigationRef = createRef<NavigationContainerRef<MainStackParamList>>();
  const isLogged = useSelector(selectIsLoggedState);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    setIsAuthenticated(isLogged);
  }, [isLogged]);

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

  console.log("isAuthenticated", isAuthenticated);

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}
        >
          {!isAuthenticated ? (
            <Stack.Screen name={RouteName.AuthStack} component={AuthStack} />
          ) : (
            <Stack.Screen name={RouteName.MainStack} component={MainStack} />
          )}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
