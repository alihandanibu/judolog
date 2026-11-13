import { FlatList, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TrainingCard from '@/components/TrainingCard';
import { trainings } from '@/data/trainings';

const SCREEN_PADDING = 16;
const CARD_GAP = 12;

export default function TrainingsScreen() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const columns = width >= 900 ? 3 : width >= 600 ? 2 : 1;
  const cardWidth = (width - 2 * SCREEN_PADDING - (columns - 1) * CARD_GAP) / columns;

  const totalMinutes = trainings.reduce(
    (total, training) => total + training.durationMinutes,
    0,
  );

  return (
    <FlatList
      key={columns}
      numColumns={columns}
      columnWrapperStyle={columns > 1 ? styles.row : undefined}
      style={styles.screen}
      contentInsetAdjustmentBehavior="never"
      data={trainings}
      keyExtractor={(training) => training.id}
      renderItem={({ item }) => (
        <TrainingCard training={item} style={{ width: cardWidth }} />
      )}
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
        { paddingBottom: SCREEN_PADDING + insets.bottom },
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
    padding: SCREEN_PADDING,
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
  row: {
    gap: CARD_GAP,
  },
  separator: {
    height: CARD_GAP,
  },
});
