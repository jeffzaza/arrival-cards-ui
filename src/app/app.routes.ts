import { Routes } from '@angular/router';
import { CreateComponent } from './pages/create/create';
import { ManageComponent } from './pages/manage/manage';

export const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'manage', component: ManageComponent },
  { path: '', redirectTo: 'manage', pathMatch: 'full' }
];

