import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root'
})

export class EmpleadoCrudService {

  API: string = environment.apiUrl;

  constructor(private clienteHttp: HttpClient) { }

  AgregarEmpleado(datosEmpleado: Empleado): Observable<any> {
    return this.clienteHttp.post(this.API + "?insertar=1", datosEmpleado);
  }

  ListarEmpleados() {
    return this.clienteHttp.get(this.API);
  }

  BorrarEmpleado(id: any): Observable<any> {
    return this.clienteHttp.get(this.API + "?borrar=" + id);
  }

  EditarEmpleado(id: any): Observable<any> {
    return this.clienteHttp.get(this.API + "?consultar=" + id);
  }

  ActualizarEmpleado(id: any, datosEmpleado: Empleado): Observable<any> {
    return this.clienteHttp.post(this.API + "?actualizar=" + id, datosEmpleado);
  }

}
