import { Component, OnInit } from '@angular/core';
import { RouteAliasService } from '../../../services/routes/route-alias.service';
import { EmpleadoCrudService } from 'src/app/services/empleado/empleado-crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})

export class ListarEmpleadoComponent implements OnInit {

  Empleados: any;

  constructor(
    public routeAliasService: RouteAliasService,
    private empleadoCrudService: EmpleadoCrudService
  ) { }

  ngOnInit(): void {
    this.empleadoCrudService.ListarEmpleados().subscribe(respuesta => {
      console.log(respuesta);
      this.Empleados = respuesta;
    })
  }

  borrarEmpleado(id: any, iControl: any) {
    console.log("Eliminando.");
    console.log(id);
    console.log(iControl);

    if (window.confirm("¿Desea eliminar el empleado?")) {
      this.empleadoCrudService.BorrarEmpleado(id).subscribe((respuesta) => {
        console.log(respuesta);
        this.Empleados.splice(iControl, 1);
      })
    }

  }

}
