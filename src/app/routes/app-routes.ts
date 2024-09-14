import { Routes } from '@angular/router';
import { ENavigationPath } from '../enums/navigation.enum';
import { LayoutComponent } from '../layout/components/layout/layout.component';

export default [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ENavigationPath.MAIN_PAGE,
        loadComponent: () =>
          import(
            '../layout/pages/main-page/main-page/main-page.component'
          ).then((c) => c.MainPageComponent),
      },
      {
        path: ENavigationPath.CREATE_BALANCE_WHEEL,
        loadComponent: () =>
          import(
            '../layout/pages/create-balance-wheel/create-balance-wheel/create-balance-wheel.component'
          ).then((c) => c.CreateBalanceWheelComponent),
      },
      {
        path: ENavigationPath.HISTORY,
        loadComponent: () =>
          import('../layout/pages/history/history/history.component').then(
            (c) => c.HistoryComponent,
          ),
      },
      {
        path: ENavigationPath.TARGETS,
        loadComponent: () =>
          import(
            '../layout/pages/targets/targets/targets.component'
          ).then((c) => c.TargetsComponent),
      },
      { path: '**', redirectTo: ENavigationPath.MAIN_PAGE },
    ],
  },
] as Routes;
