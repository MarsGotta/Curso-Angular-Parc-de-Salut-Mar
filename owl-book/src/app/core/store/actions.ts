// Importar
import { Action } from '@ngrx/store';
import { Task } from '../models/task';

// Definir el tipo de accion
export const ADD_TASK = 'Add task';

// Crear clase de tipo addTask
export class AddTask implements Action {
  readonly type = ADD_TASK;

  constructor(public payload: Task) {}
}

// Exportar la acción
export type Actions = AddTask;
