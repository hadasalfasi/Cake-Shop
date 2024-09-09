const connect = document.getElementById('conect');
const connectForm = document.getElementById('connectFrom');
const registerButton = document.getElementById('registerButton');
const loginButton = document.getElementById('loginButton');
const registrationForm = document.getElementById('registrationForm');
const loginForm = document.getElementById('loginForm');
console.log("hi word!!");
let out=document.getElementById('out')
out.onclick=()=>{
    localStorage.removeItem('loggedInUser')
    // localStorage.setItem('loggedInUser',JSON.stringify(null))
    localStorage.setItem('bagarr',JSON.stringify(null))
    localStorage.setItem('cntproducts',JSON.stringify(null))
    localStorage.setItem('sumtopay',JSON.stringify(null))
    window.location.href="index.html"
    out.style.display='none';
}
let nop2=document.getElementById('nop');
nop2.innerHTML=JSON.parse(localStorage.getItem('cntproducts'));
connect.addEventListener('click', function() {
    connectFrom.style.display = 'flex';
  });
  registerButton.addEventListener('click', function() {
    registrationForm.style.display = 'block';
    loginForm.style.display = 'none';
  });
  
  loginButton.addEventListener('click', function() {
    registrationForm.style.display = 'none';
    loginForm.style.display = 'block';
  });
  const closeButton = document.getElementById('close');
  closeButton.addEventListener('click', function() {
    connectFrom.style.display = 'none';
  });



const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");

function validatePassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Check if passwords match
    if (password !== confirmPassword) {
        confirmPasswordInput.setCustomValidity("Passwords don't match");
    } else {
        confirmPasswordInput.setCustomValidity("");
    }
}

function enableSubmitButton() {
    submitBtn.disabled = false;
}

passwordInput.addEventListener("input", validatePassword);
confirmPasswordInput.addEventListener("input", validatePassword);
confirmPasswordInput.addEventListener("input", enableSubmitButton);

function toggleUser() {
    const greetingElement = document.getElementById('greeting');
    const changeUserButton = document.getElementById('changeUser');
    const connectFrom = document.getElementById('connectfrom');
  
    if (localStorage.getItem('loggedInUser')) {
        greetingElement.style.display = 'none';
        changeUserButton.style.display = 'block';
        connectFrom.style.display = 'none';
    } else {
        greetingElement.style.display = 'block';
        changeUserButton.style.display = 'none';
        connectFrom.style.display = 'flex';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const greetingElement = document.getElementById('greeting');
  
    if (loggedInUser) {
      if(greetingElement){
      greetingElement.textContent = 'Hi ' + loggedInUser.firstName + '!';
     } 
    } else {
    if(greetingElement){
      greetingElement.textContent = 'Hello, guest';
      }
    }
  });
  
  connect.addEventListener('click', function() {
    connectFrom.style.display = 'flex';
  });
  
  closeButton.addEventListener('click', function() {
    connectFrom.style.display = 'none';
  });
  
  registerButton.addEventListener('click', function() {
    registrationForm.style.display = 'block';
    loginForm.style.display = 'none';
  });
  
  loginButton.addEventListener('click', function() {
    registrationForm.style.display = 'none';
    loginForm.style.display = 'block';
  });
  
  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const isEmailRegistered = users.some(function(user) {
      return user.email === email;
    });
  
    if (isEmailRegistered) {
      alert("This email is already registered. Please use a different email.");
      return;
    }
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      };
    
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('loggedInUser', JSON.stringify(newUser));
      window.location.href = 'index.html';
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
      
        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const matchedUser = users.find(function(user) {
          return user.email === loginEmail && user.password === loginPassword;
        });
        if (matchedUser) {
          localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
          window.location.href = 'index.html';
        } else {
          alert('Invalid email or password');
        }
      });
      function togglePasswordVisibility() {
        const passwordInput = document.getElementById('password');
        const toggleIcon = document.getElementById('psd');
        const passwordInput2 = document.getElementById('password');
      
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          toggleIcon.classList.add('visible');
        } else {
          passwordInput.type = 'password';
          toggleIcon.classList.remove('visible');
        }
      }

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('psd');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.classList.add('visible');
    } else {
      passwordInput.type = 'password';
      toggleIcon.classList.remove('visible');
    }
}
function togglePasswordVisibility2() {
  const passwordInput = document.getElementById('loginPassword');
  const toggleIcon = document.getElementById('psd1');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.classList.add('visible');
  } else {
    passwordInput.type = 'password';
    toggleIcon.classList.remove('visible');
  }}
  let m=document.getElementById('m')
  
  m.onclick=()=>{
    if(!(localStorage.getItem('loggedInUser'))||localStorage.getItem('loggedInUser')==='null'){
      // window.location.href='index.html'
      // alert("אין אפשרות תשלום ללא הרשמה")
      
      
    }
   
  }
  if(localStorage.getItem('loggedInUser')){
    out.style.display='flex'
  }
  // const loggedInUser = localStorage.getItem('loggedInUser');
  // if(loggedInUser!=null)
  // {
  //   console.log('I am here');
  //   out.style.display='flex'
  // }
  // else if(loggedInUser===null){
  //   out.style.display='none'
  // }
  // const logOut=()=>{
  //    console.log('hjhk');
  //   out.style.display='none'
  // }


  // if(JSON.parse(localStorage.getItem('cntproducts'))===0)
  //       {
  //           // let empty=document.getElementById('empty')
  //           // empty.style.display='flex'
  //           // let basket=document.getElementById('photo')
  //           // basket.style.display='flex'
  //           let h11=document.getElementById('h1')
  //           h11.style.display='none'
  //           let concluss=document.getElementById('side')
  //           concluss.style.display='none'
  //           pi.style.display='flex'
  //           let topayy=document.getElementById('topay')
  //           topayy.style.display='none'
  //           let formToPayy = document.getElementById("formToPay");
  //           formToPayy.style.display = "none";
    
  //       }
