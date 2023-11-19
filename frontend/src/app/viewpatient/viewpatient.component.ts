import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  listData: any;
  successmsg: string | null = null;

  ngOnInit(): void {
    this.getAllpatient();
  }

  // Get delete id
  deleteId(id: any) {
    console.log(id, 'deleteid==>');
    this.service.deletepatient(id).subscribe((res) => {
      console.log(res, 'deleteres==>');
      this.successmsg = "Delete patient profile successful!";
      this.getAllpatient();
    });
  }

  // Confirm and delete
  deleteConfirmation(id: any) {
    if (window.confirm("Are you sure you want to delete this record?")) {
      // If the user clicks "OK" in the confirmation popup, proceed with the deletion
      this.deleteId(id);
    }
  }

  // Get patient
  getAllpatient() {
    this.service.getAllpatient().subscribe((res) => {
      console.log(res, "res==>");
      this.listData = res.data;
    });
  }

  closeAlert(): void {
    this.successmsg = null;
  }
}
