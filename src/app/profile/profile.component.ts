import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginserviceService} from '../loginservice.service';
import {Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userobj = {username:''};

  email:string;
  name:string;
  phno:any;

  details:any;


  constructor(private hc:HttpClient,private ls:LoginserviceService,private router:Router,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    setTimeout(() => {
        
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
    if(this.ls.isLoggedIn() == true){
      this.userobj.username=localStorage.getItem("userid");
      this.spinner.show();
      this.hc.post('/profile',this.userobj).subscribe(res=>{
        this.details = res;
        this.email=(this.details.email);
        this.name=(this.details.name);
        this.phno=(this.details.phnno);
      })
    }
    else
    {
      this.router.navigate(['/page404notfound'])
    }
    
  }



}
