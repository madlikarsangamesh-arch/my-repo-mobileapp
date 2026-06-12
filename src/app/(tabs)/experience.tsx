import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { colors, spacing, typography } from '../../theme';
import { PORTFOLIO_DATA } from '../../constants/data';
import { TimelineCard } from '../../components';

export default function ExperienceScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>Experience</Text>
        <View style={styles.timeline}>
          {PORTFOLIO_DATA.experience.map((item, index) => (
            <Animated.View key={item.id} entering={FadeInUp.delay(index * 150).duration(500)}>
              <TimelineCard
                title={item.role}
                subtitle={item.company}
                date={item.duration}
                bullets={item.achievements}
                isLast={index === PORTFOLIO_DATA.experience.length - 1}
              />
            </Animated.View>
          ))}
        </View>

        <Text style={[styles.headerTitle, { marginTop: spacing[32] }]}>Education</Text>
        <View style={styles.timeline}>
          {PORTFOLIO_DATA.education.map((item, index) => (
            <Animated.View key={item.id} entering={FadeInUp.delay((PORTFOLIO_DATA.experience.length + index) * 150).duration(500)}>
              <TimelineCard
                title={item.degree}
                subtitle={item.institution}
                date={item.duration}
                bullets={[`CGPA: ${item.cgpa}`, `Coursework: ${item.coursework.join(', ')}`]}
                isLast={index === PORTFOLIO_DATA.education.length - 1}
              />
            </Animated.View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  container: { padding: spacing[16] },
  headerTitle: { ...typography.heading, color: colors.textPrimary, marginBottom: spacing[24], marginTop: spacing[16] },
  timeline: { paddingLeft: spacing[8] },
});
