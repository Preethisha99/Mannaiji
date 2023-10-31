import $ from "jquery";

import WOW from "wow.js";

(function ($) {
  "use strict";

  /*-------------------------------------------------------------------------------
	  Animsition init
	-------------------------------------------------------------------------------*/

  $(".animsition").animsition({
    loadingClass: "preloader",
    loadingInner:
      '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',
  });

  /* -------------------------------------
	          Preloader				
	 	-------------------------------------- */
  $("#preloader").delay(2500).fadeOut(1000);

  /*-------------------------------------------------------------------------------
	  Wow init
	-------------------------------------------------------------------------------*/

  new WOW({ mobile: false }).init();

  /*-------------------------------------------------------------------------------
	  Menu
	-------------------------------------------------------------------------------*/

  $(".a-nav-toggle").on("click", function () {
    if ($("html").hasClass("body-menu-opened")) {
      $("html").removeClass("body-menu-opened").addClass("body-menu-close");
    } else {
      $("html").addClass("body-menu-opened").removeClass("body-menu-close");
    }
  });

  $(".navbar-nav .dropdown").on({
    mouseenter: function () {
      $(this).find(".dropdown-menu").show();
    },
    mouseleave: function () {
      $(this).find(".dropdown-menu").hide();
    },
  });

  var offset = $(window).height();
  if ($(".a-affix").length) {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= offset) {
        $(".header").addClass("header-affix");
      } else {
        $(".header").removeClass("header-affix");
      }
    });
  }

  /*-------------------------------------------------------------------------------
	  Counters
	-------------------------------------------------------------------------------*/

  if ($(".a-counter").length) {
    function counter() {
      $(".a-counter:in-viewport").each(function () {
        if (!$(this).hasClass("animated")) {
          $(this).addClass("animated");
          var thisElement = $(this);
          $({ count: 0 }).animate(
            { count: thisElement.attr("data-value") },
            {
              duration: 2000,
              easing: "swing",
              step: function step() {
                var mathCount = Math.ceil(this.count);
                thisElement.text(
                  mathCount.toLocaleString("en-IN", {
                    maximumSignificantDigits: 3,
                  })
                );
              },
            }
          );
        }
      });
    }
    counter();
    $(window).on("scroll", function () {
      counter();
    });
  }

  /*-------------------------------------------------------------------------------
	  keyboardtext
	-------------------------------------------------------------------------------*/

  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = false;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: none }";
    document.body.appendChild(css);
  };

  /*-------------------------------------------------------------------------------
	  Teams Mambers Slider
	-------------------------------------------------------------------------------*/

  // window.$(document).ready(function () {
  //   $("#teams-slider").owlCarousel({
  //     items: 3,
  //     itemsDesktop: [1000, 3],
  //     itemsDesktopSmall: [979, 2],
  //     itemsTablet: [768, 2],
  //     itemsMobile: [650, 1],
  //     pagination: true,
  //     autoPlay: true,
  //   });
  // });

  /*-------------------------------------------------------------------------------
	  Background Hover Change
	-------------------------------------------------------------------------------*/

  $(".a-change-bg").on("mouseover", function () {
    var index = $(".a-change-bg").index(this);
    $(".slide-bg-list .slide-bg")
      .removeClass("active")
      .eq(index)
      .addClass("active");
  });

  /*-------------------------------------------------------------------------------
	 
	-------------------------------------------------------------------------------*/

  $(window).on("load", function () {
    $(".video-item:first-child").addClass("is-active");
    setTimeout(function () {
      $('.video-text-item[data-portrait-index="0"]').addClass("is-active");
      // drawing(2644, 0, "st0");
    }, 300);
  });
})($);
