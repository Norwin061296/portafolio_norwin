import React from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';
import { theme } from '@core/constants/theme';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'label' | 'huge' | 'massive';
  color?: 'primary' | 'secondary' | 'accent' | 'muted';
  align?: 'left' | 'center' | 'right';
  weight?: keyof typeof theme.typography.fontWeights;
  style?: TextStyle;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color = 'primary',
  align = 'left',
  weight,
  style,
  children,
}) => {
  const variantStyles = {
    h1: styles.h1,
    h2: styles.h2,
    h3: styles.h3,
    body: styles.body,
    caption: styles.caption,
    label: styles.label,
    huge: styles.huge,
    massive: styles.massive,
  };

  const colorStyles = {
    primary: { color: theme.colors.text.primary },
    secondary: { color: theme.colors.text.secondary },
    accent: { color: theme.colors.text.accent },
    muted: { color: theme.colors.text.muted },
  };

  const weightStyle = weight
    ? { fontWeight: theme.typography.fontWeights[weight] }
    : {};

  return (
    <Text
      style={[
        styles.base,
        variantStyles[variant],
        colorStyles[color],
        { textAlign: align },
        weightStyle,
        style,
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    color: theme.colors.text.primary,
  },
  massive: {
    fontSize: theme.typography.fontSizes.massive,
    fontWeight: theme.typography.fontWeights.extrabold,
    lineHeight: theme.typography.fontSizes.massive * theme.typography.lineHeights.tight,
  },
  huge: {
    fontSize: theme.typography.fontSizes.huge,
    fontWeight: theme.typography.fontWeights.bold,
    lineHeight: theme.typography.fontSizes.huge * theme.typography.lineHeights.tight,
  },
  h1: {
    fontSize: theme.typography.fontSizes.xxxl,
    fontWeight: theme.typography.fontWeights.bold,
    lineHeight: theme.typography.fontSizes.xxxl * theme.typography.lineHeights.tight,
  },
  h2: {
    fontSize: theme.typography.fontSizes.xxl,
    fontWeight: theme.typography.fontWeights.semibold,
    lineHeight: theme.typography.fontSizes.xxl * theme.typography.lineHeights.tight,
  },
  h3: {
    fontSize: theme.typography.fontSizes.xl,
    fontWeight: theme.typography.fontWeights.medium,
    lineHeight: theme.typography.fontSizes.xl * theme.typography.lineHeights.normal,
  },
  body: {
    fontSize: theme.typography.fontSizes.lg,
    fontWeight: theme.typography.fontWeights.regular,
    lineHeight: theme.typography.fontSizes.lg * theme.typography.lineHeights.relaxed,
  },
  caption: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.regular,
    lineHeight: theme.typography.fontSizes.sm * theme.typography.lineHeights.normal,
  },
  label: {
    fontSize: theme.typography.fontSizes.md,
    fontWeight: theme.typography.fontWeights.medium,
    lineHeight: theme.typography.fontSizes.md * theme.typography.lineHeights.normal,
  },
});
