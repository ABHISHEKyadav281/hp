// var flag=0;
var dbox1 = document.querySelector(".dbox1");


// dbox1.addEventListener('mouseenter', function () {
//     dbox1.style.height = "45vh";
// });

// dbox1.addEventListener('mouseleave', function () {
//     dbox1.style.height = "3vh";
// });





// ===========================p1=================

var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");

a1.addEventListener("click", function () {
    // alert("hey");
    document.querySelector(".photo").innerHTML = `<img src="img1.webp" alt="">`;
});
a2.addEventListener("click", function () {
    document.querySelector(".photo").innerHTML = `<img src="laptop.png" alt="">`;
});
a3.addEventListener("click", function () {
    document.querySelector(".photo").innerHTML = `<img src="img3.png" alt="">`;
});
a4.addEventListener("click", function () {
    document.querySelector(".photo").innerHTML = `<img src="img4.webp" alt="">`;
});

// ===============p4=======================================


ScrollTrigger.create({
    trigger: ".images4",
    start: "top 20%",
    end: "bottom 50%",
    pin: true,
})