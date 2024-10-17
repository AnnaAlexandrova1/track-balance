import { Injectable, WritableSignal, signal } from '@angular/core';
import { ICircleArea, IDescriptionItem } from '../interfaces/area.interface';
import { Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { EAreaColors, EAreas } from '../enums/areas-and-colors';
import { FormControl } from '@angular/forms';

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

  public getCircle(): ICircleArea[]{
      return this.$areas()
  }

  public getDescriptionAreas(): IDescriptionItem[] {
   return Object.keys(EAreas).map((item) => {
      return {
        title: EAreas[item as keyof typeof EAreas],
        color: EAreaColors[item as keyof typeof EAreas],
        goals: '',
        achievements: '',
        score: new FormControl(),
      };
    });
  }

}
