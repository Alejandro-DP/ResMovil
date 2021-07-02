import { Component } from '@angular/core';

import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


   users = [{
    id:1,
    firstName:"Alejandro",
    lastName:"de la cruz perez",
    rol_id:1,
    pass:"usuarios2021"
  },
  {
    id:2,
    firstName:"Nehemias",
    lastName:"lopez",
    rol_id:1,
    pass:"usuario2021"
  },{
    id:2,
    firstName:"edgar",
    lastName:"lopez",
    rol_id:1,
    pass:"usuario2021"
  },
  ]

   listado;
  constructor(private http: HttpClient, private router: Router) {

    

  }


  public login(event: any){
/*     this.http.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
        this.postId = data.id;
    }) */
     /*  this.http.post<any>("http://localhost/IonicDb/validar.php", {
        
        user:event.target.user.value,
        pass:event.target.pass.value
      }).subscribe(data => {
        console.log(data)
    }) ; */
    const res = this.users.filter(item=>event.target.user.value==item.firstName && event.target.pass.value == item.pass)
    console.log(res);
    if (res.length > 0){
      this.router.navigate(['/estudiante']);
    }
    console.log(this.users)
  }
}
