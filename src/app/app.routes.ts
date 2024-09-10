import { Routes } from '@angular/router';
import { NavigationPath } from './enums/navigation.enum';
import { LayoutComponent } from './layout/components/layout/layout.component';

export const routes: Routes = [
  {
    path: 'home',
    component: LayoutComponent,
    loadChildren: () => import('./routes/app-routes'),
  },
  { path: '**', redirectTo: NavigationPath.APP },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
