import { Task } from '../models/task';
import * as TaskActions from './actions';

// Estado inicial
const initialState = {
  name: 'Primera tarea',
  state: 'Pendiente',
};

export function taskReducer(
  state: Task[] = [initialState],
  action: TaskActions.Actions
) {
  switch (action.type) {
    case TaskActions.ADD_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
}
