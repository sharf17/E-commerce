import { Component, OnInit } from '@angular/core';
import { LoginserviceService} from '../loginservice.service';
declare var change1Text:any;
declare var size:any;

@Component({
  selector: 'app-viewproduct6',
  templateUrl: './viewproduct6.component.html',
  styleUrls: ['./viewproduct6.component.css']
})
export class Viewproduct6Component implements OnInit {

  s:any
  viewarray:any;
  message:any;

  constructor(private ls:LoginserviceService) { }

  ngOnInit() {
    this.getitem();
  }

  getitem()
  {
    this.viewarray = JSON.parse(localStorage.getItem("productView"));
    //console.log(this.viewarray)
  }
  addToCart(event)
  {
    this.message = "";
    
    if(this.ls.isLoggedIn() == true)
    {
      this.message = change1Text(event.target);
      //console.log(this.message)
      document.getElementById("myModal").style.visibility = "visible";
        
      setTimeout(function(){
        document.getElementById("myModal").style.visibility = "hidden"; 
       }, 3000);
    }
    else
    {
      this.message= "You Need to login first"
      document.getElementById("myModal").style.visibility = "visible";
        
      setTimeout(function(){
        document.getElementById("myModal").style.visibility = "hidden"; 
       }, 3000);
    }
  }


  choosesize(event)
  {
    this.s=size(event.target);
  }


}
