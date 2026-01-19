import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Typography, Container, Card } from '@shared/components';
import { theme } from '@core/constants/theme';
import { portfolioData } from '@core/data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.section} id="experience">
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
              TRAYECTORIA PROFESIONAL
            </Typography>
          </View>

          <Typography variant="h2" weight="bold" align="center" style={styles.title}>
            Experiencia <Typography variant="h2" color="accent" weight="bold">Laboral</Typography>
          </Typography>

          <Typography variant="body" color="secondary" align="center" style={styles.subtitle}>
            Más de 5 años construyendo soluciones móviles y backend escalables
          </Typography>
        </Animated.View>

        <View style={styles.timelineContainer}>
          <View style={styles.timelineLine} />

          {portfolioData.experience.map((exp, index) => (
            <View key={exp.id} style={styles.timelineItem}>
              <View style={styles.timelineMarker}>
                <View style={styles.dotOuter}>
                  <View style={styles.dotInner} />
                  <View style={styles.pulseRing} />
                </View>
              </View>

              <Card variant="elevated" style={styles.card}>
                <LinearGradient
                  colors={[theme.colors.overlay.glass, 'transparent']}
                  style={StyleSheet.absoluteFill}
                />

                <View style={styles.cardHeader}>
                  <View style={styles.headerContent}>
                    <Typography variant="h3" weight="bold" style={styles.roleTitle}>
                      {exp.title}
                    </Typography>
                    <View style={styles.periodBadge}>
                      <Typography variant="caption" color="accent" weight="bold">
                        {exp.period}
                      </Typography>
                    </View>
                  </View>
                </View>

                <Typography
                  variant="body"
                  color="secondary"
                  style={styles.description}
                >
                  {exp.description}
                </Typography>

                <View style={styles.divider} />

                <View style={styles.highlights}>
                  <Typography variant="label" color="accent" weight="bold" style={styles.highlightsTitle}>
                    Logros destacados:
                  </Typography>
                  {exp.highlights.map((highlight, idx) => (
                    <View key={idx} style={styles.highlightItem}>
                      <View style={styles.bulletContainer}>
                        <Typography variant="body" color="accent" style={styles.bullet}>
                          ✦
                        </Typography>
                      </View>
                      <Typography variant="body" color="secondary" style={styles.highlightText}>
                        {highlight}
                      </Typography>
                    </View>
                  ))}
                </View>
              </Card>
            </View>
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
    minHeight: '100vh',
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
  timelineContainer: {
    position: 'relative',
    paddingLeft: theme.spacing.xxxl,
    maxWidth: 900,
    alignSelf: 'center',
    width: '100%',
  },
  timelineLine: {
    position: 'absolute',
    left: 31,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: theme.colors.border.light,
    opacity: 0.4,
  },
  timelineItem: {
    flexDirection: 'row',
    gap: theme.spacing.xl,
    marginBottom: theme.spacing.xxxl,
    position: 'relative',
  },
  timelineMarker: {
    alignItems: 'center',
    paddingTop: theme.spacing.lg,
    zIndex: 1,
    position: 'absolute',
    left: -theme.spacing.xxxl + 8,
  },
  dotOuter: {
    width: 20,
    height: 20,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.secondary.background,
    borderWidth: 3,
    borderColor: theme.colors.primary.main,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadows.glow,
    position: 'relative',
  },
  dotInner: {
    width: 8,
    height: 8,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.primary.main,
  },
  pulseRing: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.primary.main,
    opacity: 0.6,
  },
  card: {
    flex: 1,
    backgroundColor: theme.colors.secondary.surface,
    borderWidth: 1,
    borderColor: theme.colors.border.light,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    marginLeft: theme.spacing.xl,
  },
  cardHeader: {
    marginBottom: theme.spacing.lg,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  roleTitle: {
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
    flex: 1,
    fontSize: theme.typography.fontSizes.xl,
  },
  periodBadge: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.overlay.light,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.primary.main,
  },
  description: {
    marginBottom: theme.spacing.lg,
    lineHeight: 26,
    fontSize: theme.typography.fontSizes.md,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border.light,
    marginBottom: theme.spacing.lg,
    opacity: 0.3,
  },
  highlights: {
    gap: theme.spacing.md,
  },
  highlightsTitle: {
    marginBottom: theme.spacing.sm,
    fontSize: theme.typography.fontSizes.sm,
    letterSpacing: 1,
  },
  highlightItem: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    alignItems: 'flex-start',
  },
  bulletContainer: {
    marginTop: 4,
  },
  bullet: {
    fontSize: 14,
  },
  highlightText: {
    flex: 1,
    lineHeight: 24,
    fontSize: theme.typography.fontSizes.md,
  },
});
