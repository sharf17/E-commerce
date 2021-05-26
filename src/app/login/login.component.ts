import { Component, OnInit } from '@angular/core';
import { LoginserviceService} from '../loginservice.service';
import { Router } from '@angular/router';


declare var sample1:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedin:boolean = false;

  error:boolean = false;

  message1:any;

  constructor( private ls:LoginserviceService,private router:Router) { }

  ngOnInit() {
   
  }

  onLogin(user)
  {
  this.loggedin = false;
  this.error = false;
  localStorage.clear();

  //admin
  this.ls.loginAdmin(user).subscribe(res=>{
    if(res["message"] == "Welcome Admin")
    {
      alert("Welcome Admin!");
      localStorage.setItem("admintoken",res["admintoken"]);
      this.router.navigate(['/admin']);
      
    }
    else if(res["message"] == "Not Admin")
    {
      this.ls.loginUser(user).subscribe(res=>{
        if(res["message"]=="invalid user name")
         {
          this.error = true;
          /*
          alert("Invalid user name");*/
          this.message1= res["message"];
            
         }
         else if(res["message"]=="invalid password")
         {
           this.error = true;
           /*
           alert("invalid password");*/
           this.message1= res["message"];
         }
         else if(res["message"]=="logged in successfully")
         {
           localStorage.setItem("userid",user.username)
           this.error = true;
          /*
           alert(res["message"]);*/
          this.message1= res["message"];
          
           this.ls.isloggedIn=true;
           localStorage.setItem("token",res["token"]);
           this.router.navigate(['/home/minihome']);
           //console.log("logged in",this.ls.isloggedIn);
         }
       })
    }
    else
    {
        alert(res["message"]);
    }
  })
  

}

}

