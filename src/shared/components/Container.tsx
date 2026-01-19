import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { theme } from '@core/constants/theme';

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  centered?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  style,
  centered = false,
}) => {
  return (
    <View style={[styles.container, centered && styles.centered, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 1200,
    paddingHorizontal: theme.spacing.lg,
    alignSelf: 'center',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
