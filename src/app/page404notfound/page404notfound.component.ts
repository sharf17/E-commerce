import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-page404notfound',
  templateUrl: './page404notfound.component.html',
  styleUrls: ['./page404notfound.component.css']
})
export class Page404notfoundComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  gotohome()
  {
    this.router.navigate(['/home/minihome']);
  }

}
