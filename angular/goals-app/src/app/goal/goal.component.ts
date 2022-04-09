import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] =[
    new Goal(1,'Watch finding Nemo','Find an online version and watch merlin find his son', new Date(2022,3,14)),
    new Goal(2,'Buy Cookies','find the best chocolate chip cookies',new Date(2022,6,7)),
    new Goal(3,'Get new phone case', 'pick a color for new phone case',new Date(2022,1,20)),
    new Goal(4, 'Get dog food' , 'check store for protein supplies',new Date(2022,7,1)),
    new Goal(5, 'Solve math homework', 'check out calculous and the likes',new Date(2022,11,10)),
    new Goal(6, 'Plot my world domination plan', 'pick between Xi Jin Ping and Vladimir Putin for an ally',new Date(2022,0,14)),
     ];

     addNewGoal(goal){
      let goalLength = this.goals.length;
      goal.id = goalLength+1;
      goal.completeDate = new Date(goal.completeDate)
      this.goals.push(goal)
    }

     toggleDetails(index){
      this.goals [index].showDescription = !this.goals [index].showDescription;
    }
    deleteGoal(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
  
        if (toDelete){
          this.goals.splice(index,1)
        }
      }
    //  completeGoal(isComplete, index){
    //   if (isComplete) {
    //     this.goals.splice(index,1);
    //   }
    // }
    
    }
    
  constructor() { }

  ngOnInit(): void {
  }
}

function addNewGoal() {
  throw new Error('Function not implemented.');
}

