import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { NavigationPath } from '../../../enums/navigation.enum';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [TabMenuModule, AvatarModule, AvatarGroupModule],
})
export class LayoutComponent implements OnInit {
  public menuItems: MenuItem[] = [
    { label: 'Главная', routerLink: NavigationPath.MAIN_PAGE,},
    {
      label: 'Создать колесо баланса',
      routerLink: NavigationPath.CREATE_BALANCE_WHEEL,
    },
    { label: 'Цели', routerLink: NavigationPath.TARGETS },
    { label: 'История', routerLink: NavigationPath.HISTORY },
  ];

  
  public activeItem: MenuItem | undefined = this.menuItems[0];

  constructor() {}

  ngOnInit() {}
}
