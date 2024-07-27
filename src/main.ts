import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes.';
import { AppService, appInitializer } from './app/app.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(appRoutes),
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [AppService],
      multi: true,
    },
  ],
}).catch(err => console.error(err));
