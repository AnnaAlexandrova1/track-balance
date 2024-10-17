import { Component, Input, OnInit } from '@angular/core';
import { DescriptionAreaItemComponent } from '../../../../../components/description-area-item/description-area-item.component';
import { EAreaColors, EAreas } from '../../../../../enums/areas-and-colors';
import { IDescriptionItem } from '../../../../../interfaces/area.interface';
import { FillCircleService } from '../../../../../services/fill-circle.service';
import { AbstractControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ICircleForm } from '../../../../../interfaces/form-group-circle.interface';

@Component({
  selector: 'app-description-area',
  standalone: true,
  imports: [DescriptionAreaItemComponent, ReactiveFormsModule],
  templateUrl: './description-area.component.html',
  styleUrl: './description-area.component.scss',
})
export class DescriptionAreaComponent implements OnInit {
  @Input() areaDescriptionGrpup!: FormGroup;
  public descriptionList: IDescriptionItem[] = [];
  private formControls: any[] = [];

  constructor(public fillCircleService: FillCircleService){
    }

  public ngOnInit() {
    this.descriptionList = this.fillCircleService.getDescriptionAreas();
    this.formControls = this.getFormControls();
    this.descriptionList = this.descriptionList.map(item => {
      return {
        ...item, 
        controls: this.formControls.filter(elem => item.title === elem.key)
      }
    })
    console.log(this.descriptionList)
  }

  public getFormControls() {
    return Object.keys(this.areaDescriptionGrpup.controls).map(key => ({
      key, 
      control: this.areaDescriptionGrpup.controls[key]
    }));
  }
}
