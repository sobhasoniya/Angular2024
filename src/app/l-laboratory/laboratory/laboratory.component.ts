import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.scss']
})
export class LaboratoryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  LogOut()
  {
      console.log("Logging out" );
      this.router.navigate(['']);
    }

}
