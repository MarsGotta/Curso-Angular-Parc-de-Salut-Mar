// Importaciones
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/initialState';
import * as TaskActions from '../../core/store/actions';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  ngOnInit() {}
  constructor(private store: Store<AppState>) {}

  // Disparamos la acción
  addTask(name: any, state: any) {
    this.store.dispatch(new TaskActions.AddTask({ name, state }));
  }
}
