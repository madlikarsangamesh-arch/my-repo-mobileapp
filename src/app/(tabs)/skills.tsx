import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { colors, spacing, typography } from '../../theme';
import { PORTFOLIO_DATA } from '../../constants/data';
import { TechChip, GlassCard } from '../../components';

export default function SkillsScreen() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>Technical Skills</Text>
        
        {Object.entries(skills).map(([category, items], index) => (
          <Animated.View key={category} entering={FadeInUp.delay(index * 150).duration(500)} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
            <GlassCard style={styles.card}>
              <View style={styles.chipContainer}>
                {items.map((skill, i) => (
                  <TechChip key={i} label={skill} />
                ))}
              </View>
            </GlassCard>
          </Animated.View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  container: { padding: spacing[16] },
  headerTitle: { ...typography.heading, color: colors.textPrimary, marginBottom: spacing[24], marginTop: spacing[16] },
  categoryContainer: { marginBottom: spacing[24] },
  categoryTitle: { ...typography.title, color: colors.textPrimary, marginBottom: spacing[12] },
  card: { padding: spacing[16] },
  chipContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing[8] },
});
