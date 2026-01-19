import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Linking, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Typography, Container, Card } from '@shared/components';
import { theme } from '@core/constants/theme';
import { portfolioData } from '@core/data/portfolioData';

type Certification = typeof portfolioData.certifications[0];

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification, index }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        delay: index * 150,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        delay: index * 150,
        useNativeDriver: true,
      }),
    ]).start();
  }, [index]);

  const handlePress = () => {
    if (certification.document && typeof window !== 'undefined') {
      // En web, abrir el PDF en una nueva pestaña
      const fullPath = window.location.origin + certification.document;
      window.open(fullPath, '_blank');
    }
  };

  return (
    <Animated.View
      style={[
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.9}
        style={styles.cardWrapper}
      >
        <Card variant="elevated" style={styles.card}>
          <LinearGradient
            colors={[theme.colors.overlay.glass, 'transparent']}
            style={StyleSheet.absoluteFill}
          />

          <View style={styles.cardContent}>
            <View style={styles.iconContainer}>
              <LinearGradient
                colors={theme.colors.primary.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.iconGradient}
              >
                <Typography variant="h2" style={styles.icon}>
                  {certification.icon || '🎓'}
                </Typography>
              </LinearGradient>
            </View>

            <View style={styles.textContainer}>
              <Typography variant="h3" weight="bold" style={styles.cardTitle}>
                {certification.title}
              </Typography>
              <Typography variant="body" color="accent" weight="semibold" style={styles.issuer}>
                {certification.issuer}
              </Typography>
              <Typography variant="caption" color="muted" style={styles.date}>
                {certification.date}
              </Typography>
              <Typography variant="body" color="secondary" style={styles.description}>
                {certification.description}
              </Typography>
            </View>

            <View style={styles.badge}>
              <Typography variant="caption" color="accent" weight="bold">
                Ver Certificado →
              </Typography>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </Animated.View>
  );
};

export const CertificationsSection: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.section} id="certifications">
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
              CERTIFICACIONES
            </Typography>
          </View>

          <Typography variant="h2" weight="bold" align="center" style={styles.title}>
            Certificaciones <Typography variant="h2" color="accent" weight="bold">Profesionales</Typography>
          </Typography>

          <Typography variant="body" color="secondary" align="center" style={styles.subtitle}>
            Credenciales y certificaciones que validan mi experiencia y conocimientos técnicos
          </Typography>
        </Animated.View>

        <View style={styles.certificationsGrid}>
          {portfolioData.certifications.map((certification, index) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              index={index}
            />
          ))}
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: theme.colors.secondary.main,
    paddingVertical: theme.spacing.xxxl * 1.5,
    position: 'relative',
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
  certificationsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.xl,
    justifyContent: 'center',
  },
  cardWrapper: {
    flex: 1,
    minWidth: 300,
    maxWidth: 400,
  },
  card: {
    backgroundColor: theme.colors.secondary.surface,
    borderWidth: 1,
    borderColor: theme.colors.border.light,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
    position: 'relative',
    minHeight: 280,
  },
  cardContent: {
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  iconContainer: {
    marginBottom: theme.spacing.sm,
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
  textContainer: {
    alignItems: 'center',
    gap: theme.spacing.xs,
    width: '100%',
  },
  cardTitle: {
    color: theme.colors.text.primary,
    fontSize: theme.typography.fontSizes.xl,
    textAlign: 'center',
  },
  issuer: {
    fontSize: theme.typography.fontSizes.md,
    marginTop: theme.spacing.xs,
  },
  date: {
    fontSize: theme.typography.fontSizes.sm,
    marginBottom: theme.spacing.sm,
  },
  description: {
    fontSize: theme.typography.fontSizes.sm,
    textAlign: 'center',
    lineHeight: 20,
    marginTop: theme.spacing.sm,
  },
  badge: {
    marginTop: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.overlay.light,
    borderWidth: 1,
    borderColor: theme.colors.border.accent,
  },
});
