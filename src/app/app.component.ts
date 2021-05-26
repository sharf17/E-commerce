import { Component } from '@angular/core';
import { LoginserviceService } from './loginservice.service';

declare var tempCartClear:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myNewApp';

  user:string;

  constructor(public ls:LoginserviceService){}
  ngOnInit(){
  }

  logout()
  {
    localStorage.clear();
    tempCartClear();
  }
}
