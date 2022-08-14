import { Component } from '@angular/core';
import { ProductoService } from './servicios/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sitioAngular';

  constructor(private recursoService: ProductoService) {}

}
