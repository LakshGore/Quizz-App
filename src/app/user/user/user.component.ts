import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {


  isNotUser = false
  userName = '';
  
  constructor(private router: Router){

  }

  checkUser(){
    if (this.userName.length < 3 ) {
      this.isNotUser = true

    }
    else { 
      this.router.navigate(['/quiz',this.userName]);
    }
  }
}
