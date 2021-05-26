import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CheckService} from '../check.service';
import {Router} from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';


declare var displayCart: any;

declare var order:any;

declare var clearCart:any;

declare var listCart:any;

declare var totalCost:any;

declare var countCartItems:any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 



clicked:Boolean=false;

price:any;

count:number;

constructor(private hc:HttpClient,public cs:CheckService,private router:Router,private spinner: NgxSpinnerService ) { }

ngOnInit() {
  this.CheckListCart();
  this.price = totalCost();
  this.count=countCartItems();
  
}
showcart()
{

    displayCart();
   
}
requestcart()
{
  if(listCart().length != 0)
  {

    
    this.router.navigate(['shippingaddress']);
    /*
    window.open('#/shippingaddress', '_blank');
    */
    
  }
  else
  {
    alert("choose any item");
    this.router.navigate(['/home/minihome']);
  }  
 
}


CheckListCart()
{
  
  
  if(listCart().length != 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}






ClearCart()
{
  clearCart();
  this.clicked = true;
}


}
