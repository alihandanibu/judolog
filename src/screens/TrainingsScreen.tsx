import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TrainingCard from '@/components/TrainingCard';
import { trainings } from '@/data/trainings';

export default function TrainingsScreen() {
  const insets = useSafeAreaInsets();

  const totalMinutes = trainings.reduce(
    (total, training) => total + training.durationMinutes,
    0,
  );

  return (
    <FlatList
      style={styles.screen}
      contentInsetAdjustmentBehavior="never"
      data={trainings}
      keyExtractor={(training) => training.id}
      renderItem={({ item }) => <TrainingCard training={item} />}
      ListHeaderComponent={
        <View style={styles.headerContent}>
          <Text style={styles.heading}>Your training journal</Text>
          <Text style={styles.summary}>
            {trainings.length} sessions · {totalMinutes} minutes
          </Text>
        </View>
      }
      ListHeaderComponentStyle={styles.header}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      contentContainerStyle={[
        styles.content,
        { paddingBottom: 16 + insets.bottom },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 16,
  },
  headerContent: {
    gap: 12,
  },
  header: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#14213D',
  },
  summary: {
    color: '#475569',
  },
  separator: {
    height: 12,
  },
});
