import { Component, Input, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service'
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {
  // listas: Lista[] = [];
  @ViewChild(IonList , {static: false}) listaIon: IonList;
  @Input() terminado = true;

  constructor(public deseosService: DeseosService,
    private router: Router,
    private alertCtrl: AlertController) { }

  listaSeleccionada(lista: Lista) {
    if(this.terminado){
      this.router.navigateByUrl(`tabs/tab2/agregar/${lista.id}`);
    }else{
      this.router.navigateByUrl(`tabs/tab1/agregar/${lista.id}`);      
    }
  }
  borrar(lista:Lista){
    this.deseosService.borrarLista(lista);
  }
  async edit(lista:Lista){   
      const alert = await this.alertCtrl.create({
        header:'Editar Lista',
        inputs:[
          {
            name: 'titulo',
            type:'text',
            value: lista.titulo,
            placeholder:'Nombre de la lista'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              this.listaIon.closeSlidingItems();
            }
          }, {
            text: 'Actualizar',
            handler: ( data ) => {
              if( data.titulo.length === 0 ){
                return;
              }
            
              lista.titulo = data.titulo;
              this.deseosService.guardarStorage();
              this.listaIon.closeSlidingItems();  
            }
          }
        ]
      });
      alert.present();
    }
    
  }







