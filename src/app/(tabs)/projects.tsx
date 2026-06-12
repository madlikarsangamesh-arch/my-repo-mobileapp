import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { colors, spacing, typography } from '../../theme';
import { PORTFOLIO_DATA } from '../../constants/data';
import { ProjectCard } from '../../components';

export default function ProjectsScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Featured Projects</Text>
        <FlatList
          data={PORTFOLIO_DATA.projects}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item, index }) => (
            <Animated.View entering={FadeInUp.delay(index * 150).duration(500)}>
              <ProjectCard
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                techStack={item.techStack}
                onPress={() => router.push(`/project/${item.id}`)}
              />
            </Animated.View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  container: { flex: 1, padding: spacing[16] },
  headerTitle: { ...typography.heading, color: colors.textPrimary, marginBottom: spacing[24], marginTop: spacing[16] },
  listContent: { paddingBottom: spacing[32] },
});
