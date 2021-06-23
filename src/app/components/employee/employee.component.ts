import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

import { Leaves} from 'src/app/leaves';
import { Leave} from 'src/app/leave';
import { Appliedleave} from 'src/app/appliedleave';

import { HttpErrorResponse } from '@angular/common/http';
import {EmsserviceService } from '../../emsservice.service';




import {NgbDate} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  fc;

 model=new Date();
 model2=new Date();
 minDate ;
 maxDate;
 RLeaves;
 leaveBalance:boolean=false;
applyLeave:boolean=true;


days:any;
todateSec:any;
fromdateSec:any;
millisecondsPerDay:any;
diff:any;
weeks:any; 
leaveDays='';
apply:boolean=false;
typee:"";
  
  public leave:Leaves={id: 0,
    cl: 0,
    takencl: 0,
    pl: 0,
    takenpl: 0,
    sl: 0,
    takensl: 0,
    empInfo: {
        id: 0,
        name: "",
        department: {
            id: 0,
          name: ""
        },
        skills: "",
        designation: ""
    


  }
  }
  public aplyLeave:Leave={

    fromDate:new Date,
    toDate:new Date,
    typee:"",
    leaves:0
  }
  public appliedLeave:Appliedleave;
  public leavesss:Appliedleave[];
  public employeeLeavess:boolean=false;

    
  ngOnInit() {
   
   
   
   
    this.getLeave();
   
    
   
    }
    aply(){
      let today=new Date();

    this.minDate = new NgbDate(today.getFullYear(),today.getMonth() + 1,today.getDate()+1);
    this.maxDate = new NgbDate(today.getFullYear(),today.getMonth() + 4,today.getDate());

    console.log(this.minDate)
    
      this.apply = !this.apply;
    }
    onOptionsSelected(sel){
      

      this.RLeaves=sel.options[sel.selectedIndex].value;
      this.typee=sel.options[sel.selectedIndex].text
      console.log(this.typee);
     
 }
 onApply():void{
  

   if(this.leaveDays>this.RLeaves){
     alert("Insufficient Remaining Leaves");
   } else{
this.aplyLeave.typee=this.typee.toLowerCase();

this.aplyLeave.fromDate=this.model;
this.aplyLeave.toDate=this.model2;
this.aplyLeave.leaves=Number(this.leaveDays);
  

this.emsservice.applyLeave(this.aplyLeave).subscribe(
  (response: Appliedleave) => {
    this.getLeave();
    this.appliedLeave=response;
    
    
    
    alert("Request Sent")
    window.location.reload();
    
  },
  (error: HttpErrorResponse) => {
    alert(error.message);
  }
);

}
}
 

 
 
  
 

  
   constructor(private emsservice:EmsserviceService) { }
   selectToday() {
   
}
public getLeaves(id): void {
    
 
  
  
  this.emsservice.appliedLeaves(id).subscribe(
    (response: Appliedleave[]) => {
      this.leavesss = response;
      if(this.leavesss.length !=0){
        this.employeeLeavess=true;
  
      }
      console.log(this.leavesss);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
  
}
  
   public getLeave(): void {
    
    this.emsservice.getLeave().subscribe(
      (response: Leaves) => {
        this.leave = response;
        
        this.getLeaves(this.leave.empInfo.id);
        
        console.log(this.leave.empInfo.id);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
  }
  
  onKeyUpfromdate(event: any) {
    this.model = event.target.value;
    console.log(this.model);
    this.todateSec = new Date(this.model2);
    this.fromdateSec = new Date(this.model);
     
    if (this.todateSec < this.fromdateSec)
    alert('To date must be grater that from date!');
     
     
     
    // Calculate days between dates
    this.millisecondsPerDay = 86400 * 1000; // Day in milliseconds
    this.fromdateSec.setHours(0,0,0,1); // Start just after midnight
    this.todateSec.setHours(23,59,59,999); // End just before midnight
    this.diff = this.todateSec - this.fromdateSec; // Milliseconds between datetime objects 
    this.days = Math.ceil(this.diff / this.millisecondsPerDay);
     
    // Subtract two weekend days for every week in between
    this.weeks = Math.floor(this.days / 7);
    this.days = this.days - (this.weeks * 2);
     
    // Handle special cases
    this.fromdateSec = this.fromdateSec.getDay();
    this.todateSec = this.todateSec.getDay();
     
    // Remove weekend not previously removed. 
    if (this.fromdateSec - this.todateSec > 1) 
    this.days = this.days - 2; 
     
    // Remove start day if span starts on Sunday but ends before Saturday
    if (this.fromdateSec == 0 && this.todateSec != 6)
    this.days = this.days - 1; 
     
    // Remove end day if span ends on Saturday but starts after Sunday
    if (this.todateSec == 6 && this.fromdateSec != 0){
    this.days = this.days - 1 ;
    }
    this.leaveDays = this.days;
    if(this.leaveDays =='NaN' || this.leaveDays =='' || this.leaveDays <='0' || this.leaveDays =='undefined'){
    this.leaveDays ='';
    }else{
    this.leaveDays = this.days;
    }
     
     
    }
     
    onKeyUptoDate(event: any) {
    this.model2 = event.target.value;
    console.log(this.model2);
    //alert(this.toDate);
    //alert(this.fromDate);
     
    this.todateSec = new Date(this.model2);
    this.fromdateSec = new Date(this.model);
     
    if (this.todateSec < this.fromdateSec)
    alert('To date must be grater that from date!');
     
    // Calculate days between dates
    this.millisecondsPerDay = 86400 * 1000; // Day in milliseconds
    this.fromdateSec.setHours(0, 0, 0, 1); // Start just after midnight
    this.todateSec.setHours(23, 59, 59, 999); // End just before midnight
    this.diff = this.todateSec - this.fromdateSec; // Milliseconds between datetime objects 
    this.days = Math.ceil(this.diff / this.millisecondsPerDay);
     
    // Subtract two weekend days for every week in between
    this.weeks = Math.floor(this.days / 7);
    this.days = this.days - (this.weeks * 2);
     
    // Handle special cases
    this.fromdateSec = this.fromdateSec.getDay();
    this.todateSec = this.todateSec.getDay();
     
    // Remove weekend not previously removed. 
    if (this.fromdateSec - this.todateSec > 1) 
    this.days = this.days - 2; 
     
    // Remove start day if span starts on Sunday but ends before Saturday
    if (this.fromdateSec == 0 && this.todateSec != 6)
    this.days = this.days - 1; 
     
    // Remove end day if span ends on Saturday but starts after Sunday
    if (this.todateSec === 6 && this.fromdateSec !== 0) {
    this.days = this.days - 1 ;
    }
    this.leaveDays = this.days;
    if ( this.leaveDays === 'NaN' || this.leaveDays === '' || this.leaveDays <= '0' || this.leaveDays =='undefined'){
    this.leaveDays = '';
    } else {
    this.leaveDays = this.days;
    }
     
    }
 
    public login(){
      localStorage.clear();
      window.location.href='/';
    
     }

}
