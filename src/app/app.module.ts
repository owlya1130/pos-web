import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { MatModule } from './modules/mat.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HeaderSidemenuComponent } from './components/header-sidemenu/header-sidemenu.component';
import { TableComponent } from './components/table/table.component';
import { TestComponent } from './pages/test/test.component';
import { InputComponent } from './components/input/input.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    CheckoutComponent,
    HeaderSidemenuComponent,
    TableComponent,
    TestComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
