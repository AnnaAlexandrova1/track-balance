import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ENavigationPath } from '../../../enums/navigation.enum';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [TabMenuModule, AvatarModule, AvatarGroupModule],
})
export class LayoutComponent implements OnInit {
  public menuItems: MenuItem[] = [
    { label: 'Главная', routerLink: ENavigationPath.MAIN_PAGE,},
    {
      label: 'Создать колесо баланса',
      routerLink: ENavigationPath.CREATE_BALANCE_WHEEL,
    },
    { label: 'Цели', routerLink: ENavigationPath.TARGETS },
    { label: 'История', routerLink: ENavigationPath.HISTORY },
  ];

  
  public activeItem: MenuItem | undefined = this.menuItems[0];

  constructor() {}

  ngOnInit() {}
}
