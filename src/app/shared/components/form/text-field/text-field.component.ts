import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextFieldComponent extends BaseFieldComponent {}
