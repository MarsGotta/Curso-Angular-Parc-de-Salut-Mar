import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { AppState } from '../core/store/initialState';
import { taskReducer } from '../core/store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

const reducer: ActionReducerMap<AppState, any> = {
  tasks: taskReducer,
};

@NgModule({
  declarations: [TasksComponent, AddTaskComponent, ListTasksComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    StoreModule.forRoot(reducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  exports: [TasksComponent, AddTaskComponent, ListTasksComponent],
})
export class TasksModule {}
