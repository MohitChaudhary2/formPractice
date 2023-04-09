
import { Component } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  logIn = false;
  loggedIn = false;
  signUpData: any;
  loginPageLoaded = false;
  signedUp = false;


constructor(
  private usersService: UserService,
  private router: Router
  ){}


  ngOnInit(){
    console.log("check");
    this.loginPageLoaded = true;
    this.signedUp = false;
  }
  loginClicked(){
    this.logIn = this.logIn? true: true;
    console.log("login? ",this.logIn);
  }
  signUpClicked(){
    this.logIn = this.logIn? false: false;
    console.log("login? ",this.logIn);
  }

  formSubmit(data:any){
    if(this.logIn){
      console.log(data);
      let usersdata = this.usersService.getUsersData();
      console.log(usersdata);
      usersdata.subscribe((res)=>{
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
          this.router.navigate(['home']);
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
        this.usersService.addUserData(this.signUpData);
        console.log("SignUp Form Submitted: ", data);
        this.signedUp = true;
        this.logIn = true;
      }
    }
  }

  checkforError(){
    return false;
  }
}
