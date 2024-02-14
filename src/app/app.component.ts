import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { Book } from './book';
import { CommonModule } from '@angular/common';

//This will not be called as it is not a class decorator
// class abc {
//   constructor() {
//     console.log('abc constructor called');
//   }

//   show() {
//     console.log('abc show called');
//   }
// }

//class decorator
@Component({
  selector: 'app-root',
  standalone: true, //enables the component to be used without any parent component(lazy loading)
  imports: [RouterOutlet, StudentComponent, CommonModule],
  templateUrl: './app.component.html',
  // Not a good practice to use template and styles in the component
  // template:'<h1>Angular App</h1>',
  styleUrl: './app.component.css',
  // Not a good practice to use template and styles in the component
  // styles:['h1{background-color:pink}']
  preserveWhitespaces: true,
  // viewProviders: [abc, Book],
  encapsulation: ViewEncapsulation.Emulated, //Emulated by default
})

//Only the class just below the decorator will be called
export class AppComponent {
  title = 'angularApp';
  //constructor will be called first
  // constructor() {
  //   console.log('AppComponent constructor called');
  // }

  //constructor with dependency injection
  // constructor(private _abc: abc, private _book:Book) {
  //   _abc.show();
  //   _book.show();
  // }

  // @HostListener('click', ['$event'])
  // show() {
  //   alert('HostListener called');
  // }

  //Only the first method will be called
  // display() {
  //   alert('display called');
  // }

  // appData: string;
  // sendData(val: string) {
  //   this.appData = val;
  // }

  // isLoggedin: boolean = true;

  // toggle() {
  //   this.isLoggedin = !this.isLoggedin;
  //   // console.log(this.isLoggedin);
  // }

  // riderParent: any[] = [
  //   {id: 0, name: 'Rider0'},
  //   {id: 1, name: 'Rider1'},
  //   {id: 2, name: 'Rider2'},
  //   {id: 3, name: 'Rider3'},
  //   {id: 4, name: 'Rider4'},
  // ]

  // riderParent: any[];
  
  // rolling: boolean = true;

  // city: string = 'Pune';
  // state: string = 'Maharashtra';
  // country: string = 'India';

  // toggle() {
  //   this.city = 'Mumbai';
  //   this.state = 'Maharashtra';
  //   this.country = 'India';
  // }

  // num1: number = 10;
  // num2: number = 20;

  // City = {
  //   name: 'Pune',
  //   state: 'Maharashtra',
  //   country: 'India',
  // }

  // col: number = 2;

  name: string = 'Angular';
}
