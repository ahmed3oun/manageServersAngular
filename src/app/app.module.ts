import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServersManagementComponent } from './servers-management/servers-management.component';
import { CustomDirDirective } from './custom-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServersManagementComponent,
    CustomDirDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
