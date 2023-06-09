const products = [
  {
    id: "rec43w3ipXvP28vog",
    title: "high-back bench",
    company: "ikea",
    image:
      "https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg",
    price: 9.99,
  },
  {
    id: "rec4f2RIftFCb7aHh",
    title: "albany table",
    company: "marcos",
    image:
      "https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg",
    price: 79.99,
  },
  {
    id: "rec4f2RIftFCb7aHh",
    title: "albany table",
    company: "marcos",
    image:
      "https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg",
    price: 788.99,
  },
  {
    id: "rec4f2RIftFCb7aHh",
    title: "albany table",
    company: "marcos",
    image:
      "https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg",
    price: 1279.99,
  },
  {
    id: "rec8kkCmSiMkbkiko",
    title: "accent chair",
    company: "caressa",
    image:
      "https://dl.airtable.com/.attachments/f292eaec4fea8a791b037c759ae559c9/2d5e34d5/product-4.jpeg",
    price: 25.99,
  },
  {
    id: "recBohCqQsot4Q4II",
    title: "wooden table",
    company: "caressa",
    image:
      "https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg",
    price: 45.99,
  },
  {
    id: "recDG1JRZnbpRHpoy",
    title: "dining table",
    company: "caressa",
    image:
      "https://dl.airtable.com/.attachments/06bbede65bd09196b4a81a8e7b59e683/8af0aeb5/product-8.jpg",
    price: 6.99,
  },
  {
    id: "recNWGyP7kjFhSqw3",
    title: "sofa set",
    company: "liddy",
    image:
      "https://dl.airtable.com/.attachments/443aa7884207dae7c3cc127262a2f993/d4f33110/product-1.jpeg",
    price: 69.99,
  },
  {
    id: "recZEougL5bbY4AEx",
    title: "modern bookshelf",
    company: "marcos",
    image:
      "https://dl.airtable.com/.attachments/a889b1928b134c2ca0b5bbca32ea9abf/65c8a9a6/product-7.jpg",
    price: 8.99,
  },
  {
    id: "recjMK1jgTb2ld7sv",
    title: "emperor bed",
    company: "liddy",
    image:
      "https://dl.airtable.com/.attachments/10fdf29ae17f2d1f98770ae42584d021/82b9403f/product-6.jpg",
    price: 21.99,
  },
  {
    id: "recmg2a1ctaEJNZhu",
    title: "utopia sofa",
    company: "marcos",
    image:
      "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
    price: 39.95,
  },
  {
    id: "recvKMNR3YFw0bEt3",
    title: "entertainment center",
    company: "liddy",
    image:
      "https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg",
    price: 29.98,
  },
  {
    id: "recxaXFy5IW539sgM",
    title: "albany sectional",
    company: "ikea",
    image:
      "https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg",
    price: 10.99,
  },
  {
    id: "recyqtRglGNGtO4Q5",
    title: "leather sofa",
    company: "liddy",
    image:
      "https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg",
    price: 9.99,
  },
];
display(products);

function display(products) {
  let data = products.map(function (value,index) {
    return `<!-- products -->

      
 
  <div class="products-container" id="products">
    <!-- single product -->
    <article class="product">
      <img
        src=${value.image}
        class="product-img img"
        alt=""
      />
      <footer>
        <h5 class="product-name">${value.title}</h5>
        <span class="product-price">${value.price}</span>
      
        
        <button type="button" class="btn btn-primary"  onclick="addtocart(${index})">add tocart</button>
      </footer>
    </article>
   
   
  </div>
  </section>`;
  });

  let d = products.map(function (value) {
    return `<div class="filters-container">
  <article class="companies" id="companies">
  <button class="company-btn"  onclick="filterbutton('${value.company}')"> ${value.company}</button>
  </article>
  </div>`;
  });
  document.getElementById("companies").innerHTML = d.join("");
  document.getElementById("products").innerHTML = data.join("");
}

function filterbutton(company) {
  let filterarray = products.filter(function (value) {
    return value.company == company;
  });
  console.log(filterarray);
  display(filterarray);
}
function myFunction(){
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}
function price1(){
  

    let pricearray=products.sort(function(a,b){
if (a.price>b.price){
  return 1;

}
else{
  return -1;
}
    });
console.log(pricearray);
   display(pricearray); 
  }


  function prod(){
  

    let prodarray=products.sort(function(a,b){
if (a.title>b.title){
  return 1;

}
else{
  return -1;
}
    });
console.log(prodarray);
   display(prodarray); 
  }

  let carts=[];
  function addtocart(index) {
    let d = products[index];
    let myindex = carts.findIndex(function (value) {
      return value.title == d.title;
    });
    // console.log(d);
    //carts.push(d);
    //console.log(carts);
    if (myindex < 0) {
      d["quan"] = 1;
      carts.push(d);
    } else {
      carts[index].quan = carts[index].quan + 1;
    }
    document.getElementById("d").innerText=carts.length;
    console.log(carts);
  }
  function price()
{
  let p=carts.reduce(function(pre,cuu){
    return pre+cuu.quan*cuu.price;
  },0)
  console.log(p);
  document.getElementById("s").innerText=p;
  
}