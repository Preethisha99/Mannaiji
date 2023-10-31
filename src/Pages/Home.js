import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import $, { ready } from "jquery";
import { ReactTitle } from "react-meta-tags";

import WOW from "wow.js";

import leftbgimg from "./img/leftbg.png";
import logopng from "./img/logo.png";
import biglogopng from "./img/biglogobg.png";
import roundtxtpng from "./img/roundtxt.png";
import botlinepng from "./img/botline.png";
import verlinepng from "./img/verline.png";
import roundelementpng from "./img/roundelement.png";
import elementbgpng from "./img/elementbg.png";
import element1png from "./img/element1.png";
import element2png from "./img/element2.png";
import mannairoundtxt from "./img/mannairoundtext.png";
import homevideo from "./img/homevideo.webm";
import elementsmallxpng from "./img/elementsmallx.png";
import atpng from "./img/airtravel.png";
import rtpng from "./img/railticket.png";
import mtpng from "./img/MeetGreet.png";
import carcaroselpng from "./img/carrental.png";
import homeicon from "./img/headerhome.png";
import hotelpng from "./img/hotelaccomadation.png";
import bgvideo from "./img/bg-video.jpg";

import "pagepiling.js";
import "pagepiling.js/jquery.pagepiling.css";

import "animsition";
import "animsition/dist/css/animsition.css";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "socicon/css/socicon.css";

import "./css/animate.min.css";
import "./css/ionicons.min.css";
import "socicon/css/socicon.css";
import "./css/style.css";
import "./js/script";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    $(function () {
      $(".animsition").animsition({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 1500,
        outDuration: 800,
        linkElement: ".animsition-link",
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        // loading: false,
        // loadingParentElement: "body",
        loadingClass: "preloader",
        loadingInner:
          // '<div class="spinner"><div class="mannai-logo-gif"></div></div>', // e.g '<img src="loading.svg" />'
          '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>', // e.g '<img src="loading.svg" />'
        timeout: true,
        timeoutCountdown: 1000,
        onLoadEvent: true,
        browser: ["animation-duration", "-webkit-animation-duration"],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: "animsition-overlay-slide",
        overlayParentElement: "body",
        // transition: function (url) {
        //   location.href = url;
        // },
      });
    });
    new WOW().init();
    document.body.style.overflow = "hidden";

    const htmlTag = document.querySelector("html");
    if (htmlTag.classList.contains("body-menu-opened")) {
      htmlTag.classList.remove("body-menu-opened");
      htmlTag.classList.add("body-menu-close");
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    $(function () {
      // Initialize PagePiling
      window.$(".a-horizontal").pagepiling({
        scrollingSpeed: 280,
        menu: "#menu",
        direction: "horizontal",
        loopTop: true,
        loopBottom: true,
        anchors: ["HOME", "WHATWEDO", "TECHNOLOGY", "WHOWEARE"],
        // navigation: true,
        navigation: {
          textColor: "#000",
          bulletsColor: "#000",
          position: "right",
          tooltips: ["HOME", "WHATWEDO", "TECHNOLOGY", "WHOWEARE"],
        },
        afterLoad: function (anchorLink, index) {
          if (index === 1 || index === 2 || index === 3 || index === 4) {
            $(".mainbody").addClass("dark-horizontal");
          } else {
            $(".mainbody").removeClass("dark-horizontal");
          }
        },
      });
      $(".a-pp-prev").on("click", function () {
        window.$.fn.pagepiling.moveSectionUp();
      });
      $(".a-pp-next").on("click", function () {
        window.$.fn.pagepiling.moveSectionDown();
      });
    });
  }, []);

  useEffect(() => {
    $(function () {
      window.$(".owl-carousel").owlCarousel({
        items: 3,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 2],
        itemsMobile: [650, 1],
        // pagination: true,
        loop: true,
        margin: 10,
        // nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        // autoplayHoverPause: true,
        center: true,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        // responsive: {
        //   0: {
        //     items: 1,
        //   },
        //   600: {
        //     items: 1,
        //   },
        //   1000: {
        //     items: 3,
        //   },
        // },
      });
    });
  }, []);

  useEffect(() => {
    const ppnav = document.getElementById("pp-nav");
    const tooltip = document.querySelector(".pp-tooltip");
    if (ppnav) {
      ppnav.classList.remove("d-none");
      ppnav.classList.add("d-block");
    }

    if (ppnav) {
      ppnav.remove(); // Remove the ppnav element from the DOM
    }
  }, []);

  const toggleClassToHtml = () => {
    const htmlTag = document.querySelector("html");
    if (htmlTag.classList.contains("body-menu-opened")) {
      htmlTag.classList.remove("body-menu-opened");
      htmlTag.classList.add("body-menu-close");
    } else {
      htmlTag.classList.add("body-menu-opened");
      htmlTag.classList.remove("body-menu-close");
    }
  };

  return (
    <div className="mainbody theme-orange dark-horizontal homepage">
      <ReactTitle title="Home | Mannai Travels - Travel Management Company from Qatar" />
      <CookieConsent
        location="bottom"
        buttonText="I Accept!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#17355d" }}
        buttonStyle={{ color: "#fff", fontSize: "13px", background: "#3fa9f5" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <div className="animsition overflow-hidden">
        <div className="wrapper">
          <header id="header" className="header header-fixed">
            <div className="container-fluid mp0 clearfix">
              <div className="d-flex justify-content-between">
                {" "}
                <div className="p-2">
                  {" "}
                  <Link to="/">
                    <div>
                      <img src={logopng} alt="" className="brand-logo" />
                    </div>
                  </Link>
                </div>
                <div className="d-flex h-fit-content ">
                  <div className="homeicon d-flex align-items-center mx-2">
                    <Link to="/">
                      {/* <i className="icon icon ion-home"></i>{" "} */}
                      <img
                        src={homeicon}
                        height={30}
                        width={30}
                        alt=""
                        className=""
                      />
                    </Link>
                  </div>
                  <button
                    className="nav-toggle-btn a-nav-toggle"
                    onClick={toggleClassToHtml}
                  >
                    {" "}
                    <span className="nav-toggle nav-toggle-sm">
                      {" "}
                      <span className="stick stick-1"></span>{" "}
                      <span className="stick stick-2"></span>{" "}
                      <span className="stick stick-3"></span>{" "}
                    </span>{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="hide-menu a-nav-toggle"></div>
            <div className="menu">
              <input
                type="text"
                className="form-control form-control-custom"
                placeholder="How can we help you?"
              />
              <div className="menu-main" id="accordion">
                <ul>
                  {/* <li className=" expand">
              <a
                data-text=""
                data-toggle="collapse"
                // href="#menuWhatwedo"
                role="button"
                aria-expanded="false"
                aria-controls="menuWhatwedo"
              >
                Our services{" "}
              </a>
              <div
                className="collapse"
                id="menuWhatwedo"
                data-parent="#accordion"
              >
                <ul>
                  <li>
                    <a
                      href="#"
                      className="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Air Travel/Flights
                    </a>{" "}
                  </li>
                  <li>
                    <a
                      href="#"
                      className="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Hotel
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Car Rentals
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Cruises
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Rail
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Travel Insurance
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Meet &amp; Greet
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Mice
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Passport &amp; Visa
                    </a>
                  </li>
                </ul>
              </div>
            </li> */}
                  <li>
                    <Link to="/Services">
                      <a
                        data-text=""
                        data-toggle="collapse"
                        href="#menuLeisure"
                        role="button"
                        aria-expanded="false"
                        aria-controls="menuLeisure"
                      >
                        What we do
                      </a>
                    </Link>
                    <div
                      className="collapse"
                      id="menuLeisure"
                      data-parent="#accordion"
                    >
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="animsition-link"
                            data-animsition-out-class="fade-out"
                            data-text=""
                          >
                            Leisure
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/Technologies">
                      <a
                        data-text=""
                        data-toggle="collapse"
                        href="#menuBusiness"
                        role="button"
                        aria-expanded="false"
                        aria-controls="menuBusiness"
                      >
                        Technology{" "}
                      </a>
                    </Link>
                    <div
                      className="collapse"
                      id="menuBusiness"
                      data-parent="#accordion"
                    >
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="animsition-link"
                            data-animsition-out-class="fade-out"
                            data-text="Corporate"
                          >
                            Corporate
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/Businesstravel">
                      <a
                        data-text=""
                        data-toggle="collapse"
                        href="#menuTechnology"
                        role="button"
                        aria-expanded="false"
                        aria-controls="menuTechnology"
                      >
                        Business Travel
                      </a>
                    </Link>
                    <div
                      className="collapse"
                      id="menuTechnology"
                      data-parent="#accordion"
                    >
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="animsition-link"
                            data-animsition-out-class="fade-out"
                            data-text="Link One"
                          >
                            Link One
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="animsition-link"
                            data-animsition-out-class="fade-out"
                            data-text="Link Two"
                          >
                            Link Two
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="animsition-link"
                            data-animsition-out-class="fade-out"
                            data-text="Link Three"
                          >
                            Link Three
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/Whoweare">
                      <a
                        data-text=""
                        data-toggle="collapse"
                        href="#menuWhoweare"
                        role="button"
                        aria-expanded="false"
                        aria-controls="menuWhoweare"
                      >
                        Who We are
                      </a>
                    </Link>
                    <div
                      className="collapse"
                      id="menuWhoweare"
                      data-parent="#accordion"
                    >
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="animsition-link"
                            data-animsition-out-class="fade-out"
                            data-text="Company Overview"
                          >
                            Company Overview
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="animsition-link"
                            data-animsition-out-class="fade-out"
                            data-text="Our Mission &amp; Value"
                          >
                            Our Mission &amp; Value
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="animsition-link"
                            data-animsition-out-class="fade-out"
                            data-text="Awards &amp; Achievements"
                          >
                            Awards &amp; Achievements
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="animsition-link"
                            data-animsition-out-class="fade-out"
                            data-text="Our Team / Leadership"
                          >
                            Our Team / Leadership
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="animsition-link"
                            data-animsition-out-class="fade-out"
                            data-text="Company Overview"
                          >
                            Company Overview
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/Leisuretravel">
                      <a
                        data-text=""
                        data-toggle="collapse"
                        href="#menuResources"
                        role="button"
                        aria-expanded="false"
                        aria-controls="menuResources"
                      >
                        Leisure Travel
                      </a>
                    </Link>
                    <div
                      className="collapse"
                      id="menuResources"
                      data-parent="#accordion"
                    >
                      <ul>
                        <li>
                          <Link to="/Blogsandnews">
                            <a
                              href="#"
                              className="animsition-link"
                              data-animsition-out-class="fade-out"
                              data-text="BlogsandNews"
                            >
                              Blogs and News
                            </a>
                          </Link>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="animsition-link"
                            data-animsition-out-class="fade-out"
                            data-text="Newsletters"
                          >
                            Newsletters
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="animsition-link"
                            data-animsition-out-class="fade-out"
                            data-text="Events"
                          >
                            Events
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="animsition-link"
                            data-animsition-out-class="fade-out"
                            data-text="Suppliers"
                          >
                            Suppliers
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="animsition-link"
                            data-animsition-out-class="fade-out"
                            data-text="Work with us"
                          >
                            Work with us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/Blogsandnews">
                      <a
                        data-text=""
                        data-toggle="collapse"
                        href="#menuCareers"
                        role="button"
                        aria-expanded="false"
                        aria-controls="menuCareers"
                      >
                        Blogs and News{" "}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a
                      data-text=""
                      data-toggle="collapse"
                      href="#menuCareers"
                      role="button"
                      aria-expanded="false"
                      aria-controls="menuCareers"
                    >
                      Careers{" "}
                    </a>
                    <div
                      className="collapse"
                      id="menuCareers"
                      data-parent="#accordion"
                    >
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="animsition-link"
                            data-animsition-out-class="fade-out"
                            data-text="Contact Details"
                          >
                            Career Details
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      data-text=""
                      data-toggle="collapse"
                      href="#menuContact"
                      role="button"
                      aria-expanded="false"
                      aria-controls="menuNews"
                    >
                      Contact Us
                    </a>
                    <div
                      className="collapse"
                      id="menuContact"
                      data-parent="#accordion"
                    >
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="animsition-link"
                            data-animsition-out-class="fade-out"
                            data-text="Contact Details"
                          >
                            Contact Details
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="menu-footer">
                <ul className="social social-rounded">
                  <li>
                    <a href="https://www.facebook.com/mannaitravelqatar">
                      <i className="socicon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/mannaitravelqatar/">
                      <i className="socicon-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/MannaiTravel">
                      <i className="socicon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/83501210/admin/feed/posts/">
                      <i className="socicon-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.snapchat.com/add/mannaitravelqa">
                      <i className="socicon-snapchat"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menu-lang">
                {" "}
                <a href="#" className="menu-lang-item">
                  Privacy Policy
                </a>{" "}
                <a href="#" className="menu-lang-item">
                  Terms &amp; Conditions
                </a>{" "}
                <a href="#" className="menu-lang-itemlast">
                  Cookie Policy
                </a>{" "}
              </div>
              <div className="menu-copyright copyright">
                Copyright &copy Mannai Travels 2023-2024
              </div>
              <div className="biglogo-fixed">
                {" "}
                <img src={biglogopng} alt="" />
              </div>
            </div>
          </header>
          <div className="biglogo-fixed">
            {" "}
            <img src={biglogopng} alt="" />
          </div>
          <div className="horizontal-nav">
            <div className="container">
              <ul id="menu">
                <li data-menuanchor="HOME" class="active"></li>
                <li data-menuanchor="WHATWEDO"></li>
                <li data-menuanchor="TECHNOLOGY"></li>
                <li data-menuanchor="WHOWEARE"></li>
              </ul>
            </div>
            {/* <div class="horizontal-controls navarrow">
              {" "}
              <a class="a-pp-prev disabled" href="#" aria-label="Previous">
                {" "}
                <i class="icon ion-ios-arrow-left fs20"></i>{" "}
              </a>{" "}
              <a class="a-pp-next disabled" href="#" aria-label="Next">
                {" "}
                <i class="icon ion-ios-arrow-right fs20"></i>{" "}
              </a>{" "}
            </div> */}
          </div>
          <div class="home-horizontal a-horizontal full-height">
            <div class="section pp-scrollable slide slide1 slide-dark">
              <div
                className="slide-container"
                style={{ margin: 0, padding: 0 }}
              >
                <div className="container" style={{ zIndex: 400 }}>
                  <div className="contentparthome">
                    <h3
                      className="wow slideInLeft clamph2"
                      data-wow-delay="2.0s"
                      data-wow-duration="2.5s"
                    >
                      WELCOME TO THE WORLD OF TRAVEL{" "}
                    </h3>
                    <p
                      className="boldtext wow fadeInRight clamph2"
                      data-wow-delay="2.0s"
                      data-wow-duration="2.6s"
                    >
                      {" "}
                      Enhancing Sustainable Travel Experiences
                      <br />
                      Through Innovative Approaches and Tech <br />
                      Advancements !
                    </p>
                    <p
                      className="normaltext wow fadeInLeft clampp"
                      data-wow-delay="2.0s"
                      data-wow-duration="2.7s"
                    >
                      {" "}
                      Achieving Travel Program Excellence with a Preferred
                      Global Partner{" "}
                    </p>
                    <a
                      className="btn btn-primary mr-4 fr rmbtn wow bounceInUp"
                      data-wow-delay="2.0s"
                      data-wow-duration="2.8s"
                      href="#"
                    >
                      CONNECT US{" "}
                      <i className="icon ion-ios-arrow-thin-right"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="wow fadeInLeft animated leftbg"
                  data-wow-duration="2000ms"
                  data-wow-delay="0ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "2000ms",
                    animationDelay: "0ms",
                    animationName: "fadeInLeft",
                  }}
                >
                  {" "}
                  <img src={leftbgimg} className=" vh-100 vvw-50" alt="" />{" "}
                </div>
                <div className="playpause">
                  <i
                    className="socicon-play"
                    onClick={() => {
                      const video = document.getElementById("myMovie");
                      if (video) {
                        video.play();
                      }
                      const button = document.querySelector(".playpause");
                      button.remove();
                    }}
                  ></i>
                </div>
                <div className="roundtxt">
                  {" "}
                  <img src={roundtxtpng} alt="" />
                </div>
                <div className="botline">
                  {" "}
                  <img src={botlinepng} alt="" />
                </div>
                <div className="verline">
                  {" "}
                  <img src={verlinepng} alt="" />
                </div>
                <div className="roundelement ">
                  {" "}
                  <img src={roundelementpng} alt="" />
                </div>
                <div className="element1 float-bob-y">
                  {" "}
                  <img src={element1png} alt="" />
                </div>
                <div className="element2 ">
                  {" "}
                  <img src={element2png} alt="" className="ani-left-right" />
                </div>
                <div
                  className="elementbg"
                  style={{
                    visibility: "visible",
                    animationDuration: "2000ms",
                    animationDelay: "0ms",
                    animationName: "fadeInRight",
                  }}
                >
                  {" "}
                  <img src={elementbgpng} alt="" />
                </div>
                <div className="mannairoundtext ">
                  {" "}
                  <img src={mannairoundtxt} alt="" />{" "}
                </div>
                <video id="myMovie" poster={bgvideo} width="100%" height="auto">
                  <source src={homevideo} type="video/webm" />
                </video>
              </div>
            </div>
            <div class="section pp-scrollable slide slide2 slide-dark">
              <div className="slide-container">
                <div className="slide-bg">
                  <div className="inside"></div>
                </div>
                <div className="roundtxtwwd">
                  {" "}
                  <img src={roundtxtpng} alt="" />
                </div>
                <div className="botline">
                  {" "}
                  <img src={botlinepng} alt="" />
                </div>
                <div className="verline">
                  {" "}
                  <img src={verlinepng} alt="" />
                </div>
                <div className="roundelement ">
                  {" "}
                  <img src={roundelementpng} alt="" />
                </div>
                <div className="element1 float-bob-y">
                  {" "}
                  <img src={element1png} alt="" />
                </div>
                <div className="element2 ">
                  {" "}
                  <img src={element2png} alt="" className="ani-left-right" />
                </div>
                <div className="element1top">
                  {" "}
                  <img
                    src={elementsmallxpng}
                    className="wow pulse"
                    data-wow-iteration="3"
                    data-wow-duration="0.15"
                    alt=""
                  />
                </div>
                <div className="mannairoundtextwwd">
                  {" "}
                  <img src={mannairoundtxt} alt="" />{" "}
                </div>
                <div className="container">
                  <div className="contentpartwwd ">
                    <h3
                      className="wow slideInLeft clamph2"
                      data-wow-duration="1.4s"
                    >
                      WHAT WE DO
                    </h3>
                    <p
                      className="boldtext wow slideInRight clamph2"
                      data-wow-delay=".2s"
                      data-wow-duration=".95s"
                    >
                      {" "}
                      Embark on a global adventure with our <br />
                      comprehensive travel services, whether <br />
                      it's for Retail, Corporate, or Leisure purposes
                    </p>
                    <p
                      className="normaltext wow fadeInRight clampp"
                      data-wow-delay="1.0s"
                      data-wow-duration="1.4s"
                    >
                      {" "}
                      Empowered by our seasoned team and cutting-edge
                      technology, you
                      <br />
                      have the freedom to savor your most cherished travel
                      experiences
                    </p>{" "}
                    <Link to="/Services">
                      <a
                        className="btn btn-primary mr-4 fr rmbtn wow bounceInUp"
                        data-wow-delay="1.2s"
                        data-wow-duration="1.6s"
                        href="services.html"
                      >
                        EXPLORE{" "}
                        <i className="icon ion-ios-arrow-thin-right"></i>
                      </a>
                    </Link>
                  </div>
                  <div className="contentpartserviceswwd ">
                    <div className="slider">
                      <div className="owl-carousel">
                        <div className="slider-card">
                          <div className=" justify-content-center align-items-center mb-4">
                            {" "}
                            <img src={atpng} alt="" />{" "}
                          </div>
                        </div>
                        <div className="slider-card">
                          <div className=" justify-content-center align-items-center mb-4">
                            {" "}
                            <img src={hotelpng} alt="" />{" "}
                          </div>
                        </div>
                        <div className="slider-card">
                          <div className=" justify-content-center align-items-center mb-4">
                            {" "}
                            <img src={carcaroselpng} alt="" />{" "}
                          </div>
                        </div>
                        <div className="slider-card">
                          <div className=" justify-content-center align-items-center mb-4">
                            {" "}
                            <img src={rtpng} alt="" />{" "}
                          </div>
                        </div>
                        <div className="slider-card">
                          <div className=" justify-content-center align-items-center mb-4">
                            {" "}
                            <img src={mtpng} alt="" />{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="wow fadeInLeft animated leftbg "
                    data-wow-duration="2000ms"
                    data-wow-delay="0ms"
                    style={{
                      visibility: "visible",
                      animationDuration: "2000ms",
                      animationDelay: "0ms",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <img src={leftbgimg} className=" vh-100 vvw-50" alt="" />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class="section pp-scrollable slide slide3 slide-dark">
              <div className="slide-container">
                <div className="slide-bg">
                  <div className="inside"></div>
                </div>
                <div className="container">
                  <div className="roundtxttechnology">
                    {" "}
                    <img src={roundtxtpng} alt="" />
                  </div>
                  <div className="botline">
                    {" "}
                    <img src={botlinepng} alt="" />
                  </div>
                  <div className="verline">
                    {" "}
                    <img src={verlinepng} alt="" />
                  </div>
                  <div className="roundelement ">
                    {" "}
                    <img src={roundelementpng} alt="" />
                  </div>
                  <div className="element2 ">
                    {" "}
                    <img src={element2png} alt="" className="ani-left-right" />
                  </div>
                  <div className="elementsmallxTECH">
                    {" "}
                    <img
                      src={elementsmallxpng}
                      className="wow pulse"
                      data-wow-iteration="3"
                      data-wow-duration="0.15"
                      alt=""
                    />
                  </div>
                  <div className="mannairoundtexttech ">
                    {" "}
                    <img src={mannairoundtxt} alt="" />{" "}
                  </div>
                  <div className="contentparttechnology">
                    <h3
                      className="wow slideInLeft clamph2"
                      data-wow-duration="1.4s"
                    >
                      TECHNOLOGY
                    </h3>
                    <p
                      className="boldtext wow slideInRight clamph2"
                      data-wow-delay=".2s"
                      data-wow-duration=".95s"
                    >
                      Revamp Your Travel Experience with Cutting-Edge Technology
                      <br />
                      and Unlock Efficient Tools to Maximize Savings Without
                      Compromising <br />
                      on Safety and Comfort
                    </p>
                    <p
                      className="normaltext wow fadeInRight clampp"
                      data-wow-delay="1.0s"
                      data-wow-duration="1.4s"
                    >
                      {" "}
                      As part of a leading IT company, we prioritize continual
                      investment in cutting-edge technology, <br />
                      enabling our customers to stay updated on the latest
                      travel trends and reimagine their journeys
                      <br />
                      while minimizing expenses.
                      <br />
                    </p>{" "}
                    <Link to="/Technologies">
                      <a
                        className="btn btn-primary mr-4 fr rmbtn wow bounceInUp"
                        data-wow-delay="1.2s"
                        data-wow-duration="1.6s"
                        href="#"
                      >
                        EXPLORE{" "}
                        <i className="icon ion-ios-arrow-thin-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div
                  className="wow fadeInLeft animated leftbg"
                  data-wow-duration="2000ms"
                  data-wow-delay="0ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "2000ms",
                    animationDelay: "0ms",
                    animationName: "fadeInLeft",
                  }}
                >
                  {" "}
                  <img src={leftbgimg} className=" vh-100 vvw-50" alt="" />{" "}
                </div>
              </div>
            </div>
            <div class="section pp-scrollable slide slide4 slide-dark">
              <div className="slide-container">
                <div className="slide-bg">
                  <div className="inside"></div>
                </div>
                <div className="container">
                  <div className="roundtxttechnology">
                    {" "}
                    <img src={roundtxtpng} alt="" />
                  </div>
                  <div className="botline">
                    {" "}
                    <img src={botlinepng} alt="" />
                  </div>
                  <div className="verline">
                    {" "}
                    <img src={verlinepng} alt="" />
                  </div>
                  <div className="roundelement ">
                    {" "}
                    <img src={roundelementpng} alt="" />
                  </div>
                  <div className="element2 ">
                    {" "}
                    <img src={element2png} alt="" className="ani-left-right" />
                  </div>
                  <div className="element1botWWA">
                    {" "}
                    <img
                      src={elementsmallxpng}
                      className="wow pulse"
                      data-wow-iteration="3"
                      data-wow-duration="0.15"
                      alt=""
                    />
                  </div>
                  <div className="mannairoundtextwwa ">
                    {" "}
                    <img src={mannairoundtxt} alt="" />{" "}
                  </div>
                  <div className="contentpartwwa clamph2">
                    <h3 className="wow slideInLeft" data-wow-duration="1.4s">
                      WHO WE ARE
                    </h3>
                    <p
                      className="boldtext wow slideInRight clamph2"
                      data-wow-delay=".2s"
                      data-wow-duration=".95s"
                    >
                      Built upon a foundation of core human values, Mannai
                      Travels <br />
                      stands as a cherished and esteemed company in Qatar.
                      Serving <br />
                      a diverse spectrum of customers, we are renowned for our
                      unwavering to ethics and human values.
                      <br />
                      Our relentless dedication is focused on crafting a truly
                      unique and exceptional organization within Qatar.
                    </p>{" "}
                    <Link to="/Whoweare">
                      <a
                        className="btn btn-primary mr-4 fr rmbtn wow bounceInUp"
                        data-wow-delay="1.2s"
                        data-wow-duration="1.6s"
                        href="#"
                      >
                        ABOUT US{" "}
                        <i className="icon ion-ios-arrow-thin-right"></i>
                      </a>
                    </Link>
                  </div>
                  <div
                    className="wow fadeInLeft animated leftbg"
                    data-wow-duration="2000ms"
                    data-wow-delay="0ms"
                    style={{
                      visibility: "visible",
                      animationDuration: "2000ms",
                      animationDelay: "0ms",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <img src={leftbgimg} className=" vh-100 vvw-50" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
