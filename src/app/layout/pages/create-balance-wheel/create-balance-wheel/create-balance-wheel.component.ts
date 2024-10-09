import { Component, OnInit } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ChangeAreasComponent } from '../components/change-areas/change-areas.component';
import { CreateCircleChartComponent } from '../components/create-circle-chart/create-circle-chart.component';
import { FillCircleService } from '../../../../services/fill-circle.service';
import { CreateCircleApiService } from '../../../../services/create-circle.api.service';
import { ICircle } from '../../../../interfaces/area.interface';

@Component({
  selector: 'app-create-balance-wheel',
  standalone: true,
  imports: [
    SplitButtonModule,
    ChangeAreasComponent,
    CreateCircleChartComponent,
  ],
  templateUrl: './create-balance-wheel.component.html',
  styleUrls: ['./create-balance-wheel.component.scss'],
})
export class CreateBalanceWheelComponent implements OnInit {
  constructor(
    private fillCircleService: FillCircleService,
    private createCircleApiService: CreateCircleApiService,
  ) {}

  ngOnInit() {}

  public createCircle() {
    let item: ICircle = {
      areas: this.fillCircleService.getCircle(),
      description: 'TODO',
    }
    this.createCircleApiService.create(item)
  }
}
