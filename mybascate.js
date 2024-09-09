const idarr = JSON.parse(localStorage.getItem('bagarr')) || []
const countproducts = JSON.parse(localStorage.getItem('cntproducts'))
console.log(countproducts);
const sumtopay = JSON.parse(localStorage.getItem('sumtopay'))
let Shopping = document.getElementById('shoping');
let allsum = document.getElementById('allsum')
let numproducts = document.getElementById('numproducts')
let nop5=document.getElementById('nop')
nop5.innerHTML=JSON.parse(localStorage.getItem('cntproducts'))

allsum.innerHTML = parseFloat(sumtopay)
numproducts.innerHTML = countproducts;
let emailLoginUser;
let loginUser = JSON.parse(localStorage.getItem('loggedInUser'));
if(loginUser){
    emailLoginUser = loginUser.email;
}
else{

}
let userArr = idarr.filter(item => item? item.user === emailLoginUser:false);
// console.log("88888888888");
let c = 0
let alllsume = 0
let nummproduct = 0
let pi = document.getElementById('salnone')
let photo = document.getElementById('photo')
let out2=document.getElementById('out')



    let printproducrnew = () => {
      // nop5.innerHTML=JSON.parse(localStorage.getItem('cntproducts'))
        Shopping.innerHTML = "";
        userArr.forEach(p => {
            const pro = document.createElement('div')
            let buut = document.createElement('button')
            buut.classList.add('buut')
            buut.innerHTML = "הסר"
            pro.appendChild(buut)

            buut.onclick = () => {

                 p.flag = 1
                alllsume = JSON.parse(localStorage.getItem('sumtopay')) - p.price;
                nummproduct = JSON.parse(localStorage.getItem('cntproducts')) - 1;
                localStorage.setItem('sumtopay', JSON.stringify(alllsume));
                localStorage.setItem('cntproducts', JSON.stringify(nummproduct));
                nop5.innerHTML=localStorage.getItem('cntproducts')
                // if(!localStorage.getItem('cntproducts'))
                // {
                //   out2.style.display='flex'
                // }
                let temp = userArr.filter(item => item.flag !== 1);
                // userArr = [];
                userArr = temp;
                // temp = [];
                localStorage.setItem('bagarr', JSON.stringify(userArr));
                // p.flag = 0
                printproducrnew();
                allsum.innerHTML = alllsume;
                numproducts.innerHTML = nummproduct
                if(p.id===16)
                {
                  let l=JSON.parse(localStorage.getItem('sumtopay'))-(JSON.parse(localStorage.getItem('howmanyfrut'))*30)
                  localStorage.setItem('sumtopay',l)
                  allsum.innerHTML=localStorage.getItem('sumtopay')
                }
                if(p.id===17){
                  let k=JSON.parse(localStorage.getItem('sumtopay'))-(JSON.parse(localStorage.getItem('howmaychoclate'))*30)
                  localStorage.setItem('sumtopay',k);
                  allsum.innerHTML=localStorage.getItem('sumtopay')
                }

            }
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
            Shopping.appendChild(pro)

        }

        );
        if(JSON.parse(localStorage.getItem('cntproducts')))
        {
          let sum=document.getElementById('sum')
          sum.style.display='flex'
            let h1=document.getElementById('h1')
            h1.style.display='flex'
            let conclus=document.getElementById('side')
            conclus.style.display='flex'
            pi.style.display='none'
            let topay=document.getElementById('topay')
            topay.style.display='flex'
         
    
        }
        else{
          let sum=document.getElementById('sum')
          sum.style.display='none'
            let h1=document.getElementById('h1')
            h1.style.display='none'
            let conclus=document.getElementById('side')
            conclus.style.display='none'
            pi.style.display='flex'
            let topay=document.getElementById('topay')
            topay.style.display='none'
        }
    }
    printproducrnew();


    const but = document.getElementById("topay");
    but.onclick = () => {
      let t = localStorage.getItem("cntproducts");
      if (t > 0) {
        let form = document.getElementById("formToPay");
        form.style.display = "flex";
      } else {
        alert("הסל שלך ריק....");
      }
    };
    let ok = document.getElementById("ok");
    function onSub(event) {
    //   alert("fg");
      // ok.onsubmit = (event) => {
      
      event.preventDefault();
      address = document.getElementById("address").value;
      localStorage.setItem("address", JSON.stringify(address));
    //   window.location.href = "http://127.0.0.1:5500/buy.html"; //'buy.html'
      localStorage.setItem("cntproducts", null);
      localStorage.setItem("bagarr", null);
      localStorage.setItem("sumtopay", JSON.stringify(null));
      window.location.href = "buy.html"
    };




