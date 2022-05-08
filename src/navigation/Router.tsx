import React, {createRef} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {mainStackScreens, MainStackParamList} from 'screens';

export const Stack = createStackNavigator<MainStackParamList>();

type RootStackParamList = {
  dashboard: undefined;
};

export default function Router() {
  const navigationRef = createRef<NavigationContainerRef>();

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <Stack.Navigator>
          {Object.entries({
            ...mainStackScreens,
          }).map(([name, props]) => {
            return (
              <Stack.Screen
                key={name}
                name={name as keyof MainStackParamList}
                {...props}
              />
            );
          })}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
