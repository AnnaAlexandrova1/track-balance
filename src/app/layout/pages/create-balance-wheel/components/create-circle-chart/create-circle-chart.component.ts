import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartItem, ChartTypeRegistry, registerables } from "chart.js";
import { IArea } from '../../../../../interfaces/area.interface';

@Component({
  selector: 'app-create-circle-chart',
  standalone: true,
  imports: [],
  templateUrl: './create-circle-chart.component.html',
  styleUrl: './create-circle-chart.component.scss'
})
export class CreateCircleChartComponent implements AfterViewInit{
  @ViewChild('mychart') myChart!: ElementRef<ChartItem>;
  public DATA_COUNT = 5;
  public NUMBER_CFG = {count: this.DATA_COUNT, min: 0, max: 20};

  public labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
  public  data = {
    labels: this.labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [11, 16, 7, 14, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ]
      }
    ]
  };

  public config:ChartConfiguration<keyof ChartTypeRegistry, number[], string> = {
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
              size: 18
            }
          }
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          display: false
        },
        // title: {
        //   display: true,
        //   text: 'Chart.js Polar Area Chart With Centered Point Labels'
        // }
      }
    },
  };

  public areas: IArea[] = [];

  constructor() { }

  ngAfterViewInit() {
    if (this.myChart) {
      this.createChart();
    }
  }

  createChart(): void {
    Chart.register(...registerables);
    new Chart(this.myChart.nativeElement, this.config)
  }
}
