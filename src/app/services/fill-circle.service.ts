import { Injectable, WritableSignal, signal } from '@angular/core';
import { ICircleArea } from '../interfaces/area.interface';
import { Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class FillCircleService {
  private $areas: WritableSignal<ICircleArea[]> = signal([]);

  constructor() {}

  public initCircle(areas: ICircleArea[]) {
    this.$areas.set(areas);
  }

  public setArea(area: ICircleArea): void {
    console.log(area)
    let areas = this.$areas().map((item) => {
      if (item.title === area.title) {
        return area;
      } else {
        return item;
      }
    });

    this.$areas.set(areas);
  }

  public getAreas$(): Observable<ICircleArea[]> {
    const areas$ = toObservable(this.$areas);
    return areas$;
  }
}
