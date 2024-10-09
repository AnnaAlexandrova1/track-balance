import { Component, OnInit } from '@angular/core';
import { DescriptionAreaItemComponent } from '../../../../../components/description-area-item/description-area-item.component';
import { EAreaColors, EAreas } from '../../../../../enums/areas-and-colors';
import { IDescriptionItem } from '../../../../../interfaces/area.interface';

@Component({
  selector: 'app-description-area',
  standalone: true,
  imports: [DescriptionAreaItemComponent],
  templateUrl: './description-area.component.html',
  styleUrl: './description-area.component.scss',
})
export class DescriptionAreaComponent implements OnInit {
  public descriptionList: IDescriptionItem[] = [];

  public ngOnInit() {
    this.descriptionList = Object.keys(EAreas).map((item) => {
      return {
        title: EAreas[item as keyof typeof EAreas],
        color: EAreaColors[item as keyof typeof EAreas],
        goals: '',
        achievements: '',
      };
    });
  }
}
