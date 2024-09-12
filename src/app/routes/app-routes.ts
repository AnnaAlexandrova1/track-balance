import { Routes } from '@angular/router';
import { NavigationPath } from '../enums/navigation.enum';
import { LayoutComponent } from '../layout/components/layout/layout.component';

export default [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: NavigationPath.MAIN_PAGE,
        loadComponent: () =>
          import(
            '../layout/pages/main-page/main-page/main-page.component'
          ).then((c) => c.MainPageComponent),
      },
      {
        path: NavigationPath.CREATE_BALANCE_WHEEL,
        loadComponent: () =>
          import(
            '../layout/pages/create-balance-wheel/create-balance-wheel/create-balance-wheel.component'
          ).then((c) => c.CreateBalanceWheelComponent),
      },
      {
        path: NavigationPath.HISTORY,
        loadComponent: () =>
          import('../layout/pages/history/history/history.component').then(
            (c) => c.HistoryComponent,
          ),
      },
      {
        path: NavigationPath.TARGETS,
        loadComponent: () =>
          import(
            '../layout/pages/targets/targets/targets.component'
          ).then((c) => c.TargetsComponent),
      },
      { path: '**', redirectTo: NavigationPath.MAIN_PAGE },
    ],
  },
] as Routes;
