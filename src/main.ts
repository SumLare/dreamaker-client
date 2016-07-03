import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideForms } from '@angular/forms';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  provideForms(), APP_ROUTER_PROVIDERS
])
