import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCreateURL = "http://localhost:3000/user/create";
  getUserDataURL = "http://localhost:3000/user/getAll";


  constructor(private http: HttpClient) { }

  getUsersData(): Observable<any>{
    console.log('getting data...');
    return this.http.get<any>(this.getUserDataURL);
  }

  addUserData(userData:any){
    this.http.post(this.userCreateURL, userData).subscribe((res: any)=>{
      console.log(res);
    })
  }
}
