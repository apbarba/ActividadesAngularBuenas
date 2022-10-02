import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ver = 'ver';
  noVer = 'noVer';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarVisibilidad(){
    if(this.noVer == 'noVer'){

      this.noVer == 'ver';
      this.ver == 'noVer';


    }else{

      this.noVer == 'noVer';
      this.ver == 'ver';
    }
  }

}
