import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registered:boolean = false;
  
  error:boolean = false;

  message1:any;

  constructor(private router:Router,private hc:HttpClient,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    

    
  }
  onRegister(userObject)
  {
    this.error = false;
    this.registered = false;


    

    if(userObject.password != userObject.passwordrepeat)
    {
      this.error = true;
      this.message1 = "Password doesnt match!"
      return; 
    }
    this.spinner.show();
      setTimeout(() => {
        
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 3000);
    this.hc.post("/register",userObject).subscribe(res=>{
      
      if(res["message"]=="successfully registered")
      {
        this.registered=true;
        this.message1=res["message"];
        console.log(this.message1)
        
        

        this.registered = true;
        /*
        alert(userObject.name+": You are successfully registered!");*/
        this.router.navigate(['/login']);
      }
      else
      {
        this.error = true;
        /*
        alert(res["message"]);*/
        this.message1=res["message"];
        document.getElementById("myModal").style.display = "block";
        
        
        setTimeout(function(){
          document.getElementById("myModal").style.display = "none"; 
         }, 3000);
      }
    })
  }

}
