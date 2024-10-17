import { Component, OnInit } from '@angular/core';
import { DescriptionAreaItemComponent } from '../../../../../components/description-area-item/description-area-item.component';
import { EAreaColors, EAreas } from '../../../../../enums/areas-and-colors';
import { IDescriptionItem } from '../../../../../interfaces/area.interface';
import { FillCircleService } from '../../../../../services/fill-circle.service';

@Component({
  selector: 'app-description-area',
  standalone: true,
  imports: [DescriptionAreaItemComponent],
  templateUrl: './description-area.component.html',
  styleUrl: './description-area.component.scss',
})
export class DescriptionAreaComponent implements OnInit {
  public descriptionList: IDescriptionItem[] = [];

  constructor(public fillCircleService: FillCircleService){
    }

  public ngOnInit() {
    this.descriptionList = this.fillCircleService.getDescriptionAreas();
  }
}
