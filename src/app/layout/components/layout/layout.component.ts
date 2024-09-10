import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [TabMenuModule, AvatarModule, AvatarGroupModule],
})
export class LayoutComponent implements OnInit {
  public menuItems = [
    { label: 'Главная' },
    { label: 'Создать колесо баланса' },
    { label: 'Цели' },
    { label: 'История' },
  ];

  public activeItem: MenuItem | undefined = this.menuItems[0];

  constructor() {}

  ngOnInit() {}
}
