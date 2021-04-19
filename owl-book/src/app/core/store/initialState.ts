import { Task } from '../models/task';

export interface AppState {
  readonly tasks: Task[];
}

export const InitialState: AppState = {
  tasks: [],
};
