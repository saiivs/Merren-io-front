import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(
    private userService:UserServiceService
  ){

  }

  reactiveForm!:FormGroup;
  errorMsg!:string;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl("",Validators.required),
      email:new FormControl("",[Validators.email,Validators.required]),
      password:new FormControl("",Validators.required)
    })
  }

  registerUser(){
    if(this.reactiveForm.valid){
      let user = this.reactiveForm.value;
      this.userService.registerUser(user).subscribe((res)=>{
        if(res.status == 'success'){
          this.errorMsg = "";
          console.log("user registered successfully");
        }else{
          this.errorMsg = "Something went wrong please try again later"
        }
      },(error)=>{
        
      })
    }else{
      this.errorMsg ="*Please fill the form"

    }
  }

  clearErrorMsg(){
    this.errorMsg = ''
  }

}
