import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { IStartArea } from '../../interfaces/area.interface';

@Component({
  selector: 'app-score-slider',
  standalone: true,
  imports: [SlideMenuModule, SliderModule, FormsModule],
  templateUrl: './score-slider.component.html',
  styleUrl: './score-slider.component.scss'
})
export class ScoreSliderComponent {
  @Input() startArea!: IStartArea;

}
