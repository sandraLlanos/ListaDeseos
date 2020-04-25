import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listas: Lista[]= []
  constructor( private deseosService: DeseosService,
               private router:Router  ) { }
agregarlista(){
  this.router.navigateByUrl('/agregar');
}
}
