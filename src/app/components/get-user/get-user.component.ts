import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrl: './get-user.component.css'
})

export class GetUserComponent {
  userForm: FormGroup;
  user: User = {dias: 0, email: '', id: '', password: ''};

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      id: ['', [Validators.required]],
    });
  }

  onGetUser() {
    const userData = this.userForm.value;
    this.userService.getUser(userData).subscribe(
      response => {
        console.log(response);
        // Puedes redirigir o hacer otras acciones después de la inserción exitosa.
        this.user = response;
      },
      error => {
        console.error('Error al obtener usuario');
      }
    );
  }
 
}

