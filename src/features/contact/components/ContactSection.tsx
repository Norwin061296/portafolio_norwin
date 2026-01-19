import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Linking, Animated } from 'react-native';
import { Typography, Container, Card } from '@shared/components';
import { theme } from '@core/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { portfolioData } from '@core/data/portfolioData';

type ContactMethod = typeof portfolioData.contact[0];

interface ContactCardProps {
  contact: ContactMethod;
  index: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, index }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        delay: index * 100,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        delay: index * 100,
        useNativeDriver: true,
        tension: 50,
        friction: 7,
      }),
    ]).start();
  }, [index]);

  const handlePress = () => {
    if (contact.link) {
      Linking.openURL(contact.link);
    }
  };

  return (
    <Animated.View
      style={[
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.8}
        style={styles.contactCard}
      >
        <Card variant="elevated" style={styles.card}>
          <LinearGradient
            colors={[theme.colors.overlay.glass, 'transparent']}
            style={StyleSheet.absoluteFill}
          />

          <View style={styles.iconContainer}>
            <LinearGradient
              colors={theme.colors.primary.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.iconGradient}
            >
              <Typography variant="h2" style={styles.icon}>{contact.icon}</Typography>
            </LinearGradient>
          </View>

          <Typography variant="label" color="secondary" style={styles.label} weight="semibold">
            {contact.label}
          </Typography>

          <Typography variant="body" color="accent" weight="medium" style={styles.value}>
            {contact.value}
          </Typography>

          <View style={styles.hoverIndicator} />
        </Card>
      </TouchableOpacity>
    </Animated.View>
  );
};

export const ContactSection: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.section} id="contact">
      <LinearGradient
        colors={[theme.colors.secondary.main, theme.colors.secondary.background]}
        style={styles.gradient}
      >
        <Container>
          <Animated.View
            style={[
              styles.header,
              {
                opacity: fadeAnim,
              },
            ]}
          >
            <View style={styles.sectionBadge}>
              <Typography variant="caption" color="accent" weight="bold">
                CONECTEMOS
              </Typography>
            </View>

            <Typography variant="h2" weight="bold" align="center" style={styles.title}>
              <Typography variant="h2" color="accent" weight="bold">Contacto</Typography>
            </Typography>

            <Typography variant="body" color="secondary" align="center" style={styles.subtitle}>
              ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte
            </Typography>
          </Animated.View>

          <View style={styles.contactGrid}>
            {portfolioData.contact.map((contact, index) => (
              <ContactCard key={contact.id} contact={contact} index={index} />
            ))}
          </View>

          <Animated.View
            style={[
              styles.ctaCard,
              {
                opacity: fadeAnim,
              },
            ]}
          >
            <Card variant="gradient" style={styles.ctaCardInner}>
              <LinearGradient
                colors={[theme.colors.overlay.glass, theme.colors.overlay.light]}
                style={styles.ctaGradient}
              >
                <Typography variant="h3" weight="bold" align="center" style={styles.ctaTitle}>
                  ¿Listo para comenzar?
                </Typography>
                <Typography
                  variant="body"
                  color="secondary"
                  align="center"
                  style={styles.ctaSubtitle}
                >
                  Estoy disponible para proyectos freelance y oportunidades de colaboración
                </Typography>
                <View style={styles.availabilityBadge}>
                  <View style={styles.statusDot} />
                  <Typography variant="label" color="accent" weight="semibold">
                    Disponible para nuevos proyectos
                  </Typography>
                </View>
              </LinearGradient>
            </Card>
          </Animated.View>

          <Animated.View
            style={[
              styles.footer,
              {
                opacity: fadeAnim,
              },
            ]}
          >
            <Typography variant="caption" color="muted" align="center" style={styles.footerText}>
              © 2024 Norwin - Desarrollador Full Stack
            </Typography>
            <Typography
              variant="caption"
              color="muted"
              align="center"
              style={styles.footerText}
            >
              Construido con React Native y mucho ☕
            </Typography>
          </Animated.View>
        </Container>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: theme.colors.secondary.main,
    position: 'relative',
  },
  gradient: {
    paddingVertical: theme.spacing.xxxl * 1.5,
  },
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing.xxxl * 1.5,
    gap: theme.spacing.md,
  },
  sectionBadge: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    borderColor: theme.colors.border.accent,
    backgroundColor: theme.colors.overlay.light,
    shadowColor: theme.colors.primary.main,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    marginTop: theme.spacing.xs,
    letterSpacing: -0.5,
    fontSize: theme.typography.fontSizes.xxxl,
  },
  subtitle: {
    maxWidth: 700,
    lineHeight: theme.typography.lineHeights.relaxed * 20,
    fontSize: theme.typography.fontSizes.lg,
  },
  contactGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.xl,
    justifyContent: 'center',
    marginBottom: theme.spacing.xxxl * 1.5,
  },
  contactCard: {
    width: '45%',
    minWidth: 280,
    maxWidth: 320,
  },
  card: {
    alignItems: 'center',
    minHeight: 200,
    justifyContent: 'center',
    backgroundColor: theme.colors.secondary.surface,
    borderWidth: 1,
    borderColor: theme.colors.border.light,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    position: 'relative',
    overflow: 'hidden',
  },
  iconContainer: {
    marginBottom: theme.spacing.lg,
    borderRadius: theme.borderRadius.full,
    overflow: 'hidden',
  },
  iconGradient: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: theme.typography.fontSizes.xxxl,
  },
  label: {
    marginBottom: theme.spacing.xs,
    fontSize: theme.typography.fontSizes.sm,
    letterSpacing: 0.5,
  },
  value: {
    fontSize: theme.typography.fontSizes.md,
    textAlign: 'center',
  },
  hoverIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: theme.colors.primary.main,
    transform: [{ scaleX: 0 }],
  },
  ctaCard: {
    marginBottom: theme.spacing.xxxl,
  },
  ctaCardInner: {
    backgroundColor: theme.colors.secondary.surface,
    borderWidth: 1,
    borderColor: theme.colors.border.light,
    borderRadius: theme.borderRadius.xl,
  },
  ctaGradient: {
    padding: theme.spacing.xxxl,
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  ctaTitle: {
    fontSize: theme.typography.fontSizes.xxl,
  },
  ctaSubtitle: {
    maxWidth: 500,
    fontSize: theme.typography.fontSizes.md,
    lineHeight: 26,
  },
  availabilityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    backgroundColor: theme.colors.overlay.light,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.full,
    marginTop: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border.accent,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.status.success,
    ...theme.shadows.glow,
  },
  footer: {
    paddingTop: theme.spacing.xxl,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border.main,
    gap: theme.spacing.xs,
  },
  footerText: {
    fontSize: theme.typography.fontSizes.xs,
  },
});
