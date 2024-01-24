import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabTestsService } from 'src/app/shared/lab-tests.service';

@Component({
  selector: 'app-list-lab',
  templateUrl: './list-lab.component.html',
  styleUrls: ['./list-lab.component.scss']
})
export class ListLabComponent implements OnInit {
  filter :string

  constructor(public labService:LabTestsService,
    private router :Router) { }

  ngOnInit(): void {
    console.log("Welcome to LifeCycleHook");
    this.labService.BindListlab();

    
  }


  updateLabTests(labId: number){
    console.log(labId);
    this.router.navigate(['a-lab/editlabTests',labId])
  }
  

  deleteMedicine(index: number): void {
    // Remove the item from the array
    this.labService.lab.splice(index, 1);
    // Optionally, you can also call an API to delete the item from the server
    // this.medicineService.deleteMedicine(this.medicineService.medicine[index].MedicineId);
  }
  

}
