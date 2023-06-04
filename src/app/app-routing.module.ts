import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './components/empleado/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './components/empleado/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './components/empleado/listar-empleado/listar-empleado.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'empleado/agregar'},
  {path: 'empleado/agregar', component:AgregarEmpleadoComponent},
  {path: 'empleado/lista', component:ListarEmpleadoComponent},
  {path: 'empleado/editar/:id', component:EditarEmpleadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
