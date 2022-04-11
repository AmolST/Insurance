import { AbstractControl } from '@angular/forms';

export function AgeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value <= 16 && control.value >= 70) {
    return { 'valid': true };
  }
  return null;
}
