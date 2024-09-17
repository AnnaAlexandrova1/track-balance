import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartItem, registerables } from "chart.js";
import {ToggleButtonModule} from "primeng/togglebutton";




@Component({
  selector: 'app-dynamic-diagramm',
  standalone: true,
  imports: [
    ToggleButtonModule
  ],
  templateUrl: './dynamic-diagramm.component.html',
  styleUrl: './dynamic-diagramm.component.scss'
})
export class DynamicDiagrammComponent implements AfterViewInit {
  checked: boolean = false;
  @ViewChild('mychart') myChart!: ElementRef<ChartItem>;

  public labels = [
    { Name: "Здоровье", Checked: false},
    { Name: "Не здоровье", Checked: true}
  ]

  public data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
      label: 'Не здоровье',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [10, 5, 2, 20, 30, 45],
    }, {
      label: 'Здоровье',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [15, 4, 4, 25, 34, 45],
    }]
  };

  public options = {
    scales: {
      y: {
        beginAtZero: true,
        display: false
      }
    }
  }

  public config: ChartConfiguration = {
    type: 'line',
    data: this.data,
    options: this.options
  }

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
