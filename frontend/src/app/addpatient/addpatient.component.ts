import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:string | null = null;
  successmsg: string | null = null;
  getparamid:any;

  ngOnInit(): void {
    //id for update
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getOnepatient(this.getparamid).subscribe((res)=>{

      console.log(res,'res==>');
      this.patientForm.patchValue({
        patientID:res.data[0].patientID,
        patientName:res.data[0].patientName,
        patientAge:res.data[0].patientAge,
        patientContact:res.data[0].patientContact,

      });
    });
  }
  }

  patientForm = new FormGroup({
    'patientID':new FormControl('',Validators.required),
    'patientName':new FormControl('',Validators.required),
    'patientAge':new FormControl('',Validators.required),
    'patientContact':new FormControl('',Validators.required)


  });

  //to create a new patient
  patientSubmit(){
    if(this.patientForm.valid){
      console.log(this.patientForm.value);
      this.service.createpatient( this.patientForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.patientForm.reset();
        this.successmsg = 'Add Patient Profile Successful';
      });

    }
    else{
      this.errormsg = 'Add Patient Profile Unsuccessful';
    }

  }
//to update a patient
patientUpdate()
{
  console.log(this.patientForm.value,'updatedform');

  if(this.patientForm.valid)
  {
    this.service.updatepatient(this.patientForm.value,this.getparamid).subscribe((res)=>{
      console.log(res,'resupdated');
      this.successmsg = res.message;

    })
  }
  else
  {
    this.errormsg = 'invalid';
  }
}
closeAlert(): void {
  this.successmsg = null;
  this.errormsg = null;
}
}