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

(function () {
  let btn = document.querySelector("#topBtn");

  btn.addEventListener(
    "click",
    function (event) {
      let container = document.querySelector("#projectContainer");
      container.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    false
  );
})();
