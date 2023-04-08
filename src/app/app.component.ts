import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLogin = false;
  title = 'formPractice';

  Login(){
    this.isLogin = !this.isLogin
    console.log("Clicked on Login", this.isLogin);
  }
}
