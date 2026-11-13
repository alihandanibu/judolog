# JudoLog

JudoLog is a mobile training journal for judoka. Its home screen shows the date, duration and techniques for each session, alongside a count of all sessions and total training time. The current course build includes five sample sessions so the journal can be explored as soon as it opens.

**Ali Handan** · IT 3003 Cross-Platform Development · International Burch University · 2026/2027

## Course milestones

| Week | Project work |
| --- | --- |
| 3 · Project proposal | Defined the training session model and sketched the planned screens for signing in, browsing the journal, viewing a session and recording a new one. |
| 4 · Expo setup and training data | Set up the Expo Router project and added a TypeScript model, five sample sessions and reusable components for session cards and details. [Project setup](https://github.com/alihandanibu/judolog/commit/fa70198) |
| 5 · Training journal layout | Organized the journal around a session count, total training time and reusable cards. Added judo photos with credits. [Journal screen](https://github.com/alihandanibu/judolog/commit/9cc0d87) · [Photo credits](IMAGE_CREDITS.md) |
| 6 · Main list screen | Moved the journal to a responsive FlatList. Added loading, empty and error states, retry, pull-to-refresh, duration filters, sorting and a confirmation dialog for long-press deletion. [Lab 6 commits](https://github.com/alihandanibu/judolog/compare/e164fa2...7bb3f48) |

## Run locally

From the project folder, with Node.js and npm installed:

```sh
npm install
npx expo start
```

Scan the QR code with an Expo Go version compatible with **Expo SDK 58**, or press **w** in the Expo terminal to open the browser preview. Use the phone to try pull-to-refresh and the native delete dialog.

## Try the journal

- Switch between **All**, **Under 60 min**, **60–89 min** and **90+ min** to filter by session length. **Under 60 min** shows the empty state with the sample data.
- Choose **Newest**, **Longest** or **Original** to change the order. The summary always reflects the full journal.
- Hold a card and confirm **Delete** to remove the session from the current list. Refreshing or reopening the app reloads the original sample sessions.
- Resize the browser to see the list switch from one column to two at 600 and to three at 900.

## Project structure

| Path | Role |
| --- | --- |
| [src/app](src/app) | Expo Router entry route and navigation layout |
| [TrainingsScreen.tsx](src/screens/TrainingsScreen.tsx) | Main journal screen, summary, list states and interactions |
| [src/components](src/components) | Session cards, the session details component, filter chips and empty state |
| [src/data](src/data) | Sample training sessions and the simulated API |
| [src/types.ts](src/types.ts) | TypeScript training session model |

## Planned work

A dedicated session details route, forms for adding and editing sessions, a progress tab, local storage, photo capture and selection, Supabase authentication and storage, and an Android build through EAS.

See [IMAGE_CREDITS.md](IMAGE_CREDITS.md) for the judo photo sources and licenses.
