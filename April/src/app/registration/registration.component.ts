import { Component, OnInit } from '@angular/core';
import { UserTable } from '../models/user-table';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 

  constructor(private myservice: UserService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  user_id:any;
  user_name:any;
  user_email:any;
  user_password:any;
  allUser:any;

  register(){
    this.allUser = new UserTable(this.user_id, this.user_name, this.user_email, this.user_password);
    this.myservice.save(this.allUser).subscribe(()=>{ });
    this.router.navigateByUrl("success");
    
  }

}
