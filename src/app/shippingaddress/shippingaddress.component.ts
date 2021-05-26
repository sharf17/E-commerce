import { Component, OnInit } from '@angular/core';
import {CheckService} from '../check.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginserviceService } from '../loginservice.service';
import { NgxSpinnerService } from 'ngx-spinner';


declare var countCartItems:any;

declare var totalCost:any;

declare var listCart:any;

declare var tempCartClear:any;

@Component({
  selector: 'app-shippingaddress',
  templateUrl: './shippingaddress.component.html',
  styleUrls: ['./shippingaddress.component.css']
})
export class ShippingaddressComponent implements OnInit {

  resultobj:any;
  array1:any;
  items:any;
  userobj = {username:''};
  count:number;
  price:any;
  Userdetails:any;
  
  months=["FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
  
  years = ["2022","2023","2024","2025","2026","2027","2028","2029","2030"]

  states = ["ANDHRA PRADESH","KERALA","TAMIL NADU"]

  orderobj={
    userdetails:[],
    items:[],
    addressandpayment:[]
    };




  constructor(public cs:CheckService,private router:Router,private hc:HttpClient,private ls:LoginserviceService,private spinner: NgxSpinnerService) { }

 

  ngOnInit() { 

    this.sample();
    
   this.sample1()

   this.userobj.username=localStorage.getItem('userid')

   this.hc.post('/profile',this.userobj).subscribe(res=>{
    this.Userdetails = res;
    //console.log(res)
    //console.log(this.Userdetails)
    
  })
  }



  sample()
  {
    this.spinner.show()
    setTimeout(() => {
        
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }

  sample1()
  {
    if(this.ls.isLoggedIn() == true){
      this.count=countCartItems();
      if(this.count == 0)
      {
        this.router.navigate(['/page404notfound']);
        return;
      }
      this.items = listCart();
      this.price = totalCost();
    }
    else{
      this.router.navigate(['/page404notfound']);
    }
  }
  

  onSubmit(data)
  { 
    
    
    //preparing final object
    
    this.orderobj.userdetails.push(this.Userdetails);
    this.orderobj.items.push(listCart());
    this.orderobj.addressandpayment.push(data);
    //console.log(this.orderobj)
    
    //pushing final data to database
    this.hc.post('/order',this.orderobj).subscribe(res=>{
      if(res["message"]=="successfully inserted")
      {
        this.spinner.show()
        setTimeout(() => {
            
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 3000);

        document.getElementById("myModal").style.display = "block";
        
        
        setTimeout(function(){
          document.getElementById("myModal").style.display = "none";
         }, 5000);


        tempCartClear();
        alert("You are Done...Continue shopping")
        
        this.router.navigate(['/home/minihome'])
      }
    })
  }

  

}
