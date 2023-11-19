import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.css']
})

export class UpdatepatientComponent implements OnInit {

  patientForm = new FormGroup({
    'patientID':new FormControl('',Validators.required),
    'patientName':new FormControl('',Validators.required),
    'patientAge':new FormControl('',Validators.required),
    'patientContact':new FormControl('',Validators.required)


  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:string | null = null;
  successmsg: string | null = null;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getOnepatient(this.router.snapshot.params['id']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.patientForm.patchValue({
          patientID:res.data[0].patientID,
            patientName:res.data[0].patientName,
            patientAge:res.data[0].patientAge,
            patientContact:res.data[0].patientContact

        });
      });
  }
//to update a patient
patientUpdate()
{
  console.log(this.patientForm.value);
    this.service.updatepatient(this.router.snapshot.params['id'], this.patientForm.value).subscribe((result:any)=>{

    this.patientForm.reset();
    this.successmsg = 'Profile successfully updated';
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
closeAlert(): void {
  this.successmsg = null;
  this.errormsg = null;
}

}