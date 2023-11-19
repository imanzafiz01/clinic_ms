import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-viewinventory',
  templateUrl: './viewinventory.component.html',
  styleUrls: ['./viewinventory.component.css']
})
export class ViewinventoryComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  listData: any;
  successmsg: string | null = null;

  ngOnInit(): void {
    this.getAllinventory();
  }

  // Get delete id
  deleteId(id: any) {
    console.log(id, 'deleteid==>');
    this.service.deleteinventory(id).subscribe((res) => {
      console.log(res, 'deleteres==>');
      this.successmsg = "Delete inventory profile successful!";
      this.getAllinventory();
    });
  }

  // Confirm and delete
  deleteConfirmation(id: any) {
    if (window.confirm("Are you sure you want to delete this record?")) {
      // If the user clicks "OK" in the confirmation popup, proceed with the deletion
      this.deleteId(id);
    }
  }

  // Get inventory
  getAllinventory() {
    this.service.getAllinventory().subscribe((res) => {
      console.log(res, "res==>");
      this.listData = res.data;
    });
  }

  closeAlert(): void {
    this.successmsg = null;
  }
}