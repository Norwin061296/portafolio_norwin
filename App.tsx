import React from 'react';
import { ScrollView, StyleSheet, StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from './src/core/constants/theme';
import { GlobalStyles } from './src/core/components/GlobalStyles';
import { HeroSection } from './src/features/hero';
import { ExperienceSection } from './src/features/experience';
import { SkillsSection } from './src/features/skills';
import { ProjectsSection } from './src/features/projects';
import { EducationSection } from './src/features/education';
import { CertificationsSection } from './src/features/certifications';
import { GallerySection } from './src/features/gallery';
import { ContactSection } from './src/features/contact';

export default function App() {
  return (
    <SafeAreaProvider>
      <GlobalStyles />
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.secondary.main} />
      <View style={styles.appContainer}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <HeroSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />
          <GallerySection />
          <ContactSection />
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: theme.colors.secondary.background,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary.background,
  },
  contentContainer: {
    flexGrow: 1,
  },
});
