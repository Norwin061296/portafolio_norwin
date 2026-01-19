import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { theme } from '@core/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';

interface CardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'outlined' | 'gradient';
  style?: ViewStyle;
  padding?: keyof typeof theme.spacing;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  style,
  padding = 'lg',
}) => {
  const paddingValue = theme.spacing[padding];

  if (variant === 'gradient') {
    return (
      <LinearGradient
        colors={[theme.colors.secondary.light, theme.colors.secondary.background]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.card, { padding: paddingValue }, style]}
      >
        <View style={styles.gradientBorder}>{children}</View>
      </LinearGradient>
    );
  }

  const variantStyles = {
    elevated: styles.elevated,
    outlined: styles.outlined,
    gradient: {},
  };

  return (
    <View
      style={[
        styles.card,
        variantStyles[variant],
        { padding: paddingValue },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
  },
  elevated: {
    backgroundColor: theme.colors.secondary.light,
    ...theme.shadows.medium,
  },
  outlined: {
    backgroundColor: theme.colors.secondary.background,
    borderWidth: 1,
    borderColor: theme.colors.border.main,
  },
  gradientBorder: {
    borderWidth: 1,
    borderColor: theme.colors.primary.dark,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.sm,
  },
});
