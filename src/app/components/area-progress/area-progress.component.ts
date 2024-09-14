import { Component, Input, OnInit } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { IArea } from '../../interfaces/area.interface';

@Component({
  selector: 'app-area-progress',
  templateUrl: './area-progress.component.html',
  standalone: true,
  styleUrls: ['./area-progress.component.scss'],
  imports: [ProgressBarModule]
})
export class AreaProgressComponent implements OnInit {
  @Input() areaParams!: IArea;

  constructor() { }

  ngOnInit() {
  }

}
