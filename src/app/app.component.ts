import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GoalService } from './+goals/shared/index';

import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MdToolbar,
    MdIcon
  ],
  providers: [
    HTTP_PROVIDERS,
    GoalService,
    MdIconRegistry
  ]
})

export class AppComponent {

}
