import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderChangeEvent, SliderModule } from 'primeng/slider';
import { FillCircleService } from '../../services/fill-circle.service';
import { ICircleArea } from '../../interfaces/area.interface';

@Component({
  selector: 'app-score-slider',
  standalone: true,
  imports: [SlideMenuModule, SliderModule, FormsModule],
  templateUrl: './score-slider.component.html',
  styleUrl: './score-slider.component.scss'
})
export class ScoreSliderComponent implements OnInit {
  @Input() startArea!: ICircleArea;

  constructor(
    public fillCircleService: FillCircleService
  ){

  }

  public ngOnInit(): void {
  }

  public setArea(event: SliderChangeEvent){
    this.fillCircleService.setArea({
      title: this.startArea.title,
      color: this.startArea.color,
      score: event.value ?? 0,
    })
  }

  public inputScore(event: Event){
    const newValue = (event.target as HTMLInputElement).value;
    this.fillCircleService.setArea({
      title: this.startArea.title,
      color: this.startArea.color,
      score: +newValue,
    })
  }
}
