// nav image change js
// nav image change js

function newImage(url) {
  // function newImage(aman) {
  // url / aman is parameter
  document.getElementById("changedImage").src = url;
}

function oldImg() {
  document.getElementById("changedImage").src = "./src/assets/image/content-image/nav-image.png";
  // function oldImg() {
  //   document.getElementById("changedImage").src = "./src/assets/image/content-image/nav-image.png";
  // }
}

function chngImgById(url, id) {
  document.getElementById(id).src = url;
}

function imageReset(id) {
  document.getElementById(id).src = "";
}

// nav image change js
// nav image change js
// ===================================================
// ===================================================
// sticky top navbar js start
// sticky top navbar js start
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const navEl = document.getElementById("navbar");
    if (window.scrollY > 50) {
      if (!navEl.classList.contains("sticky")) {
        navEl.classList.add("sticky");
        // add padding top to show content behind navbar
        // navbar_height = document.querySelector('.nav').offsetHeight;
        // document.body.style.paddingTop = navbar_height + 'px';
      }
    } else {
      document.getElementById("navbar").classList.remove("sticky");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});
// sticky top navbar js end
// sticky top navbar js end
// ===================================================
// ===================================================
// counter js start here
// counter js start here

$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});

// counter js end here
// counter js end here
// ===================================================
// ===================================================
// scroll to focus on active section animation start
// scroll to focus on active section animation start
/* <div class="onFocusAnimate" data-animationName="slideInLeft"></div> */
const myDemo = (function () {
  const init = function () {
    createObserver();
  };

  const createObserver = function () {
    let options = {
      root: null,
      // rootMargin: "100px",
      threshold: 0.5,
    };

    let observer = new IntersectionObserver(function (entries, observer) {
      handleIntersect(entries, observer);
    }, options);

    let targetElements = document.querySelectorAll(".onFocusAnimate");

    targetElements.forEach((item) => {
      observer.observe(item);
    });
  };

  const handleIntersect = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log('animate item found')
        const animateClassName = entry.target.dataset.animationname;
        console.log(animateClassName);
        entry.target.classList.add(animateClassName);
        entry.target.classList.add("opacityVisible");
        // observer.unobserve(entry.target);
      }
    });
  };

  return {
    callInit: init,
  };
})();

myDemo.callInit();

// scroll to focus on active section animation end
// on focus animate
// ===================================================
// ===================================================

// When the user clicks on the button,
//toggle between hiding and showing the dropdown content

// =====================Start=========================
// document.getElementById("dropId").onclick
// When the user clicks on the button,
//toggle between hiding and showing the dropdown content

function toggleMenu() {
  document.getElementById("dropdownArea").classList.toggle("show");
  // console.log('menu toggle')
}
// --------End----------

// =====================Start=========================
// Vertical & Horizontal Scroll direction combination
// Vertical & Horizontal Scroll direction combination

$(function () {
  var controller = new ScrollMagic.Controller();
  //var tween = TweenMax.to(".block-list", 1, {className: "+=scrollend"});

  var $block_list = $(".block-list"),
    $block_item = $block_list.find(".block-list__item"),
    block_list_width = $block_list.outerWidth(),
    block_item_width = $block_item.outerWidth(),
    total_width = block_item_width * $block_item.length,
    travel_distance = total_width - block_list_width + 20;

  var scene = new ScrollMagic.Scene({
    Offset: 100,
    triggerElement: "#second",
    duration: "400%",
    triggerHook: 0,
  })
    .setPin(".block-list")
    //.setTween(tween)
    .addTo(controller);

  scene.on("progress", function (e) {
    var progress = e.progress,
      move = -travel_distance * progress + "px";
    $block_list.css({
      transform: "translateX(" + move + ")",
    });
  });
});

// --------End----------

// owl carousel
$(document).ready(function () {
  document.getElementById("dropId").onclick = function () {
    // document.getElementById("dropdownArea").classList.toggle("show");
    console.log("its new id");
    // document.getElementById("dropId").click()
    document.getElementsByClassName("accordion-button").click();
  };

  $(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 2,
      margin: 20,
      autoplay: false,
      autoplayTimeOUt: 2000,
      autoplayHOverPause: true,
      loop: true,
      nav: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        991: {
          items: 2,
          nav: true,
        },
      },
    });

    duplicateContent("brand-slider-track");
    duplicateContent("our-work-slider");
  });
});

function duplicateContent(id) {
  var track = $(id);
  var els = document.getElementById(id).innerHTML;
  document.getElementById(id).innerHTML = els + els;
}

$(".slider").owlCarousel({
  items: 4,
  loop: true,
  autoplay: false,
  autoplayTimeout: 2000, //2000ms = 2s;
  autoplayHoverPause: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    767: {
      items: 2,
      nav: true,
    },
    1024: {
      items: 3,
      nav: true,
    },
  },
});

// owl carousel end

// / Close the dropdown menu if the user clicks outside of it
// document.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

// nav js start

// define all UI variable
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");

// // load all event listners
// allEventListners();

// // functions of all event listners
// function allEventListners() {
//   // toggler icon click event
//   navToggler.addEventListener("click", togglerClick);
//   // nav links click event
//   navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
// }

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}
// nav js end

// on mouse movement

function handleMouseMove(event) {
  const height = window.innerHeight;
  const width = window.innerWidth;
  // Creates angles of (-20, -20) (left, bottom) and (20, 20) (right, top)
  const yAxisDegree = (event.pageX / width) * 40 - 20;
  const xAxisDegree = (event.pageY / height) * -1 * 40 + 20;
  target.style.transform = `rotateY(${yAxisDegree}deg) rotateX(${xAxisDegree}deg)`;
  // Set the sheen position
  setSheenPosition(event.pageX / width, event.pageY / width);
}

function setSheenPosition(xRatio, yRatio) {
  // This creates a "distance" up to 400px each direction to offset the sheen
  const xOffset = 1 - (xRatio - 0.5) * 800;
  const yOffset = 1 - (yRatio - 0.5) * 800;
  target.style.setProperty("--sheenX", `${xOffset}px`);
  target.style.setProperty("--sheenY", `${yOffset}px`);
}


// form validation js
function validate()
{
  let username = document.getElementById("uname");
  let email = document.getElementById("email");

  if (username.value.trim()==""){
    alert("input cannot be blanked");
    username.style.border = "2px solid red";
    return false
  }
  else if(email.value.trim()==""){
    alert("email cannot be blanked");
    email.style.border="2px solid red";
    return false;
  }
  else{
    true
  }
}
// Scroll to active menu nav js

// console.log("reading menu active script");
// const sections = document.querySelectorAll("section.anchor");
// const navLi = document.querySelectorAll(
// "#navbarCollapse .navbar-nav ul li"
// );
// window.onscroll = () => {
// debonuceActivateMenu()
// };

// function debounce(func, timeout = 50) {
// // console.log('debounce inside')
//   let timer;
//   return () => {
//     // console.log(timer)
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this);
//     }, timeout);
//   };
// }

// function activateMenu () {
//   console.log('activate Menu')
//   var current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (scrollY >= sectionTop - 60) {
//       current = section.getAttribute("id");
//     }
//   });
//   console.log("checking id", current);

//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       li.classList.add("active");
//     }
//   });
// }
// const debonuceActivateMenu = debounce(() => activateMenu());

// Scroll to active menu nav js

// projects/portfolio section tabs js start

// this js file is commented , if you needed you can use it by uncomment it.

// function Tabs() {
//   var bindAll = function () {
//     var menuElements = document.querySelectorAll("[data-tab]");
//     for (var i = 0; i < menuElements.length; i++) {
//       menuElements[i].addEventListener("click", change, false);
//     }
//   };
//   var clear = function () {
//     var menuElements = document.querySelectorAll("[data-tab]");
//     for (var i = 0; i < menuElements.length; i++) {
//       menuElements[i].classList.remove("active");
//       var id = menuElements[i].getAttribute("data-tab");
//       document.getElementById(id).classList.remove("active");
//     }
//   };
//   var change = function (e) {
//     clear();
//     e.target.classList.add("active");
//     var id = e.currentTarget.getAttribute("data-tab");
//     document.getElementById(id).classList.add("active");
//   };
//   bindAll();
// }
// var connectTabs = new Tabs();

// projects/portfolio section tabs js end
