import { Component, OnInit } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ChangeAreasComponent } from '../components/change-areas/change-areas.component';
import { CreateCircleChartComponent } from '../components/create-circle-chart/create-circle-chart.component';
import { FillCircleService } from '../../../../services/fill-circle.service';
import { CreateCircleApiService } from '../../../../services/create-circle.api.service';
import { ICircle } from '../../../../interfaces/area.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { group } from '@angular/animations';

@Component({
  selector: 'app-create-balance-wheel',
  standalone: true,
  imports: [
    SplitButtonModule,
    ChangeAreasComponent,
    CreateCircleChartComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './create-balance-wheel.component.html',
  styleUrls: ['./create-balance-wheel.component.scss'],
})
export class CreateBalanceWheelComponent implements OnInit {
  public circleForm!: FormGroup;

  constructor(
    private fillCircleService: FillCircleService,
    private createCircleApiService: CreateCircleApiService,
    private fb: FormBuilder,
  ) {}

  public ngOnInit() {
    this.circleForm = new FormGroup ({
      scores: this.fb.group(
        this.fillCircleService.getDescriptionAreas().reduce((list, item) => ({ ...list, [item.title]: ['']}), {})),
      areaDescriptions: this.fb.group(
       this.fillCircleService.getDescriptionAreas().reduce((list, item) => ({...list, [item.title ]: new FormGroup({ [item.title ]: this.fb.group({ goals: [''], achievements: ['']})})}), {})
      )
 })
  }

  public createCircle() {
    let item: ICircle = {
      areas: this.fillCircleService.getCircle(),
      description: 'TODO',
    }
    this.createCircleApiService.create(item)
  }
}
