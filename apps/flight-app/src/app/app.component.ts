import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import {Component} from '@angular/core';

import { Router } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {


    // const myArray = [
    //   {
    //     path: '',
    //     redirectTo: 'home',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'home',
    //     component: HomeComponent
    //   },
    //   {
    //     path: 'mf-passenger',
    //     loadChildren: () => 
    //       loadRemoteModule({
    //         remoteEntry: 'http://localhost:3000/remoteEntry.js',
    //         remoteName: 'passenger',
    //         exposedModule: './Module'
    //       })
    //       .then(esm => esm.PassengerModule)
    //   },
    //   {
    //     path: 'basket',
    //     component: BasketComponent,
    //     outlet: 'aux'
    //   },
    //   {
    //     path: '**',
    //     redirectTo: 'home'
    //   }
    // ];

    // router.resetConfig(myArray);

  }
}
