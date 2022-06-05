import { NgModule } from '@angular/core';
import { ContentModule } from './content/content.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [
    HeaderModule,
    ContentModule,
  ],
  exports: [
    HeaderModule,
    ContentModule,
  ],
})
export class LayoutModule {}
