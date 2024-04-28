import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  template: '',
})
export abstract class BaseFieldComponent {
  @Input() label: string;

  @Input() control: AbstractControl;
}
