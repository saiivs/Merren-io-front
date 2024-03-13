import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { userModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  apiUrl = 'http://localhost:3000'

  errorHandler = (error:HttpErrorResponse)=>{
    let errMsg;
    switch (error.status){
      case 400 : errMsg = 'Page not found'
      break;
      case 401:  errMsg = 'Unauthorized';
        break;
      case 403:  errMsg = 'Forbidden';
        break;
      case 404:  errMsg = 'Not Found';
        break;
      case 500:  errMsg = 'Internal Server Error';
        break;
      default:   errMsg = 'An error occurred! Please try again later';
    }
      this.router.navigate(['/error'],{queryParams:{errMsg,statusCode:error.status}});
      return throwError(error.message || 'server error')
  }


  registerUser(user:userModel):Observable<any>{
    return this.http.post(`${this.apiUrl}/register-user`,user).pipe(catchError(this.errorHandler))
  }

  loginUser(user:userModel):Observable<any>{
    return this.http.post(`${this.apiUrl}/login-user`,user).pipe(catchError(this.errorHandler))
  }

  test(id:any):Observable<any>{
    let a=2
    return this.http.put<any>(`${this.apiUrl}/test?a=2&b=3`,{id:2})
  }
}

