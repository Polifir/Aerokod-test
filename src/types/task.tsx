export type TStatus = 'expire' | "new" | 'paused' | 'process'

export interface ITask {
  id: string;
  title: string;
  description: string;
  time: number;
  passedTime: number, //прошло времени
  keepTime: number, // осталось времени
  status: TStatus;
}

export interface ITimeTracking {
  taskId: string | null;
  startTime: number | null;
  elapsedTime: number;
  isRunning: boolean;
}