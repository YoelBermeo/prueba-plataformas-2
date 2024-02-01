import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private URL_API = 'http://localhost:3000/api-user';

  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.URL_API);
  }

  postEmpleado(empleado: Empleado): Observable<any> {
    return this.http.post(this.URL_API, empleado);
  }

  putEmpleado(empleado: Empleado): Observable<any> {
    return this.http.put(`${this.URL_API}/${empleado.id}`, empleado);
  }

  deleteEmpleado(_id: string): Observable<any> {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
