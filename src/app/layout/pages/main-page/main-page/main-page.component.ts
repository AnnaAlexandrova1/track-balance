import { Component, OnInit } from '@angular/core';
import { EmptyMainPageComponent } from '../components/empty-main-page/empty-main-page.component';
import { StartMainMageComponent } from '../components/start-main-mage/start-main-mage.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  imports: [EmptyMainPageComponent, StartMainMageComponent]
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
