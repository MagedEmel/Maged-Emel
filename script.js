"use strict";

let changText = document.getElementById('services');
const arr = [
    'Web Developer' , 
    'Coder' ,
    'Youtuber'
];
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedLoop() {
    for (let i = 0; i < arr.length; i++) {
        changText.innerHTML = arr[i]
        await delay(1500);
        if (i == 2){
            i = 0 ;
            changText.innerHTML = arr[0]
            await delay(1500);
        }
    }
}
delayedLoop();

document.addEventListener('DOMContentLoaded' ,function() {
    const navBars = document.querySelectorAll('#navbar #navclick');
    navBars.forEach(navBar => {
        navBar.addEventListener('click' ,function(){
            navBars.forEach(i => i.classList.remove('onclick'));
            this.classList.add('onclick');
        })
    })
})

function emailCheak(){
    let userEmail = String(document.getElementById('useremail').value);
    let emailValid = document.getElementById('result');
    let emailAt = userEmail.indexOf('@');
    let emailDot = userEmail.indexOf('.')
    if (emailAt >= 2 && emailDot >= 6){
        emailValid.classList.add('valid');
        emailValid.classList.remove('invalid');
        emailValid.innerHTML = "Email is Valid"
    }else if (emailAt < 2) {
        emailValid.classList.add('invalid');
        emailValid.innerHTML = '@ is not Find in your Email or place is not true'
    }
    else if (emailDot < 6) {
        emailValid.classList.add('invalid');
        emailValid.innerHTML = 'Your Email is does not contain "."'
    }
}
function emailTextReset() {
    let emailValid = document.getElementById('result');
    emailValid.innerHTML = "";
}