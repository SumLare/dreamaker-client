import { provideRouter, RouterConfig } from '@angular/router';

import { GoalsComponent } from './+goals/goals.component';
import { GoalComponent } from './+goals/goal/goal.component';

export const routes: RouterConfig = [
  { path: 'goals', component: GoalsComponent },
  { path: 'goal/:id', component: GoalComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
