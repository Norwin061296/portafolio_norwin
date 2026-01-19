import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Typography, Container, Button } from '@shared/components';
import { theme } from '@core/constants/theme';

const { width } = Dimensions.get('window');

export const HeroSection: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.loop(
        Animated.sequence([
          Animated.timing(glowAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(glowAnim, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
          }),
        ])
      ),
    ]).start();
  }, []);

  const glowOpacity = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.1, 0.3],
  });

  const handleContactPress = () => {
    if (typeof window !== 'undefined') {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsPress = () => {
    if (typeof window !== 'undefined') {
      const projectsSection = document.getElementById('projects');
      projectsSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={[theme.colors.secondary.background, theme.colors.secondary.main]}
        style={styles.background}
      />

      {/* Animated Glow Effects */}
      <Animated.View
        style={[
          styles.glow,
          styles.glowTop,
          {
            opacity: glowOpacity,
            transform: [{ scale: glowAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.2] }) }],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.glow,
          styles.glowBottom,
          {
            opacity: glowOpacity,
            transform: [{ scale: glowAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.3] }) }],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.glow,
          styles.glowCenter,
          {
            opacity: glowOpacity,
          },
        ]}
      />

      {/* Floating Particles */}
      <View style={styles.particles}>
        {[...Array(6)].map((_, i) => (
          <Animated.View
            key={i}
            style={[
              styles.particle,
              {
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
              },
            ]}
          />
        ))}
      </View>

      <Container style={styles.container}>
        <Animated.View
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <View style={styles.badgeContainer}>
            <LinearGradient
              colors={[theme.colors.overlay.glass, theme.colors.overlay.light]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.badge}
            >
              <Typography variant="caption" color="accent" weight="bold" style={styles.badgeText}>
                ✦ 5+ AÑOS DE EXPERIENCIA ✦
              </Typography>
            </LinearGradient>
          </View>

          <View style={styles.titleContainer}>
            <Typography variant="h1" align="center" style={styles.title} weight="light">
              Hola, soy
            </Typography>

            <View style={styles.nameContainer}>
              <LinearGradient
                colors={theme.colors.primary.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradientText}
              >
                <Typography variant="huge" align="center" weight="extrabold" style={styles.mainTitle}>
                  NORWIN
                </Typography>
              </LinearGradient>
            </View>

            <Typography variant="h2" align="center" style={styles.subtitleTitle} weight="semibold">
              Desarrollador <Typography variant="h2" color="accent" weight="bold">Full Stack</Typography>
            </Typography>
          </View>

          <Typography
            variant="body"
            color="secondary"
            align="center"
            style={styles.subtitle}
          >
            Especializado en desarrollo <Typography color="accent" weight="bold">mobile</Typography> con{' '}
            <Typography color="accent" weight="bold">Flutter</Typography> y{' '}
            <Typography color="accent" weight="bold">React Native</Typography>.
            <br />
            Experto en crear soluciones escalables y de alto rendimiento.
          </Typography>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Typography variant="h2" color="accent" weight="bold">5+</Typography>
              <Typography variant="caption" color="muted">Años Exp.</Typography>
            </View>
            <View style={styles.divider} />
            <View style={styles.statItem}>
              <Typography variant="h2" color="accent" weight="bold">50+</Typography>
              <Typography variant="caption" color="muted">Proyectos</Typography>
            </View>
            <View style={styles.divider} />
            <View style={styles.statItem}>
              <Typography variant="h2" color="accent" weight="bold">15+</Typography>
              <Typography variant="caption" color="muted">Tecnologías</Typography>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title="VER PROYECTOS"
              onPress={handleProjectsPress}
              variant="primary"
              size="large"
              style={styles.primaryButton}
            />
            <Button
              title="CONTACTAR"
              onPress={handleContactPress}
              variant="outlined"
              size="large"
              style={styles.secondaryButton}
            />
          </View>

          {/* Scroll Indicator */}
          <View style={styles.scrollIndicator}>
            <View style={styles.scrollDot} />
          </View>
        </Animated.View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    minHeight: 700,
    position: 'relative',
    overflow: 'hidden',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  glow: {
    position: 'absolute',
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.4,
    backgroundColor: theme.colors.primary.main,
    opacity: 0.05,
  },
  glowTop: {
    top: -width * 0.4,
    left: -width * 0.2,
  },
  glowBottom: {
    bottom: -width * 0.4,
    right: -width * 0.2,
  },
  glowCenter: {
    top: '50%',
    left: '50%',
    transform: [{ translateX: -width * 0.4 }, { translateY: -width * 0.4 }],
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: width * 0.3,
  },
  particles: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  particle: {
    position: 'absolute',
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.primary.main,
    opacity: 0.6,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  content: {
    alignItems: 'center',
    gap: theme.spacing.lg,
    paddingVertical: theme.spacing.xxxl * 2,
    width: '100%',
    maxWidth: 900,
  },
  badgeContainer: {
    marginBottom: theme.spacing.md,
  },
  badge: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    borderColor: theme.colors.border.accent,
    shadowColor: theme.colors.primary.main,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  badgeText: {
    letterSpacing: 2,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.md,
    width: '100%',
  },
  title: {
    color: theme.colors.text.secondary,
    letterSpacing: 3,
    marginBottom: theme.spacing.xs,
    fontSize: theme.typography.fontSizes.xxl,
  },
  nameContainer: {
    marginVertical: theme.spacing.md,
  },
  gradientText: {
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
  },
  mainTitle: {
    color: theme.colors.secondary.main,
    letterSpacing: -1,
    textShadowColor: 'rgba(212, 175, 55, 0.5)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 20,
    fontSize: theme.typography.fontSizes.massive,
  },
  subtitleTitle: {
    marginTop: theme.spacing.md,
    letterSpacing: 1,
  },
  subtitle: {
    maxWidth: 700,
    lineHeight: theme.typography.lineHeights.relaxed * 20,
    marginBottom: theme.spacing.xl,
    paddingHorizontal: theme.spacing.md,
    fontSize: theme.typography.fontSizes.lg,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.overlay.glass,
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing.xl,
    borderWidth: 1,
    borderColor: theme.colors.overlay.light,
    width: '100%',
    maxWidth: 600,
    marginBottom: theme.spacing.xl,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  divider: {
    width: 1,
    height: 50,
    backgroundColor: theme.colors.border.light,
    opacity: 0.5,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    width: '100%',
    maxWidth: 450,
    justifyContent: 'center',
  },
  primaryButton: {
    flex: 1,
    ...theme.shadows.glow,
  },
  secondaryButton: {
    flex: 1,
  },
  scrollIndicator: {
    marginTop: theme.spacing.xxxl,
    alignItems: 'center',
  },
  scrollDot: {
    width: 4,
    height: 40,
    backgroundColor: theme.colors.primary.main,
    borderRadius: 2,
    opacity: 0.6,
  },
});
