import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, ScrollView, Alert, Linking, Platform } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { colors, spacing, typography } from '../../theme';
import { PORTFOLIO_DATA } from '../../constants/data';
import { PrimaryButton, GlassCard } from '../../components';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    let isValid = true;
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSend = async () => {
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    try {
      const url = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
      
      if (Platform.OS === 'web') {
        window.open(url, '_blank');
      } else {
        await Linking.openURL(url);
      }
      
      // Clear form after attempt
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
      
      if (Platform.OS !== 'web') {
        Alert.alert('Success', 'Redirecting you to your email client...');
      } else {
        alert('Opening your email client...');
      }
    } catch (error) {
      if (Platform.OS !== 'web') {
        Alert.alert('Error', 'Could not open your email client.');
      } else {
        alert('Error: Could not open your email client.');
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInUp.delay(100).duration(500)}>
          <Text style={styles.headerTitle}>Get In Touch</Text>
          <Text style={styles.subtitle}>I'm currently seeking new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</Text>
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(300).duration(500)}>
          <GlassCard style={styles.formCard}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name</Text>
              <TextInput 
                style={[styles.input, errors.name && styles.inputError]} 
                placeholder="John Doe" 
                placeholderTextColor={colors.textSecondary}
                value={name}
                onChangeText={(text) => { setName(text); if (errors.name) setErrors({...errors, name: undefined}); }}
              />
              {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput 
                style={[styles.input, errors.email && styles.inputError]} 
                placeholder="john@example.com" 
                placeholderTextColor={colors.textSecondary} 
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => { setEmail(text); if (errors.email) setErrors({...errors, email: undefined}); }}
              />
              {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Message</Text>
              <TextInput 
                style={[styles.input, styles.textArea, errors.message && styles.inputError]} 
                placeholder="Your message here..." 
                placeholderTextColor={colors.textSecondary} 
                multiline 
                numberOfLines={4} 
                textAlignVertical="top"
                value={message}
                onChangeText={(text) => { setMessage(text); if (errors.message) setErrors({...errors, message: undefined}); }}
              />
              {errors.message && <Text style={styles.errorText}>{errors.message}</Text>}
            </View>
            <PrimaryButton title="Send Message" onPress={handleSend} style={{ marginTop: spacing[8] }} />
          </GlassCard>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  container: { padding: spacing[16], paddingBottom: spacing[48] },
  headerTitle: { ...typography.heading, color: colors.textPrimary, marginBottom: spacing[8], marginTop: spacing[16] },
  subtitle: { ...typography.body, color: colors.textSecondary, marginBottom: spacing[32], lineHeight: 24 },
  formCard: { padding: spacing[24] },
  inputContainer: { marginBottom: spacing[16] },
  label: { ...typography.caption, color: colors.textSecondary, marginBottom: spacing[8] },
  input: { backgroundColor: colors.background, borderWidth: 1, borderColor: colors.border, borderRadius: 8, padding: spacing[12], color: colors.textPrimary, ...typography.body },
  inputError: { borderColor: colors.error },
  textArea: { minHeight: 120 },
  errorText: { ...typography.caption, color: colors.error, marginTop: spacing[4] },
});
