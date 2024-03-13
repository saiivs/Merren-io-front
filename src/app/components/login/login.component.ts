import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(
    private userService:UserServiceService,
    private router:Router
  ){

  }

  reactiveForm!:FormGroup;
  errorMsg!:string;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',[Validators.required,Validators.min(8)])
    })
  }

  loginUser(){
    if(this.reactiveForm.valid){
      let user = this.reactiveForm.value;
      this.userService.loginUser(user).subscribe((res)=>{
        if(res.status == 'notFound'){
          this.errorMsg = '*Incorrect email'
        }else if(res.status == 'incorrect password'){
          this.errorMsg = '*Incorrect password';
        }else{
          this.router.navigate(['/dashboard'])
        }
      })
    }else{
      this.errorMsg = 'Please fill the form'
    }
  }

  clearErrorMsg(){
    this.errorMsg = ""
  }

}
