import { Component, OnInit } from '@angular/core';
import {LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';

declare const changeText: any;

declare const order:any;

declare const clearCart: any;

declare const listCart:any;

declare var displayCart: any;

declare var clearProductarray: any;

declare var changeData: any;

@Component({
  selector: 'app-handbags',
  templateUrl: './handbags.component.html',
  styleUrls: ['./handbags.component.css']
})
export class HandbagsComponent implements OnInit {

  viewproductdetails:[];
  viewproductdetail:any;
  obj1:{p:any,price:number}

  constructor(private ls:LoginserviceService,private router:Router) { }

  ngOnInit() {
  }
  
  addToCart(event)
  {
    if(this.ls.isLoggedIn() == true)
    {
      changeText(event.target);
    }
    else
    {
      alert("You need to login first");
    }
  }


  viewTopware(event)
  {
    
    
    //console.log(event.target)
    var target = event.target;
    //console.log(event.target.src);
    clearProductarray();
    this.viewproductdetails= changeData(event.target);
    
    //console.log(this.viewproductdetails)
    /*
    this.viewproductdetails.[0].image.push();
    this.viewproductdetails.price=(43);
    */
    localStorage.removeItem('productView');
    localStorage.setItem('productView', JSON.stringify(this.viewproductdetails));
    
    this.router.navigate(['/home/viewproduct4']);
    
    /*
    window.open('#/home/viewproduct', '_blank');
    */
  }

    //gotoup function
    gotoup()
    {
      this.router.navigate(['/home/handbags'])
    }


 


}
