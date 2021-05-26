
productarray=[];




function changeData(id)
{
    var image = id.getAttribute("src");
    var name = id.getAttribute("data-name");
    var price = id.getAttribute("data-price");
    var per = id.getAttribute("data-per");
    
    productarray.push(image);
    productarray.push(name);
    productarray.push(price);
    productarray.push(per);
    
    //console.log(productarray);
    return productarray;
}

function clearProductarray()
{
    productarray=[];
}


function size(id)
{
    var size=id.getAttribute("value");
    //console.log(size)
    return size;
}















//cart 

cart = [];

var Item = function(image,name,price,size,count)
{
    this.image=image;
    this.name = name;
    this.price = price;
    this.size = size;
    this.count = count;
}



function change1Text(id)
{
    var image = id.getAttribute("data-img");
    var name = id.getAttribute("data-name");
    var price = id.getAttribute("data-price");
    var size = '--';
    return addToCart(image,name,price,size,1);
    
    
    
}

function change2Text(id)
{
    var Cname = id.getAttribute("data-name")
    return Cname;
}




function changeText(id)
{
    var image = id.getAttribute("data-img");
    var name = id.getAttribute("data-name");
    var price = id.getAttribute("data-price");
    var size = id.getAttribute("data-size");
    
    
    if(size==null)
    {
       
        return "Select Size";
    }
    return addToCart(image,name,price,size,1);
    
    
    
}





//display cart
function displayCart()
{
    var cartArray = listCart();

    if(cartArray.length == 0)
    {
        document.getElementById("demo").innerHTML = "<h3 style='text-align:center;'>--NO ITEMS--</h3>"
        return;
    }
    
    
    var output = "";
    output += "<table style='font-weight:500;' width='100%'><th>PRODUCT</th><th style='text-align:center'>PRICE</th><th style='text-align:center'>SIZE</th style='text-align:center'><th>COUNT</th><th></th>"
    
    for(var i in cartArray)
    {
        output += "<tr style='border: 1px solid white;  color:#696969; border-collapse: collapse; background-color: #eee'><td><img style='width:45px;' src='"+cartArray[i].image+"'>"+cartArray[i].name+"</td><td style='text-align:center'>₹"+cartArray[i].price+"</td><td style='text-align:center'>"+cartArray[i].size+" </td><td style='text-align:center'> <i class='fa fa-caret-up' aria-hidden='true' onclick='increment("+i+")'></i>  "+cartArray[i].count+"  <i class='fa fa-caret-down' aria-hidden='true' onclick='decrement("+i+")'></i> </td><td style='text-align:center'><i class='fa fa-trash' aria-hidden='true' onclick='delElement("+i+")'></i> </td></tr>"
        
    }
    
    
    output +="<tr><td></td><td><b>TOTAL COST : </b>₹"+totalCost()+"</td><td><b>TOTAL ITEMS:</b>"+countCartItems()+"</td></tr></table>"
    
    document.getElementById("demo").innerHTML = output;
    
   
    

    
    
}

function increment(i)
{
    /*
    var cartArray = listCart();
    for(var p in cartArray )
    {
        if(p.name == i)
        {
            p.count++;
            totalprice();
        }
    }
    */
   //console.log(i)
   if(cart[i].count >= 5)
   {
       /*alert("Limit exceeded");*/
       return;
   }
   else
   {
    cart[i].count++;
   }
   displayCart();  
   saveCart(); 
}

function decrement(i)
{
   //console.log(i)
   cart[i].count--;
   if(cart[i].count==0)
   {
       delElement(i);
   }
   displayCart();  
   saveCart(); 
}




function delElement(i)
{
    cart.splice(i,1);
    //console.log(cart)
    displayCart();  
    saveCart(); 
}





//removeAllItems();







function addToCart(image,name,price,size,count)
{
    if(cart.length >= 5)
    {
       /* alert("cart is full"); */
        return "cart is full";
    }
    for(var i in cart)
    {
        if(cart[i].name==name && cart[i].size==size)
        {
            if(cart[i].count >=5)
            {   
                /* alert("Limit Exceeded"); */
                return "Limit Exceeded";
            }
            cart[i].count+=count;
            /*alert("Item is added to Cart") */
            return "Item is added to Cart";                 
        }
    }
    

    var item = new Item(image,name,price,size,count)
    cart.push(item)
    /*alert("Item is added to Cart");*/
    listCart();
    //console.log(cart,"cart size:",cart.size)
    saveCart();
    return "Item is added to Cart";
    
}

function listCart()
{
    var cartcopy =[];
    for(var i in cart)
    {
        var x ="<hr>"
       var item = cart[i];
       var itemcopy = {};
       for(var p in item)
       {
          itemcopy[p] = item[p];
       }
       x += itemcopy;
       x +="<hr>"
       cartcopy.push(itemcopy);
    }
    //console.log(cartcopy)
     return cartcopy;
}




//remove cart element
function removeCartItem(name)
{
    for(var i in cart)
    {
        if(cart[i].name==name)
        {
            cart[i].count--;
            if(cart[i].count === 0)
            {
                cart.splice(i,1);
                return;
            }
            return;
        }
    }
    saveCart();
}





//remove entire element from cart
function removeAllItems(name)
{
    for(var i in cart)
    {
        if(cart[i].name === name)
        {
            cart.splice(i,1);
            return;
        }
        
    }
    saveCart();
}




//clear cart
function clearCart()
{
    cart = []; //cart.length=0
    displayCart();
    //console.log(cart);
    saveCart();
}



function tempCartClear()
{
    cart=[];
    saveCart();
}

//clearCart();


//count cart items
function countCartItems()
{
    cartcount = 0;
    for(var i in cart)
    {
        cartcount += cart[i].count;
    }
    //console.log(cartcount);
    return cartcount;
}




//total price(cost) of Items in cart
function totalCost()
{
    totalprice = 0; 
    for(var i in cart)
    {
        totalprice += cart[i].price * cart[i].count;
    }
    return totalprice.toFixed(2);
    
    
}





//list cart........without any actual properties
function listCart()
{
    
    var cartcopy =[];
    for(var i in cart)
    {
       var item = cart[i];
       var itemcopy = {};
       for(var p in item)
       {
          itemcopy[p] = item[p];
       }
       cartcopy.push(itemcopy);
    }
    
    return cartcopy;
}






//save cart...in local storage
function saveCart()
{
    localStorage.setItem("shoppingcart",JSON.stringify(cart));
}

//load cart .....from local storage
function loadCart()
{
    cart = JSON.parse(localStorage.getItem("shoppingcart"));
}


var lastestcart = loadCart();
//console.log(lastestcart);








function reloadcart()
{
    if(cart==null)
    {
        cart=[];
        //console.log("working");
    }
}

reloadcart();

//console.log(cart);





