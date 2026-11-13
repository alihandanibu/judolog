import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'JudoLog',
          headerTransparent: false,
          headerStyle: { backgroundColor: '#F8FAFC' },
          headerTintColor: '#14213D',
          headerUserInterfaceStyle: 'light',
        }}
      />
    </Stack>
  );
}
