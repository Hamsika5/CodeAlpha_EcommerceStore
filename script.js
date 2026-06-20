let cart = 0;

let items = [];

let total = 0;

async function loadProducts(){

const response =
await fetch(
"http://localhost:5000/products"
);

const data =
await response.json();

const search =
document
.getElementById("search")
.value
.toLowerCase();

let output="";

data

.filter(product=>

product.name
.toLowerCase()
.includes(search)

)

.forEach(product=>{

output+=`

<div class="card">

<img
src="${
product.name==="Laptop"

?

"https://picsum.photos/id/180/250/150"

:

"https://picsum.photos/id/160/250/150"

}"

>

<h2>${product.name}</h2>

<p>₹${product.price}</p>

<p>${product.description}</p>

<button
onclick=
"addToCart('${product.name}')"
>

Add To Cart

</button>

</div>

`;

});

document.getElementById(
"products"
).innerHTML=
output;

}

function addToCart(name){

cart++;

items.push(name);

if(name==="Laptop"){

total+=50000;

}

else{

total+=25000;

}

updateCart();

}

function removeItem(index){

if(items[index]==="Laptop"){

total-=50000;

}

else{

total-=25000;

}

items.splice(index,1);

cart--;

updateCart();

}

function updateCart(){

document.getElementById(
"cart"
).innerText=
`Cart: ${cart}`;

let html="<h3>Items:</h3>";

items.forEach((item,index)=>{

html+=`

<p>

${item}

<button
onclick=
"removeItem(${index})"
>

❌

</button>

</p>

`;

});

document.getElementById(
"cartItems"
).innerHTML=
html;

document.getElementById(
"total"
).innerText=
`Total: ₹${total}`;

}

function checkout(){

if(cart===0){

alert(
"Cart is Empty"
);

}

else{

alert(
"Order Placed Successfully"
);

cart=0;

items=[];

total=0;

updateCart();

}

}

loadProducts();

function showLogin(){

document.getElementById(
"loginBox"
).innerHTML=

`

<input
id="email"
placeholder="Email"
>

<br><br>

<input
type="password"

id="password"

placeholder="Password"
>

<br><br>

<button
onclick="login()"
>

Submit

</button>

`;

}

function login(){

const email=

document
.getElementById(
"email"
)
.value;

alert(

"Welcome "+email

);

}
function showLogin(){

document.getElementById(
"loginBox"
).innerHTML =

`

<input

id="email"

placeholder="Email"

>

<br><br>

<input

type="password"

id="password"

placeholder="Password"

>

<br><br>

<button

onclick="login()"

>

Submit

</button>

`;

}

function login(){

const email=

document
.getElementById(
"email"
)
.value;

document
.getElementById(
"loginBtn"
)
.innerText=

"Welcome, "+email;

document
.getElementById(
"loginBox"
)
.innerHTML="";

document
.getElementById(
"logoutBox"
)
.innerHTML=

`

<button
onclick="logout()"
>

Logout

</button>

`;

}

function logout(){

document
.getElementById(
"loginBtn"
)
.innerText=

"Login";

document
.getElementById(
"logoutBox"
)
.innerHTML="";

}

async function addProduct(){

const name =
document.getElementById(
"newName"
).value;

const price =
document.getElementById(
"newPrice"
).value;

const description =
document.getElementById(
"newDesc"
).value;

await fetch(

"http://localhost:5000/products",

{

method:"POST",

headers:{

"Content-Type":
"application/json"

},

body:

JSON.stringify({

name,
price,
description

})

}

);

alert(
"Product Saved"
);

loadProducts();

}