import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})

export class DeleteUserComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      id: ['', [Validators.required]],
    });
  }

  onDeleteUser() {
    const userData = this.userForm.value;
    this.userService.deleteUser(userData).subscribe(
      response => {
        console.log('Usuario eliminado con éxito');
        // Puedes redirigir o hacer otras acciones después de la inserción exitosa.
      },
      error => {
        console.error('Error al eliminar usuario');
      }
    );
  }
}
