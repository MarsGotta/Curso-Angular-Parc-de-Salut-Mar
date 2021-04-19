import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/initialState';
import { Task } from '../../core/models/task';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent implements OnInit {
  // Definimos el observable:
  tasks: Observable<Task[]>;
  constructor(private store: Store<AppState>) {
    this.tasks = this.store.select('tasks');
  }

  ngOnInit() {}
}
