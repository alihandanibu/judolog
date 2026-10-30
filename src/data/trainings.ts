import type { TrainingSession } from '@/types';

export const trainings: TrainingSession[] = [
  {
    id: '1',
    title: 'Throwing technique',
    date: '2026-10-29',
    durationMinutes: 90,
    techniques: ['O-soto-gari', 'Ippon-seoi-nage'],
    notes: 'Focus on breaking balance before entering the throw.',
    photoUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/050907-M-7747B-002-Judo.jpg/1280px-050907-M-7747B-002-Judo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
  },
  {
    id: '2',
    title: 'Groundwork practice',
    date: '2026-10-27',
    durationMinutes: 90,
    techniques: ['Kesa-gatame', 'Yoko-shiho-gatame'],
    notes: 'Practiced transitions between holds and escapes.',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Judo_children.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
  },
  {
    id: '3',
    title: 'Saturday randori',
    date: '2026-10-24',
    durationMinutes: 90,
    techniques: ['Uchi-mata', 'O-uchi-gari'],
    notes: 'Worked on combinations during standing randori.',
    photoUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Children_and_their_Judo_Master.jpg/1280px-Children_and_their_Judo_Master.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
  },
  {
    id: '4',
    title: 'Footwork and timing',
    date: '2026-10-22',
    durationMinutes: 75,
    techniques: ['De-ashi-barai', 'Okuri-ashi-barai'],
    photoUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/050907-M-7747B-002-Judo.jpg/1280px-050907-M-7747B-002-Judo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
  },
  {
    id: '5',
    title: 'Competition preparation',
    date: '2026-10-20',
    durationMinutes: 90,
    techniques: ['Tai-otoshi', 'Ko-uchi-gari'],
    notes: 'Practiced grip fighting and attacks from movement.',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Judo_children.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
  },
];