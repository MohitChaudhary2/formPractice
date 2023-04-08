import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  logIn = false;
  loggedIn = false;
  signUpData: any;
  userCreateURL = "http://localhost:3000/user/create";
  getUserDataURL = "http://localhost:3000/user/getAll";

constructor(private http: HttpClient){}


  ngOnInit(){
    console.log("check");
  }
  loginClicked(){
    this.logIn = this.logIn? true: true;
    console.log("login? ",this.logIn);
  }
  signUpClicked(){
    this.logIn = !this.logIn? false: false;
    console.log("login? ",this.logIn);
  }

  formSubmit(data:any){
    if(this.logIn){
      console.log(data);
      const req = this.http.get<any>(this.getUserDataURL);
      req.subscribe((res:any)=>{
        console.log(res);
        res.data.forEach((user: any) =>{
          if(user.username === data.form.controls.username.value){
            if(user.password === data.form.controls.password.value){
              this.loggedIn = true;
            }else{
              console.log("Password Incorrect");
            }
          }
        });
        if(this.loggedIn){
          console.log("login Form Submitted: ", data);
        }else{
          console.log("login failed Username or Password Incorrect");
        }
      });   
    }else{
      if(this.checkforError()){

      }
      else{
        this.signUpData =
          {
            username : data.form.controls.username.value,
            password : data.form.controls.password.value,
            email : data.form.controls.email.value,
          }
        ;
        this.http.post(this.userCreateURL, this.signUpData).subscribe((res: any)=>{
          console.log(res);
        })
        console.log("SignUp Form Submitted: ", data);
      }
      
      

    }
  }

  checkforError(){
    return false;
  }
}
