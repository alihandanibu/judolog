import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import type { TrainingSession } from '@/types';

type TrainingDetailsProps = {
  training: TrainingSession;
};

export default function TrainingDetails({ training }: TrainingDetailsProps) {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      {training.photoUrl ? (
        <Image
          source={{ uri: training.photoUrl }}
          style={styles.photo}
          resizeMode="cover"
        />
      ) : null}

      <Text style={styles.title}>{training.title}</Text>
      <Text>Session ID: {training.id}</Text>
      <Text>Date: {training.date}</Text>
      <Text>Duration: {training.durationMinutes} minutes</Text>

      <Text style={styles.label}>Techniques practiced</Text>
      <Text>{training.techniques.join(', ')}</Text>

      {training.notes ? (
        <>
          <Text style={styles.label}>Training notes</Text>
          <Text>{training.notes}</Text>
        </>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    gap: 12,
  },
  photo: {
    width: '100%',
    height: 240,
    borderRadius: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#14213D',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 8,
  },
});