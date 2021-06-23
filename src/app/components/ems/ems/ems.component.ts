
import { Component, OnInit } from '@angular/core';
import {EmsserviceService } from '../../../emsservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Information } from '../../../information';
import { EmpInfo } from 'src/app/impInfo';
import { Leaves} from 'src/app/leaves';
import { NewJoinee} from 'src/app/newjoinee';
import { ExitRequest } from 'src/app/exitRequests';



@Component({
  selector: 'app-ems',
  templateUrl: './ems.component.html',
  styleUrls: ['./ems.component.css']
})
export class EmsComponent implements OnInit {
  public message:string;
  public informations:Information[];
  public department:boolean;
  public employees:boolean;
  public leaves: boolean;
  public employeeLeaves:boolean;
  public empInfo:EmpInfo[];
  public leavess:Leaves[];
  public employeeLeave:boolean;
  public eleave:Leaves;
  public newJoinee:boolean;
  public totalStrength:number=0;
  public information:Information;
  public newJoinees:NewJoinee[];
  public exit:boolean;
  public exitsB:boolean;
  public exits:NewJoinee[];
  public exitM:ExitRequest[]
  



  constructor(private emsservice:EmsserviceService) {

   this.message=localStorage.getItem("message");

   }

  ngOnInit(): void {
    


    this.getInfo();
  }
  public getInfo(): void {
    this.employees=false;
    this.employeeLeaves=false;
    this.department=true;
    this.leaves=false;
    this.newJoinee=false;
    this.informations=null;
    this.exit=false;
    this.exitsB=false;
    this.emsservice.getInformations().subscribe(
      (response: Information[]) => {
        this.informations = response;
        this.department=true; 
        this.totalStrength=0;
        this.informations.forEach((information:Information) => {

          this.totalStrength += information.count.valueOf();

        })
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
  }

  public getEmployees(id): void {
    this.department=false; 
    this.employees=true;
    this.employeeLeaves=false;
    this.newJoinee=false;
    this.exit=false;
    
    this.leaves=false;
   this.exitsB=false;
    this.emsservice.getEmployeesInfo(id).subscribe(
      (response:EmpInfo[]) => {
        this.empInfo= response;
        
        console.log(this.empInfo);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getAllEmployees(): void {
    this.department=false; 
    this.employees=true;
    this.employeeLeaves=false;
    this.newJoinee=false;
    this.exit=false;
    
    this.leaves=false;
   this.exitsB=false;
    this.emsservice.getAllEmployeesInfo().subscribe(
      (response:EmpInfo[]) => {
        this.empInfo= response;
        
        console.log(this.empInfo);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
    public getNewJoinee(): void {
      this.department=false; 
      this.employees=false;
      this.employeeLeaves=false;
      this.exit=false;
      this.newJoinee=true;
      this.exitsB=false;
      this.leaves=false;
     
      this.emsservice.getNewJoineeInfo().subscribe(
        (response:NewJoinee[]) => {
          this.newJoinees= response;
          
          console.log(response);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
      
    
  }
  public getExit(): void {
    this.department=false; 
    this.employees=false;
    this.employeeLeaves=false;
    this.newJoinee=false;
    this.exit=true;
    this.exitsB=false;
    
    this.leaves=false;
   
    this.emsservice.getExits().subscribe(
      (response:NewJoinee[]) => {
        this.exits= response;
        
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
  
}
public getExitM(): void {
  this.department=false; 
  this.employees=false;
  this.employeeLeaves=false;
  this.newJoinee=false;
  this.exit=false;
  this.exitsB=true;
  
  this.leaves=false;
 
  this.emsservice.getExitM().subscribe(
    (response:ExitRequest[]) => {
      this.exitM= response;
      
      console.log(response);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
  

}
  public getSkillEmployees(skill): void {
    this.department=false; 
    this.employees=true;
    this.employeeLeaves=false;
    this.newJoinee=false;
    this.exit=false;
    this.exitsB=false;
    this.leaves=false;
   
    this.emsservice.getSkillEmployees(skill).subscribe(
      (response:EmpInfo[]) => {
        this.empInfo= response;
        
        console.log(this.empInfo);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
    
  }
  public getLeaves(): void {
    this.employees=false;
    this.employeeLeaves=false;
    this.department=false;
    this.newJoinee=false;
    this.leaves=true;
    this.informations=null;
    this.exit=false;
    this.exitsB=false;
    this.emsservice.getLeaves().subscribe(
      (response: Leaves[]) => {
        this.leavess = response;
        
        console.log(this.leavess);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
  }
public getEmployeeLeave(leave): void {
  this.employeeLeaves=true;
   
  
this.eleave=leave;
console.log(this.eleave);

}
 
 public login(){
  localStorage.clear();
  window.location.href='/';

 }

}
