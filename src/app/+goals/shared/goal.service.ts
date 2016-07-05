import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import '../../rxjs-operators';

import { Goal } from './goal.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GoalService {

  private goalsUrl = 'http://localhost:8081/api/goals';

  constructor(private http: Http) { }

  getGoals(): Promise<Goal[]> {
  return this.http.get(this.goalsUrl)
              .toPromise()
              .then(this.extractData)
              .catch(this.handleError);
  }

  getGoal(id: number) {
    return this.getGoals()
               .then(goals => goals.filter(goal => goal.id === id)[0]);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  save(goal: Goal): Promise<Goal> {
    if(goal.id){
      return this.put(goal);
    }

    return this.post(goal);
  }

  private post(goal: Goal): Promise<Goal> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
                .post(this.goalsUrl, JSON.stringify(goal), {headers: headers})
                .toPromise()
                .then(res => res.json())
                .catch(this.handleError)
  }

  private put(goal: Goal){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.goalsUrl}/${goal.id}`;

    return this.http
               .put(url, JSON.stringify(goal), {headers: headers})
               .toPromise()
               .then(() => goal)
               .catch(this.handleError);
  }

  delete(goal: Goal){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.goalsUrl}/${goal.id}`;

    return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError)
  }
}
