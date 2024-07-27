import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NoteService } from './note.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
     provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideHttpClient()
  ]
};
