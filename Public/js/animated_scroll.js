// $(document).on("click", 'a[href^="#"]', function (event) {
//   event.preventDefault();
//
//   $("html, body").animate(
//     {
//       scrollTop: $($.attr(this, "href")).offset().top,
//     },
//     750,
//   );
// });
//
// let menu = document.querySelector("#menu-bars");
// let header = document.querySelector("header");
//
// menu.onclick = () => {
//   menu.classList.toggle("fa-times");
//   header.classList.toggle("active");
// };
//
// window.onscroll = () => {
//   menu.classList.remove("fa-times");
//   header.classList.remove("active");
// };
//
// let cursor1 = document.querySelector(".cursor-1");
// let cursor2 = document.querySelector(".cursor-2");
//
// window.onmousemove = (e) => {
//   cursor1.style.top = e.pageY + "px";
//   cursor1.style.left = e.pageX + "px";
//   cursor2.style.top = e.pageY + "px";
//   cursor2.style.left = e.pageX + "px";
// };
//
// document.querySelectorAll("a").forEach((links) => {
//   links.onmouseenter = () => {
//     cursor1.classList.add("active");
//     cursor2.classList.add("active");
//   };
//
//   links.onmouseleave = () => {
//     cursor1.classList.remove("active");
//     cursor2.classList.remove("active");
//   };
// });

// $(document).ready(function () {
//   // Add smooth scrolling to all links
//   $("a").on("click", function (event) {
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();
//
//       // Store hash
//       var hash = this.hash;
//
//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $("html, body").animate(
//         {
//           scrollTop: $(hash).offset().top,
//         },
//         750,
//         function () {
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         },
//       );
//     } // End if
//   });
// });

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Specify the padding top value in rem (adjust this according to your needs)
      var paddingTopRem = 4.5;

      // Convert rem to pixels using the root font size (16 pixels by default)
      var paddingTopPixels =
        paddingTopRem *
        parseFloat(getComputedStyle(document.documentElement).fontSize);

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - paddingTopPixels,
        },
        750,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        },
      );
    } // End if
  });
});
