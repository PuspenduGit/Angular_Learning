import { Component, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-student',

  //change the selector to class name
  // selector: '.student',

  //change the selector to attribute
  // selector: '[student]',

  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
  encapsulation: ViewEncapsulation.Emulated,
  // inputs: ['operator'],
  outputs: ['studentEvent']
})
export class StudentComponent {
  // operator: string;

  studentEvent = new EventEmitter();
  sendData(val: string) {
    // console.log(val);
    this.studentEvent.emit(val);
  }
}
