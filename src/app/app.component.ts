import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GoalService } from './+goals/shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    `,
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, GoalService]
})

export class AppComponent {

}
