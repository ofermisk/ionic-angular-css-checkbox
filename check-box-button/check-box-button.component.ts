import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-check-box-button',
  templateUrl: './check-box-button.component.html',
  styleUrls: ['./check-box-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckBoxButtonComponent),
      multi: true,
    }    
  ]
})
export class CheckBoxButtonComponent implements ControlValueAccessor  {

  @Input("check-box-name") checkBoxName;
  @Input("check-box-value") checkBoxValue;
  public value;
  constructor() { }

  private propagateChange = (_: any) => { };

  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  onChange(event) {
    // update the form
    this.value = !this.value;
    this.propagateChange(this.value);
}

}
