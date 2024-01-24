import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmasist',
  templateUrl: './pharmasist.component.html',
  styleUrls: ['./pharmasist.component.scss']
})
export class PharmasistComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  LogOut()
  {
      console.log("Logging out" );
      this.router.navigate(['']);
    }


}
