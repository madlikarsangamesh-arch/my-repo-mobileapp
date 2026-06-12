import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../theme';

interface TechChipProps {
  label: string;
}

export const TechChip: React.FC<TechChipProps> = ({ label }) => {
  return (
    <View style={styles.chip}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: colors.background,
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[8],
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  text: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});
