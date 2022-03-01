import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {HeaderComponent} from './header/header.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FormdataComponent} from './formdata/formdata.component';
import {FooterComponent} from './footer/footer.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,HeaderComponent,NavbarComponent,FormdataComponent,FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
