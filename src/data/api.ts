import { trainings } from './trainings';
import type { TrainingSession } from '@/types';

const wait = (milliseconds: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, milliseconds));

export async function fetchTrainings(
  { fail = false }: { fail?: boolean } = {},
): Promise<TrainingSession[]> {
  await wait(800);

  if (fail) {
    throw new Error('Could not load trainings');
  }

  return [...trainings];
}
