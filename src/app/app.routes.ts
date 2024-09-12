import { Routes } from '@angular/router';
import { NavigationPath } from './enums/navigation.enum';
import { LayoutComponent } from './layout/components/layout/layout.component';
import { MainPageComponent } from './layout/pages/main-page/main-page/main-page.component';
import { CreateBalanceWheelComponent } from './layout/pages/create-balance-wheel/create-balance-wheel/create-balance-wheel.component';
import { HistoryComponent } from './layout/pages/history/history/history.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./routes/app-routes'),
  },
  { path: '**', redirectTo: NavigationPath.APP },
];
