
import { Component, OnInit } from '@angular/core';
import { Jwt} from '../../jwt';
import {EmsserviceService } from '../../emsservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Credentials } from 'src/app/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials:Credentials;

  public jwt:Jwt;

  constructor(private emsservice:EmsserviceService) { }

  ngOnInit(): void {
  }
  
  public onSubmit(addForm: NgForm): void {
    console.log(addForm.value);
    this.emsservice.addTask(addForm.value).subscribe(
      (response: Jwt) => { 
        
        
        localStorage.clear();

        localStorage.setItem("tokem",response.token);
        localStorage.setItem("type",response.type);
        localStorage.setItem("message",response.message);
        
        if(response.message.includes('ROLE_User')){

          setTimeout(function(){ window.location.href='employee';}, 1000);

        
        } else
        if(response.message.includes('ROLE_Manager')){

          setTimeout(function(){ window.location.href='manager';}, 1000);
        }
          else{
          setTimeout(function(){ window.location.href='ems';}, 1000);
          
        }
        
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

}
