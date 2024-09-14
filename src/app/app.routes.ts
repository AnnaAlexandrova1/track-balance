import { Routes } from '@angular/router';
import { ENavigationPath } from './enums/navigation.enum';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./routes/app-routes'),
  },
  { path: '**', redirectTo: ENavigationPath.APP },
];
