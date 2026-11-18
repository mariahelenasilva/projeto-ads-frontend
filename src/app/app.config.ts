import { ApplicationConfig, provideBrowserGlobalErrorListeners, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// Configurar locale pt-BR se ainda não estiver configurado: registerLocaleData(localePt) e LOCALE_ID = pt-BR em app.config.ts. 
// O uso de UTC no DatePipe evita deslocamento de data para valores yyyy-MM-dd em alguns fusos.

registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    
    // Define o UTC como fuso padrão para todos os DatePipes (evita o bug de D-1 em strings yyyy-MM-dd)
    //adição a mais
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { timezone: 'UTC' }
    }
  ]
};
