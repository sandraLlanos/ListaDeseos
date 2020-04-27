import { Component, OnInit, Input } from '@angular/core';
import { DeseosService } from '../../services/deseos.service'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {
  listas: Lista[] = [];
  @Input() terminado = true;

  constructor(public deseosService: DeseosService,
    private router: Router) { }

  listaSeleccionada(lista: Lista) {
    if(this.terminado){
      this.router.navigateByUrl(`tabs/tab2/agregar/${lista.id}`);
    }else{
      this.router.navigateByUrl(`tabs/tab1/agregar/${lista.id}`);      
    }
  }

}



