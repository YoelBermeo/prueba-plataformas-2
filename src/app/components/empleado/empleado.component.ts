import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit() {
    this.getEmpleados();
  }

  getEmpleados() {
    this.empleadoService.getEmpleados().subscribe(
      (res) => {
        this.empleados = res;
      },
      (err) => console.error(err)
    );
  }
}
