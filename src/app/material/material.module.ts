import { NgModule } from '@angular/core';
import { MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatAutocompleteModule,
        MatInputModule,
        MatSnackBarModule } from '@angular/material';

const materialcomponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatAutocompleteModule,
  MatInputModule,
  MatSnackBarModule
];


@NgModule({
  imports: [materialcomponents],
  exports: [materialcomponents]
})
export class MaterialModule { }
