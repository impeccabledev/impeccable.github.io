// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 42.361145, lng: -71.057083 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc,
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

$("#quicklinks a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

if ($(window).width() > 992) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $("#navbar").addClass("fixed-top");
      // add padding top to show content behind navbar
      $("body").css("padding-top", $(".navbar").outerHeight() + "px");
    } else {
      $("#navbar").removeClass("fixed-top");
      // remove padding top from body
      $("body").css("padding-top", "0");
    }
  });
}
