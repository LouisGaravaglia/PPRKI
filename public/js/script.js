////////////////////////////////////////////////// BACKGROUND COLOR CHANGE WHEN IMAGE IS IN VIEWPORT
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

// var original = document.querySelector("body");
// var originalColor = original.dataset.background;

//////////////////////////////////////////////////images are half opacity when not fully visable
var intersectionOptionsTwo = {
  root: null, // use the viewport
  rootMargin: "0px",
  threshold: 1.0,
};

function intersectionCallbackTwo(items, observerTwo) {
  items.forEach((item) => {
    if (item.intersectionRatio >= 1) {
      let fullOpac = 1;
      let color = item.target.dataset.background;
      console.log("Fully visible! Full Opacity");
      console.log(".slide[data-background=" + color + "]");
      $(".slide[data-background=" + color + "]").css("opacity", fullOpac);
    } else {
      console.log("Not fully visible! Half Opacity");
      var halfOpac = 0.5;
      let colorTwo = item.target.dataset.background;
      $(".slide[data-background=" + colorTwo + "]").css("opacity", halfOpac);
    }
  });
}

var observerTwo = new IntersectionObserver(
  intersectionCallbackTwo,
  intersectionOptionsTwo
);

document.querySelectorAll(".imageFrame").forEach((imageFrame) => {
  observerTwo.observe(imageFrame);
});

////////////////////////////////////////////////////////////////AMOUNT WRAPPER IS MOVED FROM THE LEFT DEPENDING ON WINDOW SIZE
var intersectionOptionsThree = {
  root: null, // use the viewport
  rootMargin: "0px",
  threshold: 1,
};

function intersectionCallbackThree(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio <= 1) {
      console.log("A tag is visible");
      let vpWidth = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      let image = $(".slide").css("width");
      let imageSize = parseInt(image, 10);
      let halfWidth = (vpWidth - imageSize) / 2;
      $(".wrapper").css("top", halfWidth);
    } else {
      console.log("A tag is not visible");
    }
  });
}

var observerThree = new IntersectionObserver(
  intersectionCallbackThree,
  intersectionOptionsThree
);

document.querySelectorAll("a").forEach((wrapper) => {
  observerThree.observe(wrapper);
});

function selectstart(event) {
  if (dragging) DomEvent.stop(event);
}

////////////////////////////////////////////////////////////////////////////BACK TO BEGINNING button

// $(document).ready(function () {
//   // $(window).scroll(function () {
//   //   if ($(this).scrollTop() > 100) {
//   //     $(".arrow").fadeIn();
//   //   } else {
//   //     $(".arrow").fadeOut();
//   //   }
//   // });
//   // $(".arrow").click(function () {
//   //   console.log("arrow clicked");
//   //   $("html, body").animate({ scrollTop: 0 }, 600);
//   //   return false;
//   // });
// });

// $(document).ready(function () {
//   $("#topBtn").click(function () {
//     console.log("arrow clicked");
//     $("html, body").animate({ scrollRight: 0 }, 800);
//     // return false;
//   });
// });

// $(function () {
//   $("#topBtn").bind("click", function (event) {
//     $("html, body").animate({ scrollTop: 0 }, 1500);
//     event.preventDefault();
//   });
// });
