import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  //@ts-ignore
  regForm:FormGroup;

  constructor(public fb: FormBuilder, private route: Router) {
    this.regForm = this.fb.group({
      fsname: ['',Validators.required],
      lsname: ['', Validators.required],
      email: ['', Validators.required],
      phnumber: ['', Validators.required],
      password: ['', Validators.required],
      cfpassword: ['', Validators.required]
    })
   }

  ngOnInit() {
    
  }
  registerForm(){
    this.route.navigateByUrl("homemain");
  }
  clickedBack(){
    console.log("back button click");
    this.route.navigateByUrl("homemain");
  }
}
