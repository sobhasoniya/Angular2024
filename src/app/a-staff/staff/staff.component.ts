import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  LogOut()
  {
      console.log("Logging out" );
      this.router.navigate(['']);
    }

}
