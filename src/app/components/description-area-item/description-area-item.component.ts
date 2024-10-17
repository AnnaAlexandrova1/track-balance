import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IDescriptionItem } from '../../interfaces/area.interface';

@Component({
  selector: 'app-description-area-item',
  standalone: true,
  imports: [CardModule, InputTextareaModule, FormsModule, ReactiveFormsModule, DescriptionAreaItemComponent],
  templateUrl: './description-area-item.component.html',
  styleUrl: './description-area-item.component.scss'
})
export class DescriptionAreaItemComponent implements OnInit{
  @Input() description!: IDescriptionItem;
 

  ngOnInit() {
}
}
