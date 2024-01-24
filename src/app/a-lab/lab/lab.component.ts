import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  LogOut()
  {
      console.log("Logging out" );
      this.router.navigate(['']);
    }

}
