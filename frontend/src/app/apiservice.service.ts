import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
const basepatientUrl = "http://localhost:8080/patient"
const createpatientUrl = "http://localhost:8080/patient/add"
const delpatientUrl = "http://localhost:8080/patient/del"
const putpatientUrl = "http://localhost:8080/patient/put"
const baseinventoryUrl = "http://localhost:8080/inventory"
const createinventoryUrl = "http://localhost:8080/inventory/add"
const delinventoryUrl = "http://localhost:8080/inventory/del"
const putinventoryUrl = "http://localhost:8080/inventory/put"

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 
  constructor(private _http:HttpClient) { }
//get all 
getAllpatient():Observable<any>{
  const url = "http://localhost:8080/allpatient"
  return this._http.get<any>(url)
}

 // create
 createpatient(patient: any):Observable<any>{
  console.log(patient,'createapi=>');
  return this._http.post(createpatientUrl, patient)
}

//deleting 

deletepatient(id: any): Observable<any> {
  return this._http.delete(`${delpatientUrl}/${id}`);

}

//update 
updatepatient(id: any, patient: any): Observable<any> {
  return this._http.put(`${putpatientUrl}/${id}`, patient);

}

//get one 
getOnepatient(id:any):Observable<any>{
  return this._http.get(`${basepatientUrl}/${id}`);
}

//get all 
getAllinventory():Observable<any>{
    const url = "http://localhost:8080/allinventory"
    return this._http.get<any>(url)
  }
  
   // create
   createinventory(inventory: any):Observable<any>{
    console.log(inventory,'createapi=>');
    return this._http.post(createinventoryUrl, inventory)
  }
  
  //deleting 
  
  deleteinventory(id: any): Observable<any> {
    return this._http.delete(`${delinventoryUrl}/${id}`);
  
  }
  
  //update 
  updateinventory(id: any, inventory: any): Observable<any> {
    return this._http.put(`${putinventoryUrl}/${id}`, inventory);
  
  }
  
  //get one 
  getOneinventory(id:any):Observable<any>{
    return this._http.get(`${baseinventoryUrl}/${id}`);
  }

}