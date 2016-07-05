import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {
  Goal ,
  GoalService
} from '../shared/index';

import { MdButton } from '@angular2-material/button';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdCard } from '@angular2-material/card';
import { MdToolbar } from '@angular2-material/toolbar';

@Component({
  selector: 'my-goal',
  moduleId: module.id,
  templateUrl: 'goal.component.html',
  styleUrls: ['goal.component.css'],
  directives: [
    GoalComponent,
    MdButton,
    MdCheckbox,
    MdCard,
    MdToolbar
  ]
})

export class GoalComponent {
  goal: Goal;
  error: any;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private goalService: GoalService) {
  }

  // ngOnInit() {
  //   let id = this.route.snapshot.params['id'];
  //   this.goalService.getGoal(id).then(goal => this.goal = goal);
  // }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.goalService.getGoal(id).then(goal => this.goal = goal);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoGoals() { this.router.navigate(['/goals']); }

  save(){
    this.goalService
        .save(this.goal)
        .then(goal => {
          this.goal = goal;
          this.gotoGoals();
        })
        .catch(error => this.error = error);
  }
}
