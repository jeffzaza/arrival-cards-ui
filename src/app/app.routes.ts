import { Routes } from '@angular/router';
import { Create } from './pages/create/create';
import { Manage } from './pages/manage/manage';

export const routes: Routes = [
  { path: 'create', component: Create },
  { path: 'manage', component: Manage },
  { path: '', redirectTo: 'manage', pathMatch: 'full' }
];

