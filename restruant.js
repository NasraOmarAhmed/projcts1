




const counter = 1;
setInterval(function(){
   document.getElementById("radio" + counter).checked = true;
   counter++;
   if(counter > 3){
    counter = 1;
   }
}, 5000);





// $(window).scroll(function (){
//    if ($(this).scrollTop() > 300){
//       $(".back-to-top").fadeIn("slow");
//    }else{
//       $(".back-to-top").fadeOut("slow");
//    }
// });

// $(".back-to-top").click(function () {
//    $("html,body").animate({scrollTop:0}, 100,"easeInOutExpo");
//    return false;
// })





const button = document.querySelector(".action-button");
const links =document.querySelector(".links");

button.addEventListener("click" ,() => {
   links.classList.toggle("active");
})