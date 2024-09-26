import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  Chart,
  ChartConfiguration,
  ChartItem,
  ChartTypeRegistry,
  registerables,
} from 'chart.js';
import {
  IArea,
  ICircleArea,
  IDataForCircle,
} from '../../../../../interfaces/area.interface';
import { EAreaColors, EAreas } from '../../../../../enums/areas-and-colors';
import { ScoreSliderComponent } from '../../../../../components/score-slider/score-slider.component';
import { FillCircleService } from '../../../../../services/fill-circle.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-circle-chart',
  standalone: true,
  imports: [ScoreSliderComponent],
  templateUrl: './create-circle-chart.component.html',
  styleUrl: './create-circle-chart.component.scss',
})
export class CreateCircleChartComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('mychart') myChart!: ElementRef<ChartItem>;
  private fillCircleServiceSubscription!: Subscription;
  public startAreas: ICircleArea[] = [];
  public labels: string[] = [];
  public backgroundColors: string[] = [];
  public scores: number[] = [];
  public data: IDataForCircle | {} = {};
  public config:
    | ChartConfiguration<keyof ChartTypeRegistry, number[], string>
    | {} = {};

  public chart!: Chart;

  constructor(public fillCircleService: FillCircleService) {
    this.fillCircleServiceSubscription = this.fillCircleService.getAreas$().subscribe(item => {
      this.chart.data.datasets[0].data = item.map(elem => elem.score);
      this.chart.update();
    })
  }

  ngOnInit(): void {
    this.transformStartAreas();
  }

  private transformStartAreas(): void {
    this.startAreas = Object.keys(EAreas).map((item) => {
      return {
        title: EAreas[item as keyof typeof EAreas],
        color: EAreaColors[item as keyof typeof EAreas],
        score: 0,
        maxScore: Object.keys(EAreas).length,
      };
    });

    this.initChart(this.startAreas)

    this.labels = Object.keys(EAreas).map((item) => {
      return EAreas[item as keyof typeof EAreas];
    });

    this.backgroundColors = Object.keys(EAreas).map((item) => {
      return EAreaColors[item as keyof typeof EAreas];
    });

    this.scores = Object.keys(EAreas).map(() => {
      return 1;
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

    this.config = {
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

  public createChart(): void {
    Chart.register(...registerables);
    this.chart = new Chart(
      this.myChart.nativeElement,
      this.config as ChartConfiguration<
        keyof ChartTypeRegistry,
        number[],
        string
      >,
    );
  }

  private initChart(areas: ICircleArea[]): void {
    this.fillCircleService.initCircle(areas);
  }

  public ngOnDestroy(){
    this.fillCircleServiceSubscription.unsubscribe();
  }
}
