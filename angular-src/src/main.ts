import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
//might need to add const platform = platformBrowserDynamic();
const platform = platformBrowserDynamic();
platformBrowserDynamic().bootstrapModule(AppModule);




