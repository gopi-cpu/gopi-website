let searchform = document.querySelector('.search-form');
 document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
    shoppinCart.classList.remove('active');
    register.classList.remove('active');
    navbar.classList.remove('active');
 }

 let shoppinCart = document.querySelector('.shopping-cart');
 document.querySelector('#cart-btn').onclick = () => {
    shoppinCart.classList.toggle('active');
    searchform.classList.remove('active');
    register.classList.remove('active');
    navbar.classList.remove('active');
 }

 let register = document.querySelector('.login-form');
 document.querySelector('#login-btn').onclick = () => {
    register.classList.toggle('active');
    shoppinCart.classList.remove('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');
 }


 

 let navbar = document.querySelector('.navbar');
 document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    shoppinCart.classList.remove('active');
    searchform.classList.remove('active');
    register.classList.remove('active');
    
 }

 
window.onscroll = () =>{
    searchform.classList.remove('active');
    shoppinCart.classList.remove('active');
    register.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider",{
   loop : true,
   spaceBetween : 20,
   autoplay :{
      delay :7500,
      disableOnInteraction : false,
   },
   centeredSlides :true,
   breakpoints :{
      0 : {
         slidesPerView :1,
      },
      768:{
         slidesPerView :2,
      },
      1020 :{
         slidesPerView :3,
      },


   },
})


var swiper = new Swiper(".review-slider",{
   loop : true,
   spaceBetween : 20,
   autoplay :{
      delay :7500,
      disableOnInteraction : false,
   },
   centeredSlides :true,
   breakpoints :{
      0 : {
         slidesPerView :1,
      },
      768:{
         slidesPerView :2,
      },
      1020 :{
         slidesPerView :3,
      },


   },
})

