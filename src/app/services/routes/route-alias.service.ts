import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteAliasService {

  private routeAliases: Map<string, string> = new Map<string, string>();

  constructor() { 
    this.routeAliases.set('inicio', '/inicio');
    this.routeAliases.set('empleado-agregar', '/empleado/agregar');
    this.routeAliases.set('empleado-lista', '/empleado/lista');
    this.routeAliases.set('empleado-editar', '/empleado/editar');
  }

  getRouteByAlias(alias: string): string {
    return this.routeAliases.get(alias) || '';
  }

}
