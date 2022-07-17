import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './components/partials/search/search.component';
import { FlowersService } from './services/flowers.service';
import {  HttpClientModule } from '@angular/common/http';
import { FlowerPageComponent } from './components/pages/flower-page/flower-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FlowerPageComponent,
    CartPageComponent,
    LoginPageComponent,
    TitleComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: FlowersService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
