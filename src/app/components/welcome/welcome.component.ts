import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {  
  
  constructor(private auth : AuthService) { }
  errorShow : boolean = false;
  errorMessage : string = '';
  
  logout(){
    this.auth.logout().catch(error => {this.errorShow = true; this.errorMessage = error.message; console.log("Error en ingreso",error)});
  }
  
  ngOnInit(): void {
  }

}
