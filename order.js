debugger
let arrp = []
let arrt=[]


let out1=document.getElementById('out');
let paytemp=0
let cnttemp=0
let pay = 0;
let cnt = 0;

let printproduct = (_arrp) => {
    let container = document.getElementById('container');
    _arrp.forEach(p => {

        const pro = document.createElement('div')
        const icon = document.createElement('i')
        icon.className = "fas fa-shopping-bag size"
        pro.appendChild(icon)
        let pict = document.createElement('img')
        pict.classList.add('img')
        pict.src = p.picture
        pro.appendChild(pict)
        pro.classList.add('productDiv')
        let name = document.createElement('div')
        name.innerHTML = p.name
        pro.appendChild(name)
        let price = document.createElement('div')
        price.innerHTML = p.price
        pro.appendChild(price)
        ///////////////////////////////////
        icon.addEventListener('click',()=>{
        if(!(localStorage.getItem('loggedInUser'))){
          alert("אין אפשרות רכישה ללא הרשמה")
        }
        else{


            var popup=document.getElementById('popup')
            const prdct=document.getElementById('prdct')
            popup.style.display="block";
            prdct.innerHTML=p.name
            prdct.style.display='flex'
            prdct.style.direction='rtl'           
            arrp.map(a=>a.id===p.id?arrt.push(a):'')
            let cart=JSON.parse(localStorage.getItem('bagarr'))||[]
            console.log(cart);
           
            arrt.map(element=>{         
                element.user = JSON.parse(localStorage.getItem('loggedInUser')).email;
                element.flag=0;
              
                cart.push(element)
            });
            localStorage.setItem('bagarr',JSON.stringify(cart))
            arrt=[]
            pay = p.price;
            cnttemp=JSON.parse(localStorage.getItem('cntproducts'))||0
             cnttemp++;
            localStorage.setItem("cntproducts", JSON.stringify(cnttemp));
            paytemp=JSON.parse(localStorage.getItem('sumtopay'))||0
            paytemp= parseFloat(paytemp) + parseFloat(pay);
            localStorage.setItem("sumtopay", JSON.stringify(paytemp));
           
             const closeButton=document.getElementById('closeButton');
            const closePopup=()=>{
            popup.style.display="none";   
            }
            setTimeout(closePopup,1000);
            closeButton.addEventListener("click",closePopup);
           
            nop.innerHTML=JSON.parse(localStorage.getItem('cntproducts'));
     
        }
        // container.appendChild(pro)
    });
       
    container.appendChild(pro)
        
    });
}

//json טעינה של קובץ 
$.ajax({
    url: './product.json',
    success: (data) => {
        console.log(data.products);
        arrp = data.products
        printproduct(arrp);
    },
    
    error: (error) => {
        console.log(error);
    }

})
let nop=document.getElementById('nop');
nop.innerHTML=JSON.parse(localStorage.getItem('cntproducts'));
let textsearch='';
const dom={
    form:document.querySelector('form'),
    searchinp:document.querySelector('#searchinp')
}
const search=(e)=>{
    // e.privent  
    const text=document.getElementById('searchinp').value
    console.log('text',text);
    document.getElementById('container').innerHTML='';
    console.log(arrp);
    let searchArr=[]
    let help = 0
    arrp.map(cont=>{
        // console.log();
        if(cont.name.includes(text)||cont.category.includes(text)){
            searchArr.push(cont)
            help++
            // console.log(text)
            // $("#container").append(`<a href=${cont.name}><img src='${cont.picture}'/> </a>`)
        }
        
    })
    printproduct(searchArr)
    if (help === 0) {
        container.innerHTML = "אין תוצאות עבור החיפוש שלך"
    }
} 


// arrp.forEach=(l)=>{
//     const cat=document.ge
//     function sinoon(item){
//         if(ltem.category===searches){
           
//         }
//     }
// }





