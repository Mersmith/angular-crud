import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmpleadoCrudService } from 'src/app/services/empleado/empleado-crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteAliasService } from '../../../services/routes/route-alias.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})

export class EditarEmpleadoComponent implements OnInit {

  elID: any;
  formularioEmpleados: FormGroup;

  constructor(
    public routeAliasService: RouteAliasService,
    public activeRoute: ActivatedRoute,
    private empleadoCrudService: EmpleadoCrudService,
    private ruteador: Router,
    public formulario: FormBuilder,
  ) {

    this.elID = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);

    this.empleadoCrudService.EditarEmpleado(this.elID).subscribe(
      respuesta => {
        console.log(respuesta);
        this.formularioEmpleados.setValue({
          nombre: respuesta[0]['nombre'],
          correo: respuesta[0]['correo'],
        })
      }
    )

    this.formularioEmpleados = this.formulario.group({
      nombre: [''],
      correo: [''],
    })

  }

  ngOnInit(): void { }

  editarEmpleado(): any {
    console.log("Eliminando.");
    console.log(this.elID);
    console.log(this.formularioEmpleados.value);

    this.empleadoCrudService.ActualizarEmpleado(this.elID, this.formularioEmpleados.value).subscribe(() => {
      const rutaAlias = this.routeAliasService.getRouteByAlias('empleado-lista');
      this.ruteador.navigateByUrl(rutaAlias);
    });

  }

}
