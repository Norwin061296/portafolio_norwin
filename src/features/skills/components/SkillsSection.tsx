import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Typography, Container, Card } from '@shared/components';
import { theme } from '@core/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { portfolioData } from '@core/data/portfolioData';

type Skill = typeof portfolioData.skills.mobile[0];

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  icon: string;
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon, index }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        delay: index * 100,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        delay: index * 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, [index]);

  return (
    <Animated.View
      style={[
        { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
      ]}
    >
      <Card variant="elevated" style={styles.categoryCard}>
        <LinearGradient
          colors={[theme.colors.overlay.glass, 'transparent']}
          style={StyleSheet.absoluteFill}
        />

        <View style={styles.categoryHeader}>
          <View style={styles.iconContainer}>
            <Typography variant="h2" style={styles.icon}>{icon}</Typography>
          </View>
          <Typography variant="h3" weight="bold" style={styles.categoryTitle}>
            {title}
          </Typography>
        </View>

        <View style={styles.skillsGrid}>
          {skills.map((skill, skillIndex) => (
            <View key={skillIndex} style={styles.skillChip}>
              <LinearGradient
                colors={[theme.colors.secondary.light, theme.colors.secondary.surface]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.chipGradient}
              >
                <Typography variant="label" color="primary" weight="medium" style={styles.skillText}>
                  {skill.name}
                </Typography>
              </LinearGradient>
            </View>
          ))}
        </View>
      </Card>
    </Animated.View>
  );
};

export const SkillsSection: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.section}>
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
              TECNOLOGÍAS Y HERRAMIENTAS
            </Typography>
          </View>

          <Typography variant="h2" weight="bold" align="center" style={styles.title}>
            Habilidades <Typography variant="h2" color="accent" weight="bold">Técnicas</Typography>
          </Typography>

          <Typography variant="body" color="secondary" align="center" style={styles.subtitle}>
            Stack tecnológico completo para desarrollo móvil y backend
          </Typography>
        </Animated.View>

        <View style={styles.categoriesContainer}>
          <SkillCategory
            title="Desarrollo Mobile"
            skills={portfolioData.skills.mobile}
            icon="📱"
            index={0}
          />
          <SkillCategory
            title="Frontend"
            skills={portfolioData.skills.frontend}
            icon="🎨"
            index={1}
          />
          <SkillCategory
            title="Backend"
            skills={portfolioData.skills.backend}
            icon="⚙️"
            index={2}
          />
          <SkillCategory
            title="Bases de Datos"
            skills={portfolioData.skills.database}
            icon="🗄️"
            index={3}
          />
        </View>

        <Animated.View
          style={[
            styles.experienceCard,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          <LinearGradient
            colors={theme.colors.primary.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.experienceGradient}
          >
            <View style={styles.experienceContent}>
              <Typography variant="huge" weight="bold" style={styles.experienceText}>
                5+
              </Typography>
              <Typography variant="h3" weight="bold" style={styles.experienceText}>
                años
              </Typography>
            </View>
            <Typography variant="body" style={styles.experienceSubtext}>
              de experiencia en desarrollo Full Stack
            </Typography>
          </LinearGradient>
        </Animated.View>
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
  categoriesContainer: {
    gap: theme.spacing.xl,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  categoryCard: {
    marginBottom: theme.spacing.md,
    backgroundColor: theme.colors.secondary.surface,
    borderWidth: 1,
    borderColor: theme.colors.border.light,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    minWidth: 280,
    flex: 1,
    maxWidth: 400,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.overlay.light,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: theme.colors.border.accent,
  },
  icon: {
    fontSize: theme.typography.fontSizes.xxl,
  },
  categoryTitle: {
    color: theme.colors.text.primary,
    fontSize: theme.typography.fontSizes.xl,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  skillChip: {
    borderRadius: theme.borderRadius.full,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.border.main,
  },
  chipGradient: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  skillText: {
    fontSize: theme.typography.fontSizes.sm,
  },
  experienceCard: {
    marginTop: theme.spacing.xxxl * 1.5,
    borderRadius: theme.borderRadius.xl,
    overflow: 'hidden',
    ...theme.shadows.large,
  },
  experienceGradient: {
    paddingVertical: theme.spacing.xxxl,
    paddingHorizontal: theme.spacing.xxxl,
    alignItems: 'center',
  },
  experienceContent: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  experienceText: {
    color: theme.colors.secondary.main,
    fontSize: theme.typography.fontSizes.massive,
  },
  experienceSubtext: {
    color: theme.colors.secondary.main,
    fontSize: theme.typography.fontSizes.lg,
    textAlign: 'center',
  },
});
