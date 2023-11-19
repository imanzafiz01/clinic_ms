import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addinventory',
  templateUrl: './addinventory.component.html',
  styleUrls: ['./addinventory.component.css']
})
export class AddinventoryComponent implements OnInit {

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:string | null = null;
  successmsg: string | null = null;
  getparamid:any;

  ngOnInit(): void {
    //id for update
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getOneinventory(this.getparamid).subscribe((res)=>{

      console.log(res,'res==>');
      this.inventoryForm.patchValue({
        medicineID:res.data[0].medicineID,
        medicineName:res.data[0].medicineName,
        medicineQuantity:res.data[0].medicineQuantity,
        medicineEXP:res.data[0].medicineEXP,
        medicineBatchNo:res.data[0].medicineBatchNo,
        medicineSupplier:res.data[0].medicineSupplier,

      });
    });
  }
  }

  inventoryForm = new FormGroup({
    'medicineID':new FormControl('',Validators.required),
    'medicineName':new FormControl('',Validators.required),
    'medicineQuantity':new FormControl('',Validators.required),
    'medicineEXP':new FormControl('',Validators.required),
    'medicineBatchNo':new FormControl('',Validators.required),
    'medicineSupplier':new FormControl('',Validators.required)


  });

  //to create a new inventory
  inventorySubmit(){
    if(this.inventoryForm.valid){
      console.log(this.inventoryForm.value);
      this.service.createinventory( this.inventoryForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.inventoryForm.reset();
        this.successmsg = 'Add inventory Profile Successful';
      });

    }
    else{
      this.errormsg = 'Add inventory Profile Unsuccessful';
    }

  }
//to update a inventory
inventoryUpdate()
{
  console.log(this.inventoryForm.value,'updatedform');

  if(this.inventoryForm.valid)
  {
    this.service.updateinventory(this.inventoryForm.value,this.getparamid).subscribe((res)=>{
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