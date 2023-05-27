import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
  export class TableComponent implements OnInit {

    constructor(private userSS:UserServiceService){
    }

    usuario: Usuario[] = [];

    ngOnInit(): void {
      this.usuario = this.userSS.getUsuario();
    }

    eliminarUsuario(index:number){
      this.userSS.eliminarUsuario(index);
    }

  }

