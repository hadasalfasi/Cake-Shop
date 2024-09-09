const a1 = document.getElementById('a1')
const a2 = document.getElementById('a2')
const a3 = document.getElementById('a3')
const a4 = document.getElementById('a4')
const a5 = document.getElementById('a5')
const cake = document.getElementById('cake')

const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')
const b4 = document.getElementById('b4')
const b5 = document.getElementById('b5')

let myItemheart ;
let myItemcircle;
$.ajax({
  url: './product.json',
  success: (data) => {
    console.log(data.products);
    arrp = data.products
    myItemheart = arrp.find(x=>x.id===16);
    myItemcircle=arrp.find(x=>x.id===17)

    // printproduct(arrp);
  },

  error: (error) => {
    console.log(error);
  }

})
let paytemp = 0
let cnttemp = 0
let pay = 0;
let cnt = 0;
const countproducts = JSON.parse(localStorage.getItem('cntproducts'))
const sumtopay = JSON.parse(localStorage.getItem('sumtopay'))
let nop1 = document.getElementById('nop');
nop1.innerHTML = JSON.parse(localStorage.getItem('cntproducts'));
const pro = document.createElement('div')
const iconc = document.getElementById('circle')
const iconh = document.getElementById('heart')
// icon.className = "fas fa-shopping-bag size"
// pro.appendChild(icon)
let arrp = []
let arrt = []

let container = document.getElementById('container');
console.log(iconc);
// if(iconc)
iconc.addEventListener('click', () => {
    console.log('ggg');
  if (!(localStorage.getItem('loggedInUser'))) {
    alert("אין אפשרות רכישה ללא הרשמה")
  }
  else {
    console.log("5555555555");

    var popup = document.getElementById('popup')
    const prdct = document.getElementById('prdct')
    popup.style.display = "block";
    prdct.innerHTML = "  עיגולהעוגה שלי";
    prdct.style.display = 'flex'
    prdct.style.direction = 'rtl'
    let cart = JSON.parse(localStorage.getItem('bagarr')) || [];
    myItemcircle.user = JSON.parse(localStorage.getItem('loggedInUser')).email
    cart.push(myItemcircle)
    localStorage.setItem('bagarr', JSON.stringify(cart))
    cnttemp = JSON.parse(localStorage.getItem('cntproducts')) || 0
    cnttemp++;
    localStorage.setItem("cntproducts", JSON.stringify(cnttemp));
    paytemp = JSON.parse(localStorage.getItem('sumtopay'))+parseFloat(150) 
    console.log(paytemp);
    localStorage.setItem("sumtopay",JSON.stringify(paytemp));

    const closeButton = document.getElementById('closeButton')
    const closePopup = () => {
      popup.style.display = "none";
    }
    setTimeout(closePopup, 1000)
    closeButton.addEventListener("click", closePopup)

    nop1.innerHTML = JSON.parse(localStorage.getItem('cntproducts'));
    sumcake.innerHTML=JSON.parse(localStorage.getItem('sumtopay'))
  }
  console.log("74741474141");
})
container.appendChild(pro)
// let adds=document.querySelector('adds')

iconh.addEventListener('click', () => {

  if (!(localStorage.getItem('loggedInUser'))) {
    alert("אין אפשרות רכישה ללא הרשמה")
  }
  else {
    console.log("5555555555");

    var popup = document.getElementById('popup')
    const prdct = document.getElementById('prdct')
    popup.style.display = "block";
    prdct.innerHTML = "העוגה שלי";
    prdct.style.display = 'flex'
    prdct.style.direction = 'rtl'
    let cart = JSON.parse(localStorage.getItem('bagarr')) || [];
    myItemheart.user = JSON.parse(localStorage.getItem('loggedInUser')).email
    cart.push(myItemheart)
    localStorage.setItem('bagarr', JSON.stringify(cart))
    cnttemp = JSON.parse(localStorage.getItem('cntproducts')) || 0
    cnttemp++;
    localStorage.setItem("cntproducts", JSON.stringify(cnttemp));
    paytemp = JSON.parse(localStorage.getItem('sumtopay'))+parseFloat(150) 
    console.log(paytemp);
    localStorage.setItem("sumtopay",JSON.stringify(paytemp));

    const closeButton = document.getElementById('closeButton')
    const closePopup = () => {
      popup.style.display = "none";
    }
    setTimeout(closePopup, 1000)
    closeButton.addEventListener("click", closePopup)

    nop1.innerHTML = JSON.parse(localStorage.getItem('cntproducts'));
    sumcake.innerHTML=JSON.parse(localStorage.getItem('sumtopay'))
  }
  console.log("74741474141");
})
container.appendChild(pro)
// let adds=document.querySelector('adds')


let sumcakefrut = document.getElementById('sumcakefrut')
let sumcakechoclate = document.getElementById('sumcakechoclate')
// let howmanyfrut;
localStorage.setItem('howmanyfrut',JSON.stringify(0))
localStorage.setItem('howmaychoclate',JSON.stringify(0))

// let howmanychoclate;
let addfrut=0
let mintime
a1.onclick = () => {
  b3.style.display = 'flex'
  addfrut = JSON.parse(localStorage.getItem('sumtopay'))+parseFloat(30) 
   localStorage.setItem("sumtopay",JSON.stringify(addfrut));
   sumcakefrut.innerHTML=JSON.parse(localStorage.getItem('sumtopay'))
    mintime= JSON.parse(localStorage.getItem('howmanyfrut'))+1
   localStorage.setItem('howmanyfrut',mintime)
   mintime=0
}

let choise=0;
const add2 = () => {
  if(a3.style.display==='none'){
    a3.style.display = 'flex';
    addfrut = JSON.parse(localStorage.getItem('sumtopay'))+parseFloat(30) 
    localStorage.setItem("sumtopay",JSON.stringify(addfrut));
    choise++;
    sumcakefrut.innerHTML=(choise)*30+' +150'
    mintime= JSON.parse(localStorage.getItem('howmanyfrut'))+1
    localStorage.setItem('howmanyfrut',mintime)
    mintime=0
  }
  else{
    a3.style.display = 'none';
  addfrut = JSON.parse(localStorage.getItem('sumtopay'))-parseFloat(30) 
  localStorage.setItem("sumtopay",JSON.stringify(addfrut));
  choise--
  sumcakefrut.innerHTML=(choise)*30+' +150'
  mintime= JSON.parse(localStorage.getItem('howmanyfrut'))-1
  localStorage.setItem('howmanyfrut',mintime)
  mintime=0
  }
  
}
const add3 = () => {
  if(a1.style.display==='none'){
    a1.style.display = 'flex';
    addfrut = JSON.parse(localStorage.getItem('sumtopay'))+parseFloat(30) 
    localStorage.setItem("sumtopay",JSON.stringify(addfrut));
    choise++;
    sumcakefrut.innerHTML=(choise)*30+' +150'
    mintime= JSON.parse(localStorage.getItem('howmanyfrut'))+1
    localStorage.setItem('howmanyfrut',mintime)
    mintime=0
  }
  else{
    a1.style.display = 'none';
  addfrut = JSON.parse(localStorage.getItem('sumtopay'))-parseFloat(30) 
  localStorage.setItem("sumtopay",JSON.stringify(addfrut));
  choise--
  sumcakefrut.innerHTML=(choise)*30+' +150'
  mintime= JSON.parse(localStorage.getItem('howmanyfrut'))-1
  localStorage.setItem('howmanyfrut',mintime)
  mintime=0
  }
  
}

const add4 = () => { 
   if(a4.style.display==='none'){
  a4.style.display = 'flex';
  addfrut = JSON.parse(localStorage.getItem('sumtopay'))+parseFloat(30) 
  localStorage.setItem("sumtopay",JSON.stringify(addfrut));
  choise++
  sumcakefrut.innerHTML=(choise)*30+' +150'
  mintime= JSON.parse(localStorage.getItem('howmanyfrut'))+1
  localStorage.setItem('howmanyfrut',mintime)
  mintime=0
}
else{
  a4.style.display = 'none';
addfrut = JSON.parse(localStorage.getItem('sumtopay'))-parseFloat(30) 
localStorage.setItem("sumtopay",JSON.stringify(addfrut));
choise--
sumcakefrut.innerHTML=(choise)*30+' +150'
mintime= JSON.parse(localStorage.getItem('howmanyfrut'))-1
localStorage.setItem('howmanyfrut',mintime)
mintime=0
}
;

}
const add = () => {
  if(a5.style.display==='none'){
    a5.style.display = 'flex';
    addfrut = JSON.parse(localStorage.getItem('sumtopay'))+parseFloat(30) 
    localStorage.setItem("sumtopay",JSON.stringify(addfrut));
    choise++
    sumcakefrut.innerHTML=(choise)*30+' +150'
    mintime= JSON.parse(localStorage.getItem('howmanyfrut'))+1
    localStorage.setItem('howmanyfrut',mintime)
    mintime=0
  }
  else{
    a5.style.display = 'none';
  addfrut = JSON.parse(localStorage.getItem('sumtopay'))-parseFloat(30) 
  localStorage.setItem("sumtopay",JSON.stringify(addfrut));
  choise--
  sumcakefrut.innerHTML=(choise)*30+' +150'
  mintime= JSON.parse(localStorage.getItem('howmanyfrut'))-1
  localStorage.setItem('howmanyfrut',mintime)
  mintime=0
  }
  
}

const add5 = () => {
  if(a2.style.display==='none'){
    a2.style.display = 'flex';
    addfrut = JSON.parse(localStorage.getItem('sumtopay'))+parseFloat(30) 
    localStorage.setItem("sumtopay",JSON.stringify(addfrut));
    choise++
    sumcakefrut.innerHTML=(choise)*30+' +150'
    mintime= JSON.parse(localStorage.getItem('howmanyfrut'))+1
    localStorage.setItem('howmanyfrut',mintime)
    mintime=0
  }
  else{
    a2.style.display = 'none';
  addfrut = JSON.parse(localStorage.getItem('sumtopay'))-parseFloat(30) 
  localStorage.setItem("sumtopay",JSON.stringify(addfrut));
  choise--
  sumcakefrut.innerHTML=(choise)*30+' +150'
  mintime= JSON.parse(localStorage.getItem('howmanyfrut'))-1
  localStorage.setItem('howmanyfrut',mintime)
  mintime=0
  }
  
}

// sumcake.innerHTML = JSON.parse(localStorage.getItem('sumtopay'))


let choise2=0;

const v1 = () => {
  if(c1.style.display==='none'){
    c1.style.display = 'flex';
    addfrut = JSON.parse(localStorage.getItem('sumtopay'))+parseFloat(30) 
    localStorage.setItem("sumtopay",JSON.stringify(addfrut));
    choise2++
    sumcakechoclate.innerHTML=choise2*30+' +150'
    mintime= JSON.parse(localStorage.getItem('howmaychoclate'))+1
    localStorage.setItem('howmaychoclate',mintime)
    mintime=0
  }
  else{
    c1.style.display = 'none';
  addfrut = JSON.parse(localStorage.getItem('sumtopay'))-parseFloat(30) 
  localStorage.setItem("sumtopay",JSON.stringify(addfrut));
  choise2--
  sumcakechoclate.innerHTML=choise2*30+' +150'
  mintime= JSON.parse(localStorage.getItem('howmaychoclate'))-1
  localStorage.setItem('howmaychoclate',mintime)
  mintime=0
  }
  
}

const v2 = () => {
  if(c2.style.display==='none'){
    c2.style.display = 'flex';
    addfrut = JSON.parse(localStorage.getItem('sumtopay'))+parseFloat(30) 
    localStorage.setItem("sumtopay",JSON.stringify(addfrut));
    choise2++
    sumcakechoclate.innerHTML=choise2*30+' +150'
    mintime= JSON.parse(localStorage.getItem('howmaychoclate'))+1
    localStorage.setItem('howmaychoclate',mintime)
    mintime=0
  }
  else{
    c2.style.display = 'none';
  addfrut = JSON.parse(localStorage.getItem('sumtopay'))-parseFloat(30) 
  localStorage.setItem("sumtopay",JSON.stringify(addfrut));
  choise2--
  sumcakechoclate.innerHTML=choise2*30+' +150'
  mintime= JSON.parse(localStorage.getItem('howmaychoclate'))-1
  localStorage.setItem('howmaychoclate',mintime)
  mintime=0
  }
  
}

const v3 = () => {
  if(c3.style.display==='none'){
    c3.style.display = 'flex';
    addfrut = JSON.parse(localStorage.getItem('sumtopay'))+parseFloat(30) 
    localStorage.setItem("sumtopay",JSON.stringify(addfrut));
    choise2++
    sumcakechoclate.innerHTML=choise2*30+' +150'
    mintime= JSON.parse(localStorage.getItem('howmaychoclate'))+1
    localStorage.setItem('howmaychoclate',mintime)
    mintime=0
  }
  else{
    c3.style.display = 'none';
  addfrut = JSON.parse(localStorage.getItem('sumtopay'))-parseFloat(30) 
  localStorage.setItem("sumtopay",JSON.stringify(addfrut));
  choise2--
  sumcakechoclate.innerHTML=choise2*30+' +150'
  mintime= JSON.parse(localStorage.getItem('howmaychoclate'))-1
  localStorage.setItem('howmaychoclate',mintime)
  mintime=0
  }
  
}
const v4 = () => {
  if(c4.style.display==='none'){
    c4.style.display = 'flex';
    addfrut = JSON.parse(localStorage.getItem('sumtopay'))+parseFloat(30) 
    localStorage.setItem("sumtopay",JSON.stringify(addfrut));
    choise2++
    sumcakechoclate.innerHTML=choise2*30+' +150'
    mintime= JSON.parse(localStorage.getItem('howmaychoclate'))+1
    localStorage.setItem('howmaychoclate',mintime)
    mintime=0
  }
  else{
    c4.style.display = 'none';
  addfrut = JSON.parse(localStorage.getItem('sumtopay'))-parseFloat(30) 
  localStorage.setItem("sumtopay",JSON.stringify(addfrut));
  choise2--
  sumcakechoclate.innerHTML=choise2*30+' +150'
  mintime= JSON.parse(localStorage.getItem('howmaychoclate'))-1
  localStorage.setItem('howmaychoclate',mintime)
  mintime=0
  }
  
}
const v5 = () => {
  if(c5.style.display==='none'){
    c5.style.display = 'flex';
    addfrut = JSON.parse(localStorage.getItem('sumtopay'))+parseFloat(30) 
    localStorage.setItem("sumtopay",JSON.stringify(addfrut));
    choise2++
    sumcakechoclate.innerHTML=choise2*30+' +150'
    mintime= JSON.parse(localStorage.getItem('howmaychoclate'))+1
    localStorage.setItem('howmaychoclate',mintime)
    mintime=0
  }
  else{
    c5.style.display = 'none';
  addfrut = JSON.parse(localStorage.getItem('sumtopay'))-parseFloat(30) 
  localStorage.setItem("sumtopay",JSON.stringify(addfrut));
  choise2--
  sumcakechoclate.innerHTML=choise2*30+' +150'
  mintime= JSON.parse(localStorage.getItem('howmaychoclate'))-1
  localStorage.setItem('howmaychoclate',mintime)
  mintime=0
  }
  
}


