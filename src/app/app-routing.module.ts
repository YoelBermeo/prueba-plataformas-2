import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { GetUserComponent } from './components/get-user/get-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';

const routes: Routes = [
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'formulario', component: UserFormComponent },
  { path: 'get-user', component: GetUserComponent },
  { path: 'delete-user', component: DeleteUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
