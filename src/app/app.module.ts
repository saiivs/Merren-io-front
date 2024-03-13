import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UIMaterialsModule } from './materials/ui-materials/ui-materials.module';
import { RegisterComponent } from './components/register/register.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorPageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UIMaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
