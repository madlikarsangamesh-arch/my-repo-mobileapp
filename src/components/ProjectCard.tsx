import React, { memo } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { colors, typography, spacing } from '../theme';
import { TechChip } from './TechChip';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  onPress: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = memo(({ title, description, imageUrl, techStack, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={onPress}
    >
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        contentFit="cover"
        transition={200}
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>{description}</Text>
        
        <View style={styles.chipContainer}>
          {techStack.slice(0, 3).map((tech, index) => (
            <TechChip key={index} label={tech} />
          ))}
          {techStack.length > 3 && (
            <TechChip label={`+${techStack.length - 3}`} />
          )}
        </View>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    marginBottom: spacing[16],
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  image: {
    width: '100%',
    height: 180,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing[16],
  },
  title: {
    ...typography.title,
    color: colors.textPrimary,
    marginBottom: spacing[4],
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing[12],
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[8],
  },
});
