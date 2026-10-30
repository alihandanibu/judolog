import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { TrainingSession } from '@/types';

type TrainingCardProps = {
  training: TrainingSession;
};

export default function TrainingCard({ training }: TrainingCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Open ${training.title}`}
      onPress={() => console.log('Open', training.id)}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Image
        source={{
          uri: training.photoUrl ??
            'https://picsum.photos/seed/judolog/600/400',
        }}
        style={styles.photo}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.title}>{training.title}</Text>
        <Text style={styles.details}>
          {training.date} · {training.durationMinutes} min
        </Text>
        <Text style={styles.techniques}>
          {training.techniques.join(' · ')}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#E6EEF7',
  },
  pressed: {
    opacity: 0.6,
  },
  photo: {
    width: '100%',
    height: 160,
  },
  content: {
    padding: 16,
    gap: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#14213D',
  },
  details: {
    color: '#475569',
  },
  techniques: {
    color: '#334155',
  },
});