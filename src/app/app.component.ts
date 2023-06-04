import { Component } from '@angular/core';
import { RouteAliasService } from './services/routes/route-alias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public routeAliasService: RouteAliasService) {}
  title = 'crudangular';  
}
