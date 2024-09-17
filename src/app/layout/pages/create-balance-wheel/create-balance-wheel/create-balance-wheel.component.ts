import { Component, OnInit } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ChangeAreasComponent } from '../components/change-areas/change-areas.component';
import { CreateCircleChartComponent } from '../components/create-circle-chart/create-circle-chart.component';

@Component({
  selector: 'app-create-balance-wheel',
  standalone: true,
  imports: [SplitButtonModule, ChangeAreasComponent, CreateCircleChartComponent],
  templateUrl: './create-balance-wheel.component.html',
  styleUrls: ['./create-balance-wheel.component.scss']
})
export class CreateBalanceWheelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
