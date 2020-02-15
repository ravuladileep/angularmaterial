import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-materialpractice',
  templateUrl: './materialpractice.component.html',
  styleUrls: ['./materialpractice.component.css']
})
export class MaterialpracticeComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

  options: string[] = ['angular', 'vue', 'react'];
  objectoptions = [
    {name: 'item1'},
    {name: 'item2'},
    {name: 'item3'},
    {name: 'item4'}
  ];
  mycontrol = new FormControl();
  filteredoptions: Observable<string[]>;

  opensnackbar(message, action) {
   // this.snackbar.open(message, action);
    const snackbarref = this.snackbar.open(message, action, {duration: 3000});
    snackbarref.afterDismissed().subscribe(() => {
      console.log('snackbar dismissed');
    });
    snackbarref.onAction().subscribe(() => {
      console.log('the snackbar action');
    });
  }

  displayfn(subject) {
    return subject ? subject.name : undefined;
  }
  ngOnInit() {
    this.filteredoptions = this.mycontrol.valueChanges.pipe(
      startWith(''), map(value => this.filter(value))
    );
  }
  private filter(value: string): string[] {
    const filtervalue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filtervalue));
  }
}
