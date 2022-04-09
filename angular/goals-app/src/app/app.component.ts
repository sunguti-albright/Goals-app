
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// }
// // export class AppComponent {
// //   title = 'Goal';
// // }

// constructor(){
//   // this.goals = Goal[];
//   // this.goals = ['watch finding nemo','play chess','drink wine'];
// }
// }
import { Component } from '@angular/core';
import { Goal } from './goal';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Goal-app";
};



