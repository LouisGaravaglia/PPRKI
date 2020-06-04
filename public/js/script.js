// let target = document.querySelector(".imageFrame");
//
// target.addEventListener("mouseover", function (event) {
//   event.target.style.bordercolor = "orange";
// });

let wrapper = document.getElementsByClassName( "wrapper" );

function addOne() {
	document.getElementById( "wrapperSize" ).style.width = "100vw";
}

function test() {
	document.getElementById( "wrapperSize" ).style.width = "100vw";
}

wrapper.addEventListener( "mouseover", function () {
	console.log( "hiiiii" );
} )
