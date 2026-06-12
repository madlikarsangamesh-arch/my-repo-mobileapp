import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { colors, spacing, typography } from '../../theme';
import { PORTFOLIO_DATA } from '../../constants/data';
import { PrimaryButton, SecondaryButton, TechChip } from '../../components';

export default function ProjectDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const project = PORTFOLIO_DATA.projects.find(p => p.id === id);

  if (!project) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.errorText}>Project not found.</Text>
        <PrimaryButton title="Go Back" onPress={() => router.back()} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Feather name="arrow-left" color={colors.textPrimary} size={24} />
          </Pressable>
        </View>

        <Image source={{ uri: project.imageUrl }} style={styles.heroImage} contentFit="cover" />

        <Animated.View entering={FadeInUp.delay(100).duration(500)} style={styles.content}>
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.typeText}>{project.type} Project</Text>
          
          <View style={styles.chipContainer}>
            {project.techStack.map((tech, i) => (
              <TechChip key={i} label={tech} />
            ))}
          </View>

          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.bodyText}>{project.description}</Text>

          <Text style={styles.sectionTitle}>The Problem</Text>
          <Text style={styles.bodyText}>{project.problem}</Text>

          <Text style={styles.sectionTitle}>The Solution</Text>
          <Text style={styles.bodyText}>{project.solution}</Text>

          <View style={styles.buttonRow}>
            {project.githubUrl && (
              <PrimaryButton 
                title="View Code" 
                onPress={() => {}} 
                style={styles.actionButton}
              />
            )}
            {project.liveUrl && (
              <SecondaryButton 
                title="Live Demo" 
                onPress={() => {}} 
                style={styles.actionButton}
              />
            )}
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  scrollContent: { paddingBottom: spacing[48] },
  header: { position: 'absolute', top: spacing[16], left: spacing[16], zIndex: 10 },
  backButton: { backgroundColor: 'rgba(9, 9, 11, 0.6)', padding: spacing[8], borderRadius: 20 },
  heroImage: { width: '100%', height: 300, backgroundColor: colors.card },
  content: { padding: spacing[16], marginTop: -spacing[24], backgroundColor: colors.background, borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  title: { ...typography.display, color: colors.textPrimary, marginBottom: spacing[4] },
  typeText: { ...typography.caption, color: colors.primary, marginBottom: spacing[16] },
  chipContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing[8], marginBottom: spacing[32] },
  sectionTitle: { ...typography.title, color: colors.textPrimary, marginBottom: spacing[8], marginTop: spacing[16] },
  bodyText: { ...typography.body, color: colors.textSecondary, lineHeight: 24, marginBottom: spacing[8] },
  errorText: { ...typography.title, color: colors.textPrimary, textAlign: 'center', marginTop: spacing[64], marginBottom: spacing[16] },
  buttonRow: { flexDirection: 'row', gap: spacing[16], marginTop: spacing[32] },
  actionButton: { flex: 1 },
});
