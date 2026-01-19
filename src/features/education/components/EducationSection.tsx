import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Typography, Container, Card } from '@shared/components';
import { theme } from '@core/constants/theme';
import { portfolioData } from '@core/data/portfolioData';

type Education = typeof portfolioData.education[0];

interface EducationCardProps {
  education: Education;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
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
    if (education.document && typeof window !== 'undefined') {
      const fullPath = window.location.origin + education.document;
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
                  🎓
                </Typography>
              </LinearGradient>
            </View>

            <View style={styles.textContainer}>
              <Typography variant="h3" weight="bold" style={styles.degree}>
                {education.degree}
              </Typography>
              <Typography variant="body" color="accent" weight="semibold" style={styles.institution}>
                {education.institution}
              </Typography>
              <View style={styles.periodBadge}>
                <Typography variant="caption" color="accent" weight="bold">
                  {education.period}
                </Typography>
              </View>
              <Typography variant="body" color="secondary" style={styles.description}>
                {education.description}
              </Typography>
            </View>

            {education.document && (
              <View style={styles.badge}>
                <Typography variant="caption" color="accent" weight="bold">
                  Ver Título →
                </Typography>
              </View>
            )}
          </View>
        </Card>
      </TouchableOpacity>
    </Animated.View>
  );
};

export const EducationSection: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.section} id="education">
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
              FORMACIÓN ACADÉMICA
            </Typography>
          </View>

          <Typography variant="h2" weight="bold" align="center" style={styles.title}>
            Educación <Typography variant="h2" color="accent" weight="bold">Académica</Typography>
          </Typography>

          <Typography variant="body" color="secondary" align="center" style={styles.subtitle}>
            Formación académica y profesional que fundamenta mi carrera como ingeniero
          </Typography>
        </Animated.View>

        <View style={styles.educationGrid}>
          {portfolioData.education.map((education, index) => (
            <EducationCard
              key={education.id}
              education={education}
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
    backgroundColor: theme.colors.secondary.background,
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
  educationGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.xl,
    justifyContent: 'center',
  },
  cardWrapper: {
    flex: 1,
    minWidth: 350,
    maxWidth: 500,
  },
  card: {
    backgroundColor: theme.colors.secondary.surface,
    borderWidth: 1,
    borderColor: theme.colors.border.light,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
    position: 'relative',
    minHeight: 300,
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
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: theme.typography.fontSizes.massive,
  },
  textContainer: {
    alignItems: 'center',
    gap: theme.spacing.sm,
    width: '100%',
  },
  degree: {
    color: theme.colors.text.primary,
    fontSize: theme.typography.fontSizes.xxl,
    textAlign: 'center',
  },
  institution: {
    fontSize: theme.typography.fontSizes.lg,
    marginTop: theme.spacing.xs,
  },
  periodBadge: {
    marginTop: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.overlay.light,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.primary.main,
  },
  description: {
    fontSize: theme.typography.fontSizes.md,
    textAlign: 'center',
    lineHeight: 24,
    marginTop: theme.spacing.md,
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
