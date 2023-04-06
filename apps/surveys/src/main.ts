import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { sharedEnvironment } from '@consider/shared-environments';

console.log({sharedEnvironment})

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
