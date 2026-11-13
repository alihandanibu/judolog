# JudoLog

JudoLog is a mobile application that helps judoka record their training sessions, techniques and progress. Users can create an account, save their own training records, add photos and track what they have learned over time.

## Run the project

```bash
npm install
npx expo start
```

Open the project in a compatible version of Expo Go.

## Current setup

The project uses Expo SDK 58 to match the Expo Go version installed on the development iPhone. The Lab 4 handout specifies SDK 57.

Training data comes from typed local mock data through a simulated API. Photos are placeholders. Deletion lasts until the list is refreshed or the app is reopened.

## Features

- [x] Typed training session model
- [x] Five mock training sessions
- [x] Virtualized training list with a scrolling summary and responsive one-, two-, and three-column layout
- [x] Empty, loading, and error states with retry
- [x] Pull-to-refresh, duration filters, and sorting by date or duration
- [x] Long-press deletion with confirmation and accessible training cards
- [x] Reusable cards with press feedback
- [x] Training details component
- [x] Session count and total duration
- [ ] Dedicated training details route
- [ ] Add and edit sessions
- [ ] Trainings and Progress tabs
- [ ] Local persistence
- [ ] Camera or image picker
- [ ] Supabase authentication and training data
- [ ] Android APK with EAS

## Author

Ali Handan  
IT 3003 — Cross-Platform Development  
International Burch University, 2026/2027
