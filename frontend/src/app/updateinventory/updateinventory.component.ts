import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updateinventory',
  templateUrl: './updateinventory.component.html',
  styleUrls: ['./updateinventory.component.css']
})

export class UpdateinventoryComponent implements OnInit {

  inventoryForm = new FormGroup({
    'medicineID':new FormControl('',Validators.required),
    'medicineName':new FormControl('',Validators.required),
    'medicineQuantity':new FormControl('',Validators.required),
    'medicineEXP':new FormControl('',Validators.required),
    'medicineBatchNo':new FormControl('',Validators.required),
    'medicineSupplier':new FormControl('',Validators.required)


  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:string | null = null;
  successmsg: string | null = null;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getOneinventory(this.router.snapshot.params['id']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.inventoryForm.patchValue({
          medicineID:res.data[0].medicineID,
            medicineName:res.data[0].medicineName,
            medicineQuantity:res.data[0].medicineQuantity,
            medicineEXP:res.data[0].medicineEXP,
            medicineBatchNo:res.data[0].medicineBatchNo,
            medicineSupplier:res.data[0].medicineSupplier

        });
      });
  }
//to update a inventory
inventoryUpdate()
{
  console.log(this.inventoryForm.value);
    this.service.updateinventory(this.router.snapshot.params['id'], this.inventoryForm.value).subscribe((result:any)=>{

    this.inventoryForm.reset();
    this.successmsg = 'Inventory successfully updated';
    this.message = true;
    console.log('Entering inventoryUpdate function');
  console.log(this.inventoryForm.value);

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