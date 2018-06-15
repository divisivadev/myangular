import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { OmgComponent } from './omg/omg.component';
import { HeaderComponent } from './header/header.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
   
    OmgComponent,
   
    HeaderComponent,
   
    LeftbarComponent,
   
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
