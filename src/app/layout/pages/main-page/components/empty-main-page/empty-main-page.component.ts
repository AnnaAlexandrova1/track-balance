import { Component, OnInit } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AreaProgressComponent } from '../../../../../components/area-progress/area-progress.component';
import { EAreaColors, EAreas } from '../../../../../enums/areas-and-colors';
import { IArea } from '../../../../../interfaces/area.interface';

@Component({
  selector: 'app-empty-main-page',
  standalone: true,
  templateUrl: './empty-main-page.component.html',
  styleUrls: ['./empty-main-page.component.scss'],
  imports: [SplitButtonModule, AreaProgressComponent]
})
export class EmptyMainPageComponent implements OnInit {
  public areas: IArea[] = [];

  constructor() { }

  ngOnInit(): void {
     this.transformStartAreas();
  }

  private transformStartAreas(): void{
    this.areas = Object.keys(EAreas).map(item => {
      return {
        title: EAreas[item as keyof typeof EAreas],
        color: EAreaColors[item as keyof typeof EAreas],
        done: 0
      }
    });
  }
}
