import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root',
})

export class CitaService {
  selectedCita: Cita;
  citas: Cita[] = [];

  readonly URL_API = 'http://localhost:3000/api/citas';

  constructor(private http: HttpClient) {
    this.selectedCita = new Cita();
  }

  getCitas() {
    return this.http.get(this.URL_API);
  }

  postCita(cita: Cita) {
    return this.http.post(this.URL_API, cita);
  }

  putCita(cita: Cita) {
    return this.http.put(`${this.URL_API}/${cita._id}`, cita);
  }

  deleteCita(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
