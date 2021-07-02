import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

   listado;
  constructor(private http: HttpClient) {

   

  }


  public login(event: any){
/*     this.http.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
        this.postId = data.id;
    }) */
      this.http.post<any>("http://localhost/IonicDb/validar.php", {
        
        user:event.target.user.value,
        pass:event.target.pass.value
      }).subscribe(data => {
        console.log(data)
    }) ;
    
 
  }
}
