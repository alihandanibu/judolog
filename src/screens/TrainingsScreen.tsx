import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import EmptyState from '@/components/EmptyState';
import TrainingCard from '@/components/TrainingCard';
import { fetchTrainings } from '@/data/api';
import type { TrainingSession } from '@/types';

const SCREEN_PADDING = 16;
const CARD_GAP = 12;

type LoadStatus = 'loading' | 'error' | 'ready';

export default function TrainingsScreen() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const columns = width >= 900 ? 3 : width >= 600 ? 2 : 1;
  const cardWidth = (width - 2 * SCREEN_PADDING - (columns - 1) * CARD_GAP) / columns;

  const [trainings, setTrainings] = useState<TrainingSession[]>([]);
  const [status, setStatus] = useState<LoadStatus>('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const [attempt, setAttempt] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [refreshError, setRefreshError] = useState('');

  useEffect(() => {
    let ignore = false;

    async function loadTrainings() {
      try {
        const sessions = await fetchTrainings();

        if (!ignore) {
          setTrainings(sessions);
          setStatus('ready');
        }
      } catch (error) {
        if (!ignore) {
          setErrorMessage(error instanceof Error ? error.message : 'Could not load trainings');
          setStatus('error');
        }
      }
    }

    void loadTrainings();

    return () => {
      ignore = true;
    };
  }, [attempt]);

  function retry() {
    setStatus('loading');
    setAttempt((previousAttempt) => previousAttempt + 1);
  }

  async function refresh() {
    if (refreshing) return;

    setRefreshing(true);
    setRefreshError('');

    try {
      const sessions = await fetchTrainings();
      setTrainings(sessions);
    } catch {
      setRefreshError('Could not refresh trainings. Pull down to try again.');
    } finally {
      setRefreshing(false);
    }
  }

  const totalMinutes = trainings.reduce(
    (total, training) => total + training.durationMinutes,
    0,
  );

  if (status === 'loading') {
    return (
      <View style={[styles.screen, styles.center]}>
        <ActivityIndicator color="#1D4ED8" size="large" accessibilityLabel="Loading trainings" />
        <Text style={styles.summary}>Loading trainings…</Text>
      </View>
    );
  }

  if (status === 'error') {
    return (
      <View style={[styles.screen, styles.center]}>
        <Text accessibilityRole="alert" style={styles.summary}>{errorMessage}</Text>
        <Pressable accessibilityRole="button" onPress={retry} style={styles.retryButton}>
          <Text style={styles.retryText}>Try again</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <FlatList
      key={columns}
      numColumns={columns}
      columnWrapperStyle={columns > 1 ? styles.row : undefined}
      style={styles.screen}
      contentInsetAdjustmentBehavior="never"
      data={trainings}
      refreshing={refreshing}
      onRefresh={refresh}
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
          {refreshError !== '' && (
            <Text accessibilityRole="alert" style={styles.refreshError}>{refreshError}</Text>
          )}
        </View>
      }
      ListHeaderComponentStyle={styles.header}
      ListEmptyComponent={
        <EmptyState title="No trainings yet" message="Your trainings will appear here." />
      }
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
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: SCREEN_PADDING,
  },
  retryButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#1D4ED8',
  },
  retryText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  content: {
    flexGrow: 1,
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
  refreshError: {
    color: '#9F1239',
  },
  row: {
    gap: CARD_GAP,
  },
  separator: {
    height: CARD_GAP,
  },
});
