import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //@ts-ignore
  logForm : FormGroup;

  constructor(private fb:FormBuilder, private route:Router) {
    this.logForm = this.fb.group({
      username: ['',Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  loginForm(){
    console.log("Click on Login");
    this.route.navigateByUrl("homemain");
  }
}
