import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      dias: ['', [Validators.required]],
    });
  }

  onSubmit() {

    //if (this.userForm.valid) {
    const userData = this.userForm.value;
    this.userService.addUser(userData).subscribe(
      response => {
        console.log('Usuario registrado con éxito:', response);
        // Puedes redirigir o hacer otras acciones después de la inserción exitosa.
        alert("Usuario Ingresado");
      },
      error => {
        console.error('Error al registrar usuario:', error);
      }
    );
    //}
  }
}
