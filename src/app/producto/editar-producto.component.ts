import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  form: any = {};
  actualizado = false;
  failActualizado = false;
  msjErr = '';
  msjOK = '';

  failInit = false;

  constructor(private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }


    //Los valores se guardarán en el formulario por lo que en la vista los campos aparecerán llenos
    // con los valores correspondientes al producto (así funciona el doble binding).
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.detalle(id).subscribe( data => {
      this.form.nombreProducto = data.nombreProducto;
      this.form.precio = data.precio;
    },
    (err: any) => {
      this.failInit = true;
      this.router.navigate(['']);
    }
    );
  }


    //el método onUpdate se parece mucho al onCreate del componente Nuevo(x).
    onUpdate(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.productoService.editar(this.form, id).subscribe( data => {
        this.actualizado = true;
        this.failActualizado = false;
        this.msjOK = data.mensaje;
      },
      (err: any) => {
        this.actualizado = false;
        this.failActualizado = true;
        this.msjErr = err.error.mensaje;
      });
    }

    volver(): void {
      window.history.back();
    }
}
