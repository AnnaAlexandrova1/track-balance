import { Component } from '@angular/core';
import { AreaProgressComponent } from '../../../../../components/area-progress/area-progress.component';
import { IArea } from '../../../../../interfaces/area.interface';
import { EAreaColors, EAreas } from '../../../../../enums/areas-and-colors';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DynamicDiagrammComponent } from '../dynamic-diagramm/dynamic-diagramm.component';

@Component({
  selector: 'app-start-main-mage',
  standalone: true,
  imports: [AreaProgressComponent, SplitButtonModule, DynamicDiagrammComponent],
  templateUrl: './start-main-mage.component.html',
  styleUrl: './start-main-mage.component.scss'
})
export class StartMainMageComponent {
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
        done: 23
      }
    });
  }

}
