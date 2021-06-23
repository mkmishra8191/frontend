import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import {Credentials} from './credentials'
import {Jwt} from './jwt'
import {Information} from './information'
import {EmpInfo} from './impInfo'
import {Leaves} from './leaves'
import {Leave} from './leave'



import { environment } from 'src/environments/environment.prod';
import { Appliedleave } from './appliedleave';
import { Approveleave } from './appliedleaves';
import { NewJoinee } from './newjoinee';
import { ExitRequest } from './exitRequests';

@Injectable({providedIn: 'root'})
export class EmsserviceService {
  private apiServerUrl = environment.apiBaseUrl;
  public jwt: Jwt;
  public loginRespose: Observable<Jwt>;
  public token:string;

  constructor(private http: HttpClient){}

  
  public addTask(credentials:Credentials): Observable<Jwt> {

    this.loginRespose = this.http.post<Jwt>(`${this.apiServerUrl}/v1/login`, credentials);

    
    
    return this.loginRespose;
  }

  public getInformations(): Observable<Information[]> {

    this.token= localStorage.getItem("type")+" "+localStorage.getItem("tokem")
    console.log(this.token);
    return this.http.get<Information[]>(`${this.apiServerUrl}/v1/employeescount`,{
      headers: new HttpHeaders({
        "authorization": this.token
      })
  })}
  public getEmployeesInfo(id): Observable<EmpInfo[]> {
 
    this.token= localStorage.getItem("type")+" "+localStorage.getItem("tokem")
    console.log(this.token);
    return this.http.get<EmpInfo[]>(`${this.apiServerUrl}/v1/employeesinformation/${id}`,{
      headers: new HttpHeaders({
        "authorization": this.token
      })
  })}
  public getAllEmployeesInfo(): Observable<EmpInfo[]> {
 
    this.token= localStorage.getItem("type")+" "+localStorage.getItem("tokem")
    console.log(this.token);
    return this.http.get<EmpInfo[]>(`${this.apiServerUrl}/v1/allemployeesinformation`,{
      headers: new HttpHeaders({
        "authorization": this.token
      })
  })}
  public getNewJoineeInfo(): Observable<NewJoinee[]> {
 
    this.token= localStorage.getItem("type")+" "+localStorage.getItem("tokem")
    console.log(this.token);
    return this.http.get<NewJoinee[]>(`${this.apiServerUrl}/v1/newjoineeinformation`,{
      headers: new HttpHeaders({
        "authorization": this.token
      })
  })}
  public getExits(): Observable<NewJoinee[]> {
 
    this.token= localStorage.getItem("type")+" "+localStorage.getItem("tokem")
    console.log(this.token);
    return this.http.get<NewJoinee[]>(`${this.apiServerUrl}/v1/exit`,{
      headers: new HttpHeaders({
        "authorization": this.token
      })
  })}
  public getExitM(): Observable<ExitRequest[]> {
 
    this.token= localStorage.getItem("type")+" "+localStorage.getItem("tokem")
    console.log(this.token);
    return this.http.get<ExitRequest[]>(`${this.apiServerUrl}/v1/exits`,{
      headers: new HttpHeaders({
        "authorization": this.token
      })
  })}
  
  public getSkillEmployees(skill:string): Observable<EmpInfo[]> {
 
    this.token= localStorage.getItem("type")+" "+localStorage.getItem("tokem")
    console.log(this.token);
    return this.http.get<EmpInfo[]>(`${this.apiServerUrl}/v1/employeesinformations/${skill}`,{
      headers: new HttpHeaders({
        "authorization": this.token
      })
  })}
  public getEmployeesInformation(): Observable<EmpInfo[]> {
 
    this.token= localStorage.getItem("type")+" "+localStorage.getItem("tokem")
    console.log(this.token);
    return this.http.get<EmpInfo[]>(`${this.apiServerUrl}/v1/getemployees`,{
      headers: new HttpHeaders({
        "authorization": this.token
      })
  })}
  public getLeaves(): Observable<Leaves[]> {

    this.token= localStorage.getItem("type")+" "+localStorage.getItem("tokem")
    console.log(this.token);
    return this.http.get<Leaves[]>(`${this.apiServerUrl}/v1/leaves`,{
      headers: new HttpHeaders({
        "authorization": this.token
      })
  })}
  public getLeave(): Observable<Leaves> {

    this.token= localStorage.getItem("type")+" "+localStorage.getItem("tokem")
    console.log(this.token);
    return this.http.get<Leaves>(`${this.apiServerUrl}/v1/user`,{
      headers: new HttpHeaders({
        "authorization": this.token
      })
  })}
  public applyLeave(aplyLeave:Leave): Observable<Appliedleave>{

    this.token= localStorage.getItem("type")+" "+localStorage.getItem("tokem")
    console.log(this.token);
    return this.http.post<Appliedleave>(`${this.apiServerUrl}/v1/leave/`,aplyLeave,{
      headers: new HttpHeaders({
        "authorization": this.token




      })
    })}
    public appliedLeaves(id:number): Observable<Appliedleave[]>{

      this.token= localStorage.getItem("type")+" "+localStorage.getItem("tokem")
      console.log(this.token);
      return this.http.get<Appliedleave[]>(`${this.apiServerUrl}/v1/appliedleaves/${id}`,{
        headers: new HttpHeaders({
          "authorization": this.token
  
  
  
  
        })
      })}
      public approveLeaves(approveLeaveRequest:Approveleave): Observable<Appliedleave>{

        this.token= localStorage.getItem("type")+" "+localStorage.getItem("tokem")
        console.log(approveLeaveRequest);
        return this.http.post<Appliedleave>(`${this.apiServerUrl}/v1/approveleave`,approveLeaveRequest,{
          headers: new HttpHeaders({
            "authorization": this.token
    
    
    
    
          })
        })}
}
 

