import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../services/cita.service'; // Adjust the path
import { NgForm } from '@angular/forms';
import { Cita } from '../../models/cita';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css'],
  providers: [CitaService],
})
export class CitaComponent implements OnInit {
  constructor(public citaService: CitaService) {}

  ngOnInit(): void {
    this.getCitas();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.citaService.selectedCita = new Cita();
    }
  }

  addCita(form: NgForm) {
    this.citaService.postCita(form.value).subscribe((res) => {
      console.log(res);
      this.resetForm(form);
    });
  }

  getCitas() {
    this.citaService.getCitas().subscribe((res) => {
      this.citaService.citas = res as Cita[];
      console.log(res);
    });
  }

  onSubmit() {
    // Handle form submission logic here
  }
}
