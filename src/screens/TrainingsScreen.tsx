import { ScrollView, StyleSheet, Text } from 'react-native';
import TrainingCard from '@/components/TrainingCard';
import { trainings } from '@/data/trainings';

export default function TrainingsScreen() {
  const totalMinutes = trainings.reduce(
    (total, training) => total + training.durationMinutes,
    0,
  );

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.heading}>Your training journal</Text>
      <Text style={styles.summary}>
        {trainings.length} sessions · {totalMinutes} minutes
      </Text>

      {trainings.map((training) => (
        <TrainingCard key={training.id} training={training} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 16,
    gap: 12,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#14213D',
  },
  summary: {
    color: '#475569',
    marginBottom: 4,
  },
});