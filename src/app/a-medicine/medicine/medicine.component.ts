import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  LogOut()
  {
      console.log("Logging out" );
      this.router.navigate(['']);
    }

}
