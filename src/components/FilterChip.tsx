import { Pressable, StyleSheet, Text } from 'react-native';

type FilterChipProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export default function FilterChip({ label, selected, onPress }: FilterChipProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={onPress}
      style={({ pressed }) => [
        styles.chip,
        selected && styles.selectedChip,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#E2E8F0',
  },
  selectedChip: {
    backgroundColor: '#1D4ED8',
  },
  pressed: {
    opacity: 0.75,
  },
  label: {
    color: '#14213D',
    fontWeight: '600',
  },
  selectedLabel: {
    color: '#FFFFFF',
  },
});
