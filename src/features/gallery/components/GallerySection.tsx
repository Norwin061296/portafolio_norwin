import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Modal, Animated, Dimensions, ImageSourcePropType } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Typography, Container } from '@shared/components';
import { theme } from '@core/constants/theme';
import { galleryImages } from '@core/data/galleryImages';

const { width } = Dimensions.get('window');

// Usar las imágenes importadas desde el archivo centralizado
const professionalImages: ImageSourcePropType[] = galleryImages;

interface ImageItemProps {
  imageSource: ImageSourcePropType;
  index: number;
  onPress: () => void;
}

const ImageItem: React.FC<ImageItemProps> = ({ imageSource, index, onPress }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        delay: index * 50,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        delay: index * 50,
        useNativeDriver: true,
        tension: 50,
        friction: 7,
      }),
    ]).start();
  }, [index]);

  return (
    <Animated.View
      style={[
        styles.imageWrapper,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.imageContainer}>
        <View style={styles.imageCard}>
          <Image
            source={imageSource}
            style={styles.image}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)']}
            style={styles.imageOverlay}
          />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export const GallerySection: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [selectedImage, setSelectedImage] = useState<ImageSourcePropType | null>(null);
  const [visibleImages, setVisibleImages] = useState(6);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleImagePress = (imageSource: ImageSourcePropType) => {
    setSelectedImage(imageSource);
  };

  const handleLoadMore = () => {
    setVisibleImages(prev => Math.min(prev + 6, professionalImages.length));
  };

  return (
    <View style={styles.section} id="gallery">
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
              GALERÍA PROFESIONAL
            </Typography>
          </View>

          <Typography variant="h2" weight="bold" align="center" style={styles.title}>
            Proyectos <Typography variant="h2" color="accent" weight="bold">Visuales</Typography>
          </Typography>

          <Typography variant="body" color="secondary" align="center" style={styles.subtitle}>
            Capturas y demostraciones visuales de proyectos y trabajos realizados
          </Typography>
        </Animated.View>

        <View style={styles.galleryGrid}>
          {professionalImages.slice(0, visibleImages).map((imageSource, index) => (
            <ImageItem
              key={index}
              imageSource={imageSource}
              index={index}
              onPress={() => handleImagePress(imageSource)}
            />
          ))}
        </View>

        {visibleImages < professionalImages.length && (
          <TouchableOpacity
            onPress={handleLoadMore}
            style={styles.loadMoreButton}
          >
            <LinearGradient
              colors={theme.colors.primary.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.loadMoreGradient}
            >
              <Typography variant="label" color="primary" weight="semibold" style={styles.loadMoreText}>
                Ver Más Imágenes
              </Typography>
            </LinearGradient>
          </TouchableOpacity>
        )}

        <Modal
          visible={selectedImage !== null}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setSelectedImage(null)}
        >
          <TouchableOpacity
            style={styles.modalContainer}
            activeOpacity={1}
            onPress={() => setSelectedImage(null)}
          >
            <View style={styles.modalContent}>
              {selectedImage && (
                <Image
                  source={selectedImage}
                  style={styles.modalImage}
                  resizeMode="contain"
                />
              )}
            </View>
          </TouchableOpacity>
        </Modal>
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
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
    justifyContent: 'center',
  },
  imageWrapper: {
    width: (width - theme.spacing.lg * 4) / 3,
    maxWidth: 300,
    aspectRatio: 1,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  imageCard: {
    width: '100%',
    height: '100%',
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.border.light,
    ...theme.shadows.medium,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
  },
  loadMoreButton: {
    marginTop: theme.spacing.xxxl,
    alignSelf: 'center',
    borderRadius: theme.borderRadius.md,
    overflow: 'hidden',
  },
  loadMoreGradient: {
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
  },
  loadMoreText: {
    color: theme.colors.secondary.main,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: '100%',
  },
});
