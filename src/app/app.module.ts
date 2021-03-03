import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServersManagementComponent } from './servers-management/servers-management.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersManagementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
