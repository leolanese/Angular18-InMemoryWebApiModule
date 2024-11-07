import {ApplicationConfig,importProvidersFrom,provideZoneChangeDetection} from '@angular/core';
import {PreloadAllModules,provideRouter,withPreloading} from '@angular/router';

import {provideHttpClient,withXsrfConfiguration} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppData} from './app-data';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAnimationsAsync(),
    provideHttpClient(
      withXsrfConfiguration({
        cookieName: 'TOKEN', // default is 'XSRF-TOKEN'
        headerName: 'X-TOKEN' // default is 'X-XSRF-TOKEN'
      })
    ),
    importProvidersFrom(
      FormsModule,
      InMemoryWebApiModule.forRoot(AppData, { delay: 100 })
    )
  ]
};
