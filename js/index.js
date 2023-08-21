let openNavBtn = document.getElementById("openNav");
let main =document.querySelector("main")
console.log(main);

$(".closeNav").click(function () {
  let navWidth = $("nav").innerWidth();
  $("nav").animate({left: -navWidth},500)
  $(".head-content").animate({left: 0},500)
  
  // console.log(navWidth);
});
$("#openNav").click(function () {
  let navWidth = $("nav").innerWidth();
  $("nav").animate({left: 0},500)
  $(".head-content").animate({left: navWidth},500)
  
  // console.log(navWidth);
});
// <==========scroll==========>
$("a[href^= '#']").click(function (e) {
  let aHref = e.target.getAttribute("href");
  let secOffset = $(aHref).offset().top;
  $("body").animate({scrollTop: secOffset},500)
 $("html") .animate({scrollTop: secOffset},500)
});

$(".contentHead").click(function (e) {
  let contentHeadId = e.target.getAttribute("id");
  if (contentHeadId == "singerOn") {
    $("#singerOnDes").slideToggle(500);
  }
  if (contentHeadId == "singerTw") {
    $("#singerTwDes").slideToggle(500);
  }
  if (contentHeadId == "singerTh") {
    $("#singerThDes").slideToggle(500);
  }
  if (contentHeadId == "singerFu") {
    $("#singerFuDes").slideToggle(500);
  }
});

// <==========counter==========>
let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let datediff = countDownDate - dateNow;
  let days = Math.floor(datediff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minuts = Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((datediff % (1000 * 60)) / 1000);
  // console.log(hours);
  document.getElementById("days").innerHTML = `-${days}  Days`;
  document.getElementById("hours").innerHTML = `${hours}  H`;
  document.getElementById("minuts").innerHTML =
    minuts < 10 ? `0${minuts}` : minuts;
  document.getElementById("seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (datediff < 0) {
    clearInterval(counter);
  }
}, 1000);

// <==========texetaryea counter==========>
let texetaryea = document.getElementById("masseg");
let numLeater = document.getElementById("numLeater");
let avaiCharFinsh = document.getElementById("avaiCharFinsh");
console.log(avaiCharFinsh);

texetaryea.addEventListener("keyup", function () {
  numLeater.textContent = 100 - this.value.length;
  if (numLeater.textContent < 0) {
    avaiCharFinsh.classList.remove("d-none");
    numLeater.classList.add("d-none");
  } else {
    avaiCharFinsh.classList.add("d-none");
    numLeater.classList.remove("d-none");
  }
});
// jqu=================>
// $("#masseg").keyup(function(){
//     numLeater.textContent = 100 - this.value.length;
//     f (numLeater.textContent < 0) 
//     {
//         $("#avaiCharFinsh").removeClass("d-none")
//         $("#numLeater").addClass("d-none");

//     };
//     else
//     {
//         $("#avaiCharFinsh").addClass("d-none")
//         $("#numLeater").removeClass("d-none");
//     }
// })
