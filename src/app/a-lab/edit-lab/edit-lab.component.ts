import { Component, OnInit } from '@angular/core';
import { LabTests } from 'src/app/shared/lab-tests';
import { LabTestsService } from 'src/app/shared/lab-tests.service';
import { ActivatedRoute } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-edit-lab',
  templateUrl: './edit-lab.component.html',
  styleUrls: ['./edit-lab.component.scss']
})
export class EditLabComponent implements OnInit {
  labId: number;
  lab:LabTests=new LabTests();

  constructor(
    private route: ActivatedRoute,
    private labService: LabTestsService
  ) { }

  ngOnInit(): void {
    this.labId=this.route.snapshot.params['labId']

    this.labService.getLabTests(this.labId)
    .subscribe(data=>{
      console.log(data);
      this.lab=data;


      this.labService.formData=Object.assign({},data);
    },error=>console.log(error))
  };

}
