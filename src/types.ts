export type TrainingSession = {
  id: string;
  title: string;
  date: string;
  durationMinutes: number;
  techniques: string[];
  notes?: string;
  photoUrl?: string;
};
