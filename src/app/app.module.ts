import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { GetUserComponent } from './components/get-user/get-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    UserFormComponent,
    MenuComponent,
    GetUserComponent,
    DeleteUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
