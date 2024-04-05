'use strict';

const checkinBtn = document.getElementById("checkin-btn");
const checkoutBtn = document.getElementById("checkout-btn");
const cancelBtn = document.getElementById("cancel-btn");
const modal = document.getElementById("modal");

cancelBtn.addEventListener('click', ()=>{
    modal.classList.toggle('hidden');
})
checkinBtn.addEventListener('click', ()=>{
    modal.classList.toggle('hidden');
})
checkoutBtn.addEventListener('click', ()=>{
    modal.classList.toggle('hidden');
})
