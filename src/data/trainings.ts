import type { TrainingSession } from '@/types';

export const trainings: TrainingSession[] = [
  {
    id: '1',
    title: 'Throwing technique',
    date: '2026-10-29',
    durationMinutes: 90,
    techniques: ['O-soto-gari', 'Ippon-seoi-nage'],
    notes: 'Focus on breaking balance before entering the throw.',
    photoUrl: 'https://picsum.photos/seed/judolog1/600/400',
  },
  {
    id: '2',
    title: 'Groundwork practice',
    date: '2026-10-27',
    durationMinutes: 90,
    techniques: ['Kesa-gatame', 'Yoko-shiho-gatame'],
    notes: 'Practiced transitions between holds and escapes.',
    photoUrl: 'https://picsum.photos/seed/judolog2/600/400',
  },
  {
    id: '3',
    title: 'Saturday randori',
    date: '2026-10-24',
    durationMinutes: 90,
    techniques: ['Uchi-mata', 'O-uchi-gari'],
    notes: 'Worked on combinations during standing randori.',
    photoUrl: 'https://picsum.photos/seed/judolog3/600/400',
  },
  {
    id: '4',
    title: 'Footwork and timing',
    date: '2026-10-22',
    durationMinutes: 75,
    techniques: ['De-ashi-barai', 'Okuri-ashi-barai'],
    photoUrl: 'https://picsum.photos/seed/judolog4/600/400',
  },
  {
    id: '5',
    title: 'Competition preparation',
    date: '2026-10-20',
    durationMinutes: 90,
    techniques: ['Tai-otoshi', 'Ko-uchi-gari'],
    notes: 'Practiced grip fighting and attacks from movement.',
    photoUrl: 'https://picsum.photos/seed/judolog5/600/400',
  },
];