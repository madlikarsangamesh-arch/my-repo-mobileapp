import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Pressable, Linking } from 'react-native';
import { Image } from 'expo-image';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

import { colors, spacing, typography } from '../../theme';
import { PORTFOLIO_DATA } from '../../constants/data';
import { PrimaryButton, SecondaryButton, GlassCard } from '../../components';

export default function HomeScreen() {
  const router = useRouter();
  const { personal, stats } = PORTFOLIO_DATA;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInUp.delay(100).duration(500)} style={styles.hero}>
          <Image source={{ uri: personal.image }} style={styles.profileImage} contentFit="cover" />
          <View style={styles.availabilityBadge}>
            <View style={styles.availabilityDot} />
            <Text style={styles.availabilityText}>{personal.availability}</Text>
          </View>
          <Text style={styles.name}>{personal.name}</Text>
          <Text style={styles.role}>{personal.role}</Text>
          <Text style={styles.bio}>{personal.bio}</Text>
          
          <View style={styles.buttonRow}>
            <PrimaryButton 
              title="View Projects" 
              onPress={() => router.push('/projects')} 
              style={{ flex: 1, marginRight: spacing[8] }} 
            />
            <SecondaryButton 
              title="Resume" 
              onPress={() => {}} 
              style={{ flex: 1, marginLeft: spacing[8] }} 
            />
          </View>

          <View style={styles.socialRow}>
            <Pressable onPress={() => Linking.openURL(personal.github)}>
              <Feather name="github" color={colors.textPrimary} size={24} />
            </Pressable>
            <Pressable onPress={() => Linking.openURL(personal.linkedin)}>
              <Feather name="linkedin" color={colors.textPrimary} size={24} />
            </Pressable>
            <Pressable onPress={() => Linking.openURL(`mailto:${personal.email}`)}>
              <Feather name="mail" color={colors.textPrimary} size={24} />
            </Pressable>
          </View>
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(300).duration(500)} style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <GlassCard key={index} style={styles.statCard}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </GlassCard>
          ))}
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  container: { padding: spacing[16], paddingBottom: spacing[48] },
  hero: { alignItems: 'center', marginTop: spacing[32] },
  profileImage: { width: 120, height: 120, borderRadius: 60, marginBottom: spacing[16], borderWidth: 2, borderColor: colors.border },
  availabilityBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, paddingVertical: spacing[4], paddingHorizontal: spacing[12], borderRadius: 16, marginBottom: spacing[16], borderWidth: 1, borderColor: colors.border },
  availabilityDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.success, marginRight: spacing[8] },
  availabilityText: { ...typography.caption, color: colors.textSecondary },
  name: { ...typography.display, color: colors.textPrimary, marginBottom: spacing[4], textAlign: 'center' },
  role: { ...typography.title, color: colors.primary, marginBottom: spacing[16], textAlign: 'center' },
  bio: { ...typography.body, color: colors.textSecondary, textAlign: 'center', marginBottom: spacing[32] },
  buttonRow: { flexDirection: 'row', width: '100%', marginBottom: spacing[24] },
  socialRow: { flexDirection: 'row', gap: spacing[24], marginBottom: spacing[32] },
  statsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing[16], justifyContent: 'space-between' },
  statCard: { width: '47%', alignItems: 'center', padding: spacing[24] },
  statValue: { ...typography.heading, color: colors.textPrimary, marginBottom: spacing[4] },
  statLabel: { ...typography.caption, color: colors.textSecondary },
});
