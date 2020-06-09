// alert("Hello");

// $(".imageFrame").click(function () {
//   $(this).toggleClass("imageFrame");
// });

// $(function () {
//   "use strict";
//   var view = $(window).height();
//   $(".part")
//     .height(view)
//     .scrollie({
//       scrollOffset: -50,
//       scrollingInView: function (elem) {
//         var bgColor = elem.data("background");
//         $("body").css("background-color", bgColor);
//       },
//     });
// });

// window.addEventListener("scroll", () => {
//   const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//   const scrolled = window.scrollY;
//   console.log(scrolled);
//   if (Math.ceil(scrolled) === scrollable) {
//     alert("Youve reached the bottom!");
//   }
// });

var slide = document.querySelector("article");

// Get it's position in the viewport
var bounding = slide.getBoundingClientRect();

// function isScrolledIntoView(elem) {
//   var docViewTop = $(window).scrollTop();
//   var docViewBottom = docViewTop + $(window).height();
//
//   var elemTop = $(elem).offset().top;
//   var elemBottom = elemTop + $(elem).height();
//
//   return elemBottom <= docViewBottom && elemTop >= docViewTop;
// }
// console.log(bounding);
// function returning() {
//   if (
//     bounding.top >= 0 &&
//     bounding.left >= 0 &&
//     bounding.right <=
//       (window.innerWidth || document.documentElement.clientWidth) &&
//     bounding.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight)
//   )
//     console.log(this);
// }

// Log the results
// console.log(bounding);
// console.log(slide.dataset.background);

// if (
//   bounding.top >= 0 &&
//   bounding.left >= 0 &&
//   bounding.right <=
//     (window.innerWidth || document.documentElement.clientWidth) &&
//   bounding.bottom <=
//     (window.innerHeight || document.documentElement.clientHeight)
// ) {
//   console.log("In the viewport!");
// } else {
//   console.log("Not in the viewport... whomp whomp");
// }
var intersectionOptions = {
  root: null, // use the viewport
  rootMargin: "0px",
  threshold: 1.0,
};

function intersectionCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio >= 1) {
      console.log("Fully visible!");
      console.log(entry.target.dataset.background);
      var boom = entry.target.dataset.background;
      $("body").css("background-color", boom);
    } else {
      console.log("Not fully visible!");
      // $("body").css("background-color", originalColor);
    }
  });
}

var observer = new IntersectionObserver(
  intersectionCallback,
  intersectionOptions
);

document.querySelectorAll(".imageFrame").forEach((imageFrame) => {
  observer.observe(imageFrame);
});

var original = document.querySelector("body");
var originalColor = original.dataset.background;
// var target = document.querySelector(".imageFrame");
// // observer.observe(target);
// var slideBox = document.querySelector(".slide");
// var specific = slideBox.dataset.background;
// console.log(specific);
// var newColor = document.querySelector(".imageFrame");
// var newSpecific = newColor.dataset.background;

//
// function intersectionCallback(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.intersectionRatio >= 1) {
//       console.log("Fully visible!");
//     } else {
//       console.log(entry.intersectionRatio);
//       console.log("Not fully visible!");
//     }
//   });
// }
//
// var observer = new IntersectionObserver(
//   intersectionCallback,
//   intersectionOptions
// );
//
// var target = document.querySelector("#box");
// observer.observe(target);
