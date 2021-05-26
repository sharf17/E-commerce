import { Component, OnInit } from '@angular/core';
import { CheckService } from './../check.service';
import { LoginserviceService } from '../loginservice.service';
import { Router} from '@angular/router';
import { DataService } from '../data.service';

declare const changeText: any;

declare const change2Text: any;

declare const order:any;

declare const clearCart: any;

declare const listCart:any;

declare var displayCart: any;

declare var changeData: any;

declare var clearProductarray: any;

@Component({
  selector: 'app-minihome',
  templateUrl: './minihome.component.html',
  styleUrls: ['./minihome.component.css']
})
export class MinihomeComponent implements OnInit {

  viewproductdetails:[];
  viewproductdetail:any;
  obj1:{p:any,price:number};
  message:any;

  constructor(private ls:LoginserviceService,private router:Router) { }

  ngOnInit() {
  }
  
  addToCart(event)
  {
    this.message = "";
    if(this.ls.isLoggedIn() == true)
    {
      this.message=changeText(event.target);
      document.getElementById("myModal").style.visibility = "visible";
        
      setTimeout(function(){
        document.getElementById("myModal").style.visibility = "hidden"; 
       }, 3000);
      
    }
    else
    {
      this.message = "You need to login first";
      document.getElementById("myModal").style.visibility = "visible";
        
      setTimeout(function(){
        document.getElementById("myModal").style.visibility = "hidden"; 
       }, 3000);
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
    
    this.router.navigate(['/home/viewproduct1']);
    
    /*
    window.open('#/home/viewproduct', '_blank');
    */
  }


  viewTopware2(event)
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
    
    this.router.navigate(['/home/viewproduct3']);
    
    /*
    window.open('#/home/viewproduct1', '_blank');
    */
  }

  viewTopware3(event)
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
    window.open('#/home/viewproduct1', '_blank');
    */
  }

  opencomponent(event)
  {
    var target = event.target;
    var CompName = change2Text(target);
    if(CompName == 'Men')
    {
      this.router.navigate(['/home/men'])
    }
    else if(CompName == 'Women')
    {
      this.router.navigate(['/home/women'])
    }
    else if(CompName == 'kids')
    {
      this.router.navigate(['/home/kids']) 
    }
    else if(CompName == 'Handbags')
    {
      this.router.navigate(['/home/handbags'])
    }
  }


  //gotoup function
  gotoup()
  {
    this.router.navigate(['/home/minihome'])
  }

}
