import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoCrudService } from 'src/app/services/empleado/empleado-crud.service';
import { RouteAliasService } from '../../../services/routes/route-alias.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})

export class AgregarEmpleadoComponent {

  formularioEmpleados: FormGroup;

  constructor(
    public formulario: FormBuilder,
    private empleadoCrudService: EmpleadoCrudService,
    private ruteador: Router,
    public routeAliasService: RouteAliasService
  ) {

    this.formularioEmpleados = this.formulario.group({
      nombre: [''],
      correo: [''],
    })

  }

  agregarEmpleado(): any {
    console.log("Agregando.");
    console.log(this.formularioEmpleados.value);

    this.empleadoCrudService.AgregarEmpleado(this.formularioEmpleados.value).subscribe(respuesta => {
      console.log(respuesta);

      const rutaAlias = this.routeAliasService.getRouteByAlias('empleado-lista');
      this.ruteador.navigateByUrl(rutaAlias);
    });
  }

}
