import { Component, OnInit } from '@angular/core';
import {EmsserviceService } from '../../emsservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Information } from '../../information';
import { EmpInfo } from 'src/app/impInfo';
import { Leaves} from 'src/app/leaves';
import { Appliedleave} from 'src/app/appliedleave';
import { Approveleave} from 'src/app/appliedleaves';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  public message:string;
  public informations:Information[];
  public department:boolean;
  public employees:boolean;
  public leaves: boolean;
  public employeeLeaves:boolean;
  public empInfo:EmpInfo[];
  public leavess:Appliedleave[]; 
  public employeeLeave:boolean;
  public appliedLeave:Appliedleave;

  public RLeave:Approveleave ={

    reportingManagerStatus:"",
    id:0
   
  }




  constructor(private emsservice:EmsserviceService) {

   this.message=localStorage.getItem("message");

   }

  ngOnInit(): void {
    


    this.getEmployees();
  }
  

  public getEmployees(): void {
    
    this.employees=true;
    this.employeeLeaves=false;
    
    this.leaves=false;
   
    this.emsservice.getEmployeesInformation().subscribe(
      (response:EmpInfo[]) => {
        this.empInfo= response;
        
        console.log(this.empInfo);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
    
  }
  onOptionsSelected(sel){

    if(sel.options[sel.selectedIndex].text=="Approve"){

    this.RLeave.reportingManagerStatus="Approved";
    } else

    if(sel.options[sel.selectedIndex].text=="Reject"){
      this.RLeave.reportingManagerStatus="Rejected";

    }
    this.RLeave.id=sel.options[sel.selectedIndex].value;
      
       
    this.emsservice.approveLeaves(this.RLeave).subscribe(
      (response:Appliedleave) => {
        
        console.log(this.RLeave);
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
    
   
}
  public getLeaves(id): void {
    
    this.employeeLeaves=true;
    
    
    this.informations=null;
    this.emsservice.appliedLeaves(id).subscribe(
      (response: Appliedleave[]) => {
        this.leavess = response;
        
        console.log(this.leavess);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
  }

  public login(){
    localStorage.clear();
    window.location.href='/';
  
   }

}
