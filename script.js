$(document).ready(function(){  
  $('.items').slick({
infinite: true,
slidesToShow: 3,
            responsive: [{
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        })
       });



new fullpage('#fullpage',
 {
autoScrolling:true,
scrollHorizontally: true,
navigation: true,
slidesNavigation: true,
anchors:['Welcome', 'into', 'Bestseller', 'branch']
      });  
 $(document).on('click', '.btn-scroll-down', function(){
        fullpage_api.moveSectionDown();
      });     
      //$(document).on('click', '.btn-to-top', function(){
       // fullpage_api.moveToTop();
     // });    
      
const burgerMenu = document.querySelector('.burger-menu');
const navbarLinks = document.querySelector('.main-menu');
const dropdown = document.querySelector('.dropdown');
const submenu = document.querySelector('.sub-menu');

        burgerMenu.addEventListener('click', () => {
         navbarLinks.classList.toggle('active');
         burgerMenu.classList.toggle("change");  });  

         dropdown.addEventListener('click', () => {
            submenu.classList.toggle('active');
            dropdown.classList.toggle("change");
            
              });      
   