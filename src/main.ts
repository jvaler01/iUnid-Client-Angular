import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';


bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      importProvidersFrom(BrowserModule)
    ]
})
  .catch(err => console.error(err));
