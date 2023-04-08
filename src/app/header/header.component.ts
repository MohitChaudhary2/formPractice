import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() Login = new EventEmitter();
  @Input() isLoginText: any;

  logText = "Login";

  loginClicked() {
    this.Login.emit();
    this.logText = this.isLoginText?"LogIn":"Back";
  }
}
