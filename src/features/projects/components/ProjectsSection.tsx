import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Typography, Container, Card, Button } from '@shared/components';
import { theme } from '@core/constants/theme';
import { portfolioData } from '@core/data/portfolioData';

type Project = typeof portfolioData.projects[0];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

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

  return (
    <Animated.View
      style={[
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <Card variant="elevated" style={styles.projectCard}>
        <LinearGradient
          colors={[theme.colors.overlay.glass, 'transparent']}
          style={StyleSheet.absoluteFill}
        />

        <View style={styles.cardHeader}>
          <View style={styles.categoryBadge}>
            <Typography variant="caption" color="accent" weight="bold" style={styles.categoryText}>
              {project.category.toUpperCase()}
            </Typography>
          </View>
          <View style={styles.cardIcon}>
            <LinearGradient
              colors={theme.colors.primary.gradient}
              style={styles.iconGradient}
            >
              <Typography variant="h3" color="primary" style={styles.iconText}>✦</Typography>
            </LinearGradient>
          </View>
        </View>

        <Typography variant="h3" weight="bold" style={styles.projectTitle}>
          {project.title}
        </Typography>

        <Typography variant="body" color="secondary" style={styles.projectDescription}>
          {project.description}
        </Typography>

        <View style={styles.divider} />

        <View style={styles.techStack}>
          <Typography variant="caption" color="muted" weight="bold" style={styles.techTitle}>
            TECNOLOGÍAS UTILIZADAS
          </Typography>
          <View style={styles.techTags}>
            {project.technologies.map((tech, techIndex) => (
              <View key={techIndex} style={styles.techTag}>
                <LinearGradient
                  colors={[theme.colors.secondary.light, theme.colors.secondary.surface]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.tagGradient}
                >
                  <Typography variant="caption" color="primary" weight="medium">
                    {tech}
                  </Typography>
                </LinearGradient>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.cardFooter}>
          <View style={styles.accentLine} />
        </View>
      </Card>
    </Animated.View>
  );
};

export const ProjectsSection: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleViewAllPress = () => {
    console.log('View all projects pressed');
  };

  return (
    <View style={styles.section} id="projects">
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
              PORTAFOLIO
            </Typography>
          </View>

          <Typography variant="h2" weight="bold" align="center" style={styles.title}>
            Proyectos <Typography variant="h2" color="accent" weight="bold">Destacados</Typography>
          </Typography>

          <Typography variant="body" color="secondary" align="center" style={styles.subtitle}>
            Una selección de mis trabajos más recientes, demostrando capacidades en desarrollo móvil y backend.
          </Typography>
        </Animated.View>

        <View style={styles.projectsGrid}>
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </View>

        <Animated.View
          style={[
            styles.viewAllContainer,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          <Button
            title="VER TODOS LOS PROYECTOS"
            onPress={handleViewAllPress}
            variant="outlined"
            size="large"
            style={styles.viewAllButton}
          />
        </Animated.View>
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
  projectsGrid: {
    gap: theme.spacing.xl,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  projectCard: {
    backgroundColor: theme.colors.secondary.surface,
    borderWidth: 1,
    borderColor: theme.colors.border.light,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
    position: 'relative',
    minWidth: 320,
    flex: 1,
    maxWidth: 450,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.lg,
  },
  categoryBadge: {
    backgroundColor: theme.colors.overlay.light,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.primary.main,
  },
  categoryText: {
    letterSpacing: 1.5,
    fontSize: theme.typography.fontSizes.xs,
  },
  cardIcon: {
    borderRadius: theme.borderRadius.md,
    overflow: 'hidden',
  },
  iconGradient: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: theme.typography.fontSizes.lg,
    color: theme.colors.secondary.main,
  },
  projectTitle: {
    marginBottom: theme.spacing.md,
    color: theme.colors.text.primary,
    fontSize: theme.typography.fontSizes.xl,
  },
  projectDescription: {
    marginBottom: theme.spacing.xl,
    lineHeight: 26,
    fontSize: theme.typography.fontSizes.md,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border.light,
    marginBottom: theme.spacing.lg,
    opacity: 0.5,
  },
  techStack: {
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  techTitle: {
    letterSpacing: 1,
    marginBottom: theme.spacing.xs,
    fontSize: theme.typography.fontSizes.xs,
  },
  techTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  techTag: {
    borderRadius: theme.borderRadius.full,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.border.main,
  },
  tagGradient: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
  },
  cardFooter: {
    marginTop: theme.spacing.md,
    alignItems: 'flex-start',
  },
  accentLine: {
    width: 60,
    height: 3,
    backgroundColor: theme.colors.primary.main,
    borderRadius: theme.borderRadius.sm,
  },
  viewAllContainer: {
    alignItems: 'center',
    marginTop: theme.spacing.xxxl * 1.5,
  },
  viewAllButton: {
    minWidth: 280,
  },
});
