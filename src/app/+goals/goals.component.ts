import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GoalComponent } from './goal/goal.component';
import { Goal, GoalService } from './shared/index';

import { MdCard } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';

@Component({
  selector: 'my-goals',
  moduleId: module.id,
  templateUrl: 'goals.component.html',
  styleUrls: ['goals.component.css'],
  directives: [
    GoalComponent,
    MdCard,
    MdButton,
    MdToolbar
  ]
})

export class GoalsComponent implements OnInit {
  errorMessage: string;
  goals: Goal[];
  mode = 'Observable';

  constructor(
    private router: Router,
    private goalService: GoalService) {
  }

  ngOnInit() { this.getGoals(); }

  getGoals() {
    this.goalService.getGoals()
                 .then(
                   goals => this.goals = goals,
                   error =>  this.errorMessage = <any>error);
  }

  onSelect(goal: Goal) {
    this.router.navigate(['/goal', goal.id]);
    event.preventDefault();
  }

  delete(goal: Goal){
    this.goalService.delete(goal).catch(error =>  this.errorMessage = <any>error);
    this.removeFromList(goal);
  }

  removeFromList(goal: Goal) {
    this.goals.splice(this.goals.indexOf(goal), 1);
  }
}
