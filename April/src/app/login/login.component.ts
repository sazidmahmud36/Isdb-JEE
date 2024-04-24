import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  user_id:any;
	user_password:any;
  loginUser: any;

  ngOnInit(): void {
  }

  login() {
    this.userService.loginById(this.user_id, this.user_password).subscribe((x) => {
      this.loginUser = x;
      if ((this.loginUser != null)) {
        this.router.navigateByUrl("success", { state: { response: this.loginUser } });
      } else {
        this.router.navigateByUrl("fail");
      }
    });
    // alert("Hello! I am an alert box!!");

  }
}
