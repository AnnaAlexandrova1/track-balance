import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  Chart,
  ChartConfiguration,
  ChartItem,
  ChartTypeRegistry,
  registerables,
} from 'chart.js';
import { IArea, IDataForCircle, IStartArea } from '../../../../../interfaces/area.interface';
import {
  EAreaColors,
  EAreas,
} from '../../../../../enums/areas-and-colors';
import { ScoreSliderComponent } from '../../../../../components/score-slider/score-slider.component';

@Component({
  selector: 'app-create-circle-chart',
  standalone: true,
  imports: [ScoreSliderComponent],
  templateUrl: './create-circle-chart.component.html',
  styleUrl: './create-circle-chart.component.scss',
})
export class CreateCircleChartComponent implements AfterViewInit {
  @ViewChild('mychart') myChart!: ElementRef<ChartItem>;
  public startAreas: IStartArea[] = [];
  public labels: string[] = [];
  public backgroundColors: string[] = [];
  public scores: number[] = []
  public data: IDataForCircle | {} = {};
  public config: ChartConfiguration<keyof ChartTypeRegistry, number[], string> | {} = {};

  constructor() {}

  ngOnInit(): void {
    this.transformStartAreas();
  }

  private transformStartAreas(): void {
    this.startAreas = Object.keys(EAreas).map((item) => {
      return {
        title: EAreas[item as keyof typeof EAreas],
        color: EAreaColors[item as keyof typeof EAreas],
        score: 0,
        maxScore: Object.keys(EAreas).length
      };
    });

    this.labels = Object.keys(EAreas).map((item) => {
      return EAreas[item as keyof typeof EAreas];
    });

    this.backgroundColors = Object.keys(EAreas).map((item) => {
      return EAreaColors[item as keyof typeof EAreas];
    });

    this.scores = Object.keys(EAreas).map(() => {
      return 1
    });

    this.data = {
      labels: this.labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: this.scores,
          backgroundColor: this.backgroundColors,
        },
      ],
    };

    this.config =
    {
      type: 'polarArea',
      data: this.data,
      options: {
        responsive: true,
        scales: {
          r: {
            pointLabels: {
              display: true,
              centerPointLabels: true,
              font: {
                size: 18,
              },
            },
          },
        },
        plugins: {
          legend: {
            position: 'bottom',
            display: false,
          },
          // title: {
          //   display: true,
          //   text: 'Chart.js Polar Area Chart With Centered Point Labels'
          // }
        },
      },
    };
  }

  ngAfterViewInit() {
    if (this.myChart) {
      this.createChart();
    }
  }

  createChart(): void {
    Chart.register(...registerables);
    new Chart(this.myChart.nativeElement, this.config as ChartConfiguration<keyof ChartTypeRegistry, number[], string>);
  }
}
