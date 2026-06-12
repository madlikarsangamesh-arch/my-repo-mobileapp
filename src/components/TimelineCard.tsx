import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../theme';
import { GlassCard } from './GlassCard';

interface TimelineCardProps {
  title: string;
  subtitle: string;
  date: string;
  bullets?: string[];
  isLast?: boolean;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({ title, subtitle, date, bullets, isLast }) => {
  return (
    <View style={styles.container}>
      <View style={styles.timelineColumn}>
        <View style={styles.dot} />
        {!isLast && <View style={styles.line} />}
      </View>
      <View style={styles.contentColumn}>
        <GlassCard style={styles.card}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          {bullets && bullets.length > 0 && (
            <View style={styles.bulletsContainer}>
              {bullets.map((bullet, index) => (
                <View key={index} style={styles.bulletRow}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.bulletText}>{bullet}</Text>
                </View>
              ))}
            </View>
          )}
        </GlassCard>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: spacing[16],
  },
  timelineColumn: {
    width: 32,
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
    marginTop: spacing[8],
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: colors.border,
    marginTop: spacing[8],
    marginBottom: -spacing[16],
  },
  contentColumn: {
    flex: 1,
    paddingBottom: spacing[16],
  },
  card: {
    padding: spacing[16],
  },
  date: {
    ...typography.caption,
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: spacing[4],
  },
  title: {
    ...typography.title,
    color: colors.textPrimary,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing[8],
  },
  bulletsContainer: {
    marginTop: spacing[8],
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing[4],
  },
  bulletPoint: {
    ...typography.body,
    color: colors.textSecondary,
    marginRight: spacing[8],
  },
  bulletText: {
    ...typography.body,
    color: colors.textSecondary,
    flex: 1,
  },
});
