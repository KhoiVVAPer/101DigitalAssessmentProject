import React, { FC } from 'react';
import { BLACK, SECONDARY } from '@constants/colors';
import { ActivityIndicator, StyleSheet, View, ViewStyle } from 'react-native';

interface LoadingSpinnerProps {
  containerStyle?: ViewStyle;
  sizeIndicator?: number | 'small' | 'large';
  colorIndicator?: string;
}

export const RNLoadingSpinner: FC<LoadingSpinnerProps> = React.memo(
  ({
    containerStyle,
    sizeIndicator = 'large',
    colorIndicator = SECONDARY,
  }): JSX.Element => {
    return (
      <View style={[styles.container, containerStyle]}>
        <ActivityIndicator size={sizeIndicator} color={colorIndicator} />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BLACK,
    opacity: 0.5,
    zIndex: 999,
  },
});
