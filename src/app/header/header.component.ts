import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logText = "Login";
  @Input() isLoginPage: boolean = false;
  constructor(private router: Router){}

  ngOnInit(){
    this.logText = this.isLoginPage?'Back':'Login';
  }
  loginClicked() {
    if(!this.isLoginPage){
      this.router.navigate(['login']);
      this.isLoginPage = true;
    }else{
      this.router.navigate(['landing-page']);
      this.isLoginPage = false
    }
  }
}
