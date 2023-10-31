import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
import { ReactTitle } from "react-meta-tags";

import WOW from "wow.js";

import logopng from "./img/logo.png";
import biglogopng from "./img/biglogobg.png";
import roundtxtpng from "./img/roundtxt.png";
import element1png from "./img/element1.png";
import element2png from "./img/element2.png";
import elementsmallxpng from "./img/elementsmallx.png";
import pluselement from "./img/pluselement.png";
import semicircledownelement from "./img/semicircledownelement.png";
import semicircledownelement1 from "./img/semicircledownelement1.png";
import semicircleelement from "./img/semicircleelement.png";
import uparrowelement from "./img/uparrowelement.png";
import water1element from "./img/water1element.png";
import waveselementdark from "./img/waveselementdark.png";
import waveliteelement2 from "./img/waveliteelement2.png";
import wavedark2 from "./img/wavedark2.png";
import smallcirclepng from "./img/smallcircle.png";
import leftarrowpng from "./img/leftarrow.png";
import serviceimg1 from "./img/serviceimg1.jpg";
import serviceimg2 from "./img/serviceimg2.jpg";
import serviceimg3 from "./img/serviceimg3.jpg";
import serviceimg4 from "./img/serviceimg4.jpg";
import serviceimg5 from "./img/serviceimg5.jpg";
import serviceimg6 from "./img/serviceimg6.jpg";
import serviceimg7 from "./img/serviceimg7.jpg";
import serviceimg8 from "./img/serviceimg8.jpg";
import serviceimg9 from "./img/serviceimg9.jpg";
import serviceimg10 from "./img/serviceimg10.jpg";
import footerimg from "./img/footerimg.png";
import homeicon from "../Pages/img/headerhome.png";

import "animsition";
import "animsition/dist/css/animsition.css";

import "pagepiling.js";
import "pagepiling.js/jquery.pagepiling.css";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "socicon/css/socicon.css";

import "./css/animate.min.css";
import "./css/ionicons.min.css";
import "./css/style.css";
import "./js/script";

const Services = () => {
  const location = useLocation();
  useEffect(() => {
    $(document).ready(function () {
      $(".animsition").animsition({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 1500,
        outDuration: 800,
        linkElement: ".animsition-link",
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        // loading: true,
        // loadingParentElement: "body", //animsition wrapper element
        loadingClass: "preloader",
        loadingInner:
          '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',
        timeout: true,
        timeoutCountdown: 1000,
        onLoadEvent: true,
        browser: ["animation-duration", "-webkit-animation-duration"],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: "animsition-overlay-slide",
        overlayParentElement: "body",
        transition: function (url) {
          window.location.href = url;
        },
      });
    });

    $(document).ready(function () {
      window.$(".a-pagepiling").pagepiling({
        scrollingSpeed: 280,
        menu: "#menu",
        loopTop: true,
        loopBottom: true,
        navigation: false,
      });
    });

    let wow = new WOW({
      boxClass: "wow", // default
      animateClass: "animated", // default
      offset: 0, // default
      mobile: true, // default
      live: true, // default
    });
    wow.init();
    document.body.style.overflow = "hidden";

    const htmlTag = document.querySelector("html");
    if (htmlTag.classList.contains("body-menu-opened")) {
      htmlTag.classList.remove("body-menu-opened");
      htmlTag.classList.add("body-menu-close");
    }

    return () => {
      document.body.style.overflow = "auto";
    };

    // Initialize or use the scripts here
    // For example, you can initialize a WOW.js animation

    // new WOW().init();
  }, []);

  useEffect(() => {
    console.log(location);
    const ppnav = document.getElementById("pp-nav");
    if (ppnav) {
      ppnav.classList.remove("d-block");
      ppnav.classList.add("d-none");
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
    <div class="main-body theme-orange dark-horizontal servicepage ">
      <div class="animsition">
        <div class="wrapper">
          <ReactTitle title="Services | Mannai Travels" />
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
          <div class="project-list-piling a-pagepiling full-height">
            <div class="section pp-scrollable slide slide-dark" id="ATF">
              <div class="slide-container">
                <div class="slide-bg">
                  <div
                    class="inside"
                    style={{ backgroundImage: `url(${serviceimg1})` }}
                  ></div>
                </div>
                <div class="container">
                  <div class="serviceroundtxttechnology">
                    {" "}
                    <img src={roundtxtpng} alt="" />
                  </div>
                  <div class="serviceelement2 ">
                    {" "}
                    <img src={element2png} alt="" class="ani-left-right" />
                  </div>
                  <div class="serviceelement1bot">
                    {" "}
                    <img
                      src={element1png}
                      class="wow pulse"
                      data-wow-delay="300ms"
                      data-wow-iteration="infinite"
                      data-wow-duration="2s"
                      alt=""
                    />
                  </div>
                  <div class="servciebiglogo-fixed">
                    {" "}
                    <img src={biglogopng} alt="" />
                  </div>
                  <div class="pluselement">
                    {" "}
                    <img src={pluselement} alt="" />
                  </div>
                  <div class="semicircledownelement">
                    {" "}
                    <img src={semicircledownelement} alt="" />
                  </div>
                  <div class="semicircleelement">
                    {" "}
                    <img src={semicircleelement} alt="" />
                  </div>
                  <div class="uparrowelement">
                    {" "}
                    <img src={uparrowelement} alt="" class="ani-top-bottom" />
                  </div>
                  <div class="water1element">
                    {" "}
                    <img src={water1element} alt="" class="ani-move" />
                  </div>
                  <div class="waveselementdark">
                    {" "}
                    <img src={waveselementdark} class="ani-move" alt="" />
                  </div>
                  <div class="smallcircleelement">
                    {" "}
                    <img src={smallcirclepng} alt="" />
                  </div>
                  <div class="contentpartservicesAT">
                    <h3 class="wow slideInLeft" data-wow-duration="1.2s">
                      AIR TRAVEL
                      <br />
                      FLIGHTS
                    </h3>
                    <p
                      class="normaltext  wow slideInRight"
                      data-wow-delay=".1s"
                      data-wow-duration=".80s"
                    >
                      {" "}
                      Over the years Mannai Travel has built a solid reputation
                      for its highly responsive and personalized services. As an
                      accredited IATA and ASTA agent, we provide seamless and
                      hassle-free flight bookings, delivering exceptional
                      service and ensuring competitive prices for corporate
                      travellers, business owners, and VIPs across the globe.
                      With our expertise and dedication to customer
                      satisfaction, we strive to exceed expectations and make
                      every journey a memorable experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="section pp-scrollable slide slide-dark"
              id="HotelsAccomudation"
            >
              <div class="slide-container">
                <div class="slide-bg" id="rm">
                  <div
                    class="inside"
                    style={{ backgroundImage: `url(${serviceimg2})` }}
                  ></div>
                </div>
                <div class="container">
                  <div class="serviceroundtxttechnologyHA">
                    {" "}
                    <img src={roundtxtpng} alt="" />
                  </div>
                  <div class="leftarrowHA ">
                    {" "}
                    <img src={leftarrowpng} alt="" class="ani-left-right" />
                  </div>
                  <div class="elementsmallx">
                    {" "}
                    <img
                      src={elementsmallxpng}
                      alt=""
                      class="wow pulse"
                      data-wow-delay="300ms"
                      data-wow-iteration="infinite"
                      data-wow-duration="2s"
                    />
                  </div>
                  <div class="servciebiglogoha-fixed">
                    {" "}
                    <img src={biglogopng} alt="" />
                  </div>
                  <div class="pluselementHA">
                    {" "}
                    <img src={pluselement} alt="" />
                  </div>
                  <div class="semicircledownelementHA">
                    {" "}
                    <img src={semicircledownelement1} alt="" />
                  </div>
                  <div class="semicircleelementHA">
                    {" "}
                    <img src={semicircleelement} alt="" />
                  </div>
                  <div class="uparrowelementHA">
                    {" "}
                    <img src={uparrowelement} alt="" class="ani-top-bottom" />
                  </div>
                  <div class="waveliteelement2">
                    {" "}
                    <img src={waveliteelement2} alt="" class="ani-move" />
                  </div>
                  <div class="wavedark2HA">
                    {" "}
                    <img src={wavedark2} class="ani-move" alt="" />
                  </div>
                  <div class="smallcircleelementHA">
                    {" "}
                    <img src={smallcirclepng} alt="" />
                  </div>
                  <div class="contentpartservicesHA">
                    <h3 class="wow slideInRight " data-wow-duration="1.2s">
                      HOTELS
                      <br />
                      ACCOMUDATION
                    </h3>
                    <p
                      class="normaltext wow slideInLeft"
                      data-wow-delay=".1s"
                      data-wow-duration=".80s"
                    >
                      {" "}
                      Count on Mannai Travel to find your perfect hotel. With a
                      knowledgeable team and access to diverse accommodations,
                      we exceed expectations with competitive rates and
                      exclusive perks. Experience a seamless travel journey with
                      us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="section pp-scrollable slide slide-dark" id="CarRentals">
              <div class="slide-container">
                <div class="slide-bg">
                  <div
                    class="inside"
                    style={{ backgroundImage: `url(${serviceimg3})` }}
                  ></div>
                </div>
                <div class="container">
                  <div class="serviceroundtxttechnologyCR">
                    {" "}
                    <img src={roundtxtpng} alt="" />
                  </div>
                  <div class="serviceelement2CR ">
                    {" "}
                    <img src={element2png} alt="" class="ani-left-right" />
                  </div>
                  <div class="serviceelement1botCR">
                    {" "}
                    <img
                      src={element1png}
                      alt=""
                      class="wow pulse"
                      data-wow-delay="300ms"
                      data-wow-iteration="infinite"
                      data-wow-duration="2s"
                    />
                  </div>
                  <div class="servciebiglogo-fixed">
                    {" "}
                    <img src={biglogopng} alt="" />
                  </div>
                  <div class="pluselementCR">
                    {" "}
                    <img src={pluselement} alt="" />
                  </div>
                  <div class="semicircledownelement">
                    {" "}
                    <img src={semicircledownelement} alt="" />
                  </div>
                  <div class="semicircleelement">
                    {" "}
                    <img src={semicircleelement} alt="" />
                  </div>
                  <div class="uparrowelementCR">
                    {" "}
                    <img src={uparrowelement} alt="" class="ani-top-bottom" />
                  </div>
                  <div class="water1element">
                    {" "}
                    <img src={water1element} alt="" class="ani-move" />
                  </div>
                  <div class="waveselementdark">
                    {" "}
                    <img src={waveselementdark} class="ani-move" alt="" />
                  </div>
                  <div class="smallcircleelement">
                    {" "}
                    <img src={smallcirclepng} alt="" />
                  </div>
                  <div class="contentpartservicesCR">
                    <h3 class="wow slideInLeft" data-wow-duration="1.2s">
                      CAR
                      <br />
                      RENTALS
                    </h3>
                    <p
                      class="normaltext  wow slideInRight"
                      data-wow-delay=".1s"
                      data-wow-duration=".80s"
                    >
                      {" "}
                      Discover the freedom of the open road with Mannai Travel's
                      car rental services. Thanks to our partnership with
                      Flexible Autos, we make renting a car a breeze, ensuring a
                      convenient and hassle-free travel experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="section pp-scrollable slide slide-dark" id="Rail">
              <div class="slide-container">
                <div class="slide-bg">
                  <div
                    class="inside"
                    style={{ backgroundImage: `url(${serviceimg4})` }}
                  ></div>
                </div>
                <div class="container">
                  <div class="serviceroundtxttechnologyHA">
                    {" "}
                    <img src={roundtxtpng} alt="" />
                  </div>
                  <div class="leftarrowRAIL ">
                    {" "}
                    <img src={leftarrowpng} alt="" class="ani-left-right" />
                  </div>
                  <div class="elementsmallx">
                    {" "}
                    <img
                      src={elementsmallxpng}
                      alt=""
                      class="wow pulse"
                      data-wow-delay="300ms"
                      data-wow-iteration="infinite"
                      data-wow-duration="2s"
                    />
                  </div>
                  <div class="servciebiglogoha-fixed">
                    {" "}
                    <img src={biglogopng} alt="" />
                  </div>
                  <div class="pluselementRAIL">
                    {" "}
                    <img src={pluselement} alt="" />
                  </div>
                  <div class="semicircledownelementHA">
                    {" "}
                    <img src={semicircledownelement1} alt="" />
                  </div>
                  <div class="semicircleelementHA">
                    {" "}
                    <img src={semicircleelement} alt="" />
                  </div>
                  <div class="uparrowelementHA">
                    {" "}
                    <img src={uparrowelement} alt="" class="ani-top-bottom" />
                  </div>
                  <div class="waveliteelement2">
                    {" "}
                    <img src={waveliteelement2} alt="" class="ani-move" />
                  </div>
                  <div class="wavedark2HA">
                    {" "}
                    <img src={wavedark2} class="ani-move" alt="" />
                  </div>
                  <div class="smallcircleelementHA">
                    {" "}
                    <img src={smallcirclepng} alt="" />
                  </div>
                  <div class="contentpartservicesRAIL">
                    <h3 class="wow slideInRight " data-wow-duration="1.2s">
                      RAIL
                    </h3>
                    <p
                      class="normaltext  wow slideInRight"
                      data-wow-delay=".1s"
                      data-wow-duration=".80s"
                    >
                      {" "}
                      Experience the scenic beauty of Europe with Mannai
                      Travel's rail ticket services. Through our partnership
                      with Rail Europe, we offer seamless booking options,
                      allowing you to explore the continent's enchanting
                      destinations by train effortlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="section pp-scrollable slide slide-dark"
              id="PassportVisa"
            >
              <div class="slide-container">
                <div class="slide-bg">
                  <div
                    class="inside"
                    style={{ backgroundImage: `url(${serviceimg5})` }}
                  ></div>
                </div>
                <div class="container">
                  <div class="serviceroundtxttechnologyPV">
                    {" "}
                    <img src={roundtxtpng} alt="" />
                  </div>
                  <div class="serviceelement2PV ">
                    {" "}
                    <img src={element2png} alt="" class="ani-left-right" />
                  </div>
                  <div class="serviceelement1botPV">
                    {" "}
                    <img
                      src={element1png}
                      alt=""
                      class="wow pulse"
                      data-wow-delay="300ms"
                      data-wow-iteration="infinite"
                      data-wow-duration="2s"
                    />
                  </div>
                  <div class="servciebiglogo-fixed">
                    {" "}
                    <img src={biglogopng} alt="" />
                  </div>
                  <div class="pluselement">
                    {" "}
                    <img src={pluselement} alt="" />
                  </div>
                  <div class="semicircledownelement">
                    {" "}
                    <img src={semicircledownelement} alt="" />
                  </div>
                  <div class="semicircleelement">
                    {" "}
                    <img src={semicircleelement} alt="" />
                  </div>
                  <div class="uparrowelement">
                    {" "}
                    <img src={uparrowelement} alt="" class="ani-top-bottom" />
                  </div>
                  <div class="water1element">
                    {" "}
                    <img src={water1element} alt="" class="ani-move" />
                  </div>
                  <div class="waveselementdark">
                    {" "}
                    <img src={waveselementdark} class="ani-move" alt="" />
                  </div>
                  <div class="smallcircleelement">
                    {" "}
                    <img src={smallcirclepng} alt="" />
                  </div>
                  <div class="contentpartservicesPV">
                    <h3 class="wow slideInLeft" data-wow-duration="1.2s">
                      PASSPORT <br />
                      VISA
                    </h3>
                    <p
                      class="normaltext  wow slideInRight"
                      data-wow-delay=".1s"
                      data-wow-duration=".80s"
                    >
                      {" "}
                      Simplify your visa application process with Mannai Travel,
                      the official partner for VFS Global in Qatar. Our
                      dedicated team ensures a smooth and hassle-free
                      experience, guiding you through the necessary steps to
                      obtain your visa swiftly and efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="section pp-scrollable slide slide-dark" id="MeetGreet">
              <div class="slide-container">
                <div class="slide-bg">
                  <div
                    class="inside"
                    style={{ backgroundImage: `url(${serviceimg6})` }}
                  ></div>
                </div>
                <div class="container">
                  <div class="serviceroundtxttechnologyHA">
                    {" "}
                    <img src={roundtxtpng} alt="" />
                  </div>
                  <div class="leftarrowMG ">
                    {" "}
                    <img src={leftarrowpng} alt="" class="ani-left-right" />
                  </div>
                  <div class="elementsmallx">
                    {" "}
                    <img
                      src={elementsmallxpng}
                      alt=""
                      class="wow pulse"
                      data-wow-delay="300ms"
                      data-wow-iteration="infinite"
                      data-wow-duration="2s"
                    />
                  </div>
                  <div class="servciebiglogoha-fixed">
                    {" "}
                    <img src={biglogopng} alt="" />
                  </div>
                  <div class="pluselementHA">
                    {" "}
                    <img src={pluselement} alt="" />
                  </div>
                  <div class="semicircledownelementHA">
                    {" "}
                    <img src={semicircledownelement1} alt="" />
                  </div>
                  <div class="semicircleelementHA">
                    {" "}
                    <img src={semicircleelement} alt="" />
                  </div>
                  <div class="uparrowelementHA">
                    {" "}
                    <img src={uparrowelement} alt="" class="ani-top-bottom" />
                  </div>
                  <div class="waveliteelement2">
                    {" "}
                    <img src={waveliteelement2} alt="" class="ani-move" />
                  </div>
                  <div class="wavedark2HA">
                    {" "}
                    <img src={wavedark2} class="ani-move" alt="" />
                  </div>
                  <div class="smallcircleelementHA">
                    {" "}
                    <img src={smallcirclepng} alt="" />
                  </div>
                  <div class="contentpartservicesMG">
                    <h3 class="wow slideInRight " data-wow-duration="1.2s">
                      MEET <br />
                      GREET
                    </h3>
                    <p
                      class="normaltext  wow slideInRight"
                      data-wow-delay=".1s"
                      data-wow-duration=".80s"
                    >
                      {" "}
                      Arrive in style with Mannai Travel's personalized Meet and
                      Greet Services. Our dedicated team ensures a seamless and
                      welcoming experience, taking care of your airport arrival,
                      departure, and transit needs, making your travel journey
                      stress-free from the moment you step off the plane.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="section pp-scrollable slide slide-dark" id="Mice">
              <div class="slide-container">
                <div class="slide-bg">
                  <div
                    class="inside"
                    style={{ backgroundImage: `url(${serviceimg7})` }}
                  ></div>
                </div>
                <div class="container">
                  <div class="serviceroundtxttechnology">
                    {" "}
                    <img src={roundtxtpng} alt="" />
                  </div>
                  <div class="serviceelement2MICE ">
                    {" "}
                    <img src={element2png} alt="" class="ani-left-right" />
                  </div>
                  <div class="serviceelement1bot">
                    {" "}
                    <img
                      src={element1png}
                      alt=""
                      class="wow pulse"
                      data-wow-delay="300ms"
                      data-wow-iteration="infinite"
                      data-wow-duration="2s"
                    />
                  </div>
                  <div class="servciebiglogo-fixedMICE">
                    {" "}
                    <img src={biglogopng} alt="" />
                  </div>
                  <div class="pluselement">
                    {" "}
                    <img src={pluselement} alt="" />
                  </div>
                  <div class="semicircledownelement">
                    {" "}
                    <img src={semicircledownelement} alt="" />
                  </div>
                  <div class="semicircleelement">
                    {" "}
                    <img src={semicircleelement} alt="" />
                  </div>
                  <div class="uparrowelement">
                    {" "}
                    <img src={uparrowelement} alt="" class="ani-top-bottom" />
                  </div>
                  <div class="water1element">
                    {" "}
                    <img src={water1element} alt="" class="ani-move" />
                  </div>
                  <div class="waveselementdark">
                    {" "}
                    <img src={waveselementdark} class="ani-move" alt="" />
                  </div>
                  <div class="smallcircleelement">
                    {" "}
                    <img src={smallcirclepng} alt="" />
                  </div>
                  <div class="contentpartservicesMICE">
                    <h3 class="wow slideInLeft" data-wow-duration="1.2s">
                      MICE
                    </h3>
                    <p
                      class="normaltext  wow slideInRight"
                      data-wow-delay=".1s"
                      data-wow-duration=".80s"
                    >
                      {" "}
                      Elevate your corporate events with Mannai Travel's
                      exceptional MICE (Meetings, Incentives, Conferences, and
                      Exhibitions) services. With meticulous planning, seamless
                      logistics, and tailored experiences, we ensure a
                      successful and memorable event that leaves a lasting
                      impression on your attendees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="section pp-scrollable slide slide-dark"
              id="TravelInsurance"
            >
              <div class="slide-container">
                <div class="slide-bg">
                  <div
                    class="inside"
                    style={{ backgroundImage: `url(${serviceimg8})` }}
                  ></div>
                </div>
                <div class="container">
                  <div class="serviceroundtxttechnologyHA">
                    {" "}
                    <img src={roundtxtpng} alt="" />
                  </div>
                  <div class="leftarrowHA ">
                    {" "}
                    <img src={leftarrowpng} alt="" class="ani-left-right" />
                  </div>
                  <div class="elementsmallxTIDL">
                    {" "}
                    <img
                      src={elementsmallxpng}
                      alt=""
                      class="wow pulse"
                      data-wow-delay="300ms"
                      data-wow-iteration="infinite"
                      data-wow-duration="2s"
                    />
                  </div>
                  <div class="servciebiglogoha-fixed">
                    {" "}
                    <img src={biglogopng} alt="" />
                  </div>
                  <div class="pluselementTIDL">
                    {" "}
                    <img src={pluselement} alt="" />
                  </div>
                  <div class="semicircledownelementHA">
                    {" "}
                    <img src={semicircledownelement1} alt="" />
                  </div>
                  <div class="semicircleelementHA">
                    {" "}
                    <img src={semicircleelement} alt="" />
                  </div>
                  <div class="uparrowelementHA">
                    {" "}
                    <img src={uparrowelement} alt="" class="ani-top-bottom" />
                  </div>
                  <div class="waveliteelement2">
                    {" "}
                    <img src={waveliteelement2} alt="" class="ani-move" />
                  </div>
                  <div class="wavedark2HA">
                    {" "}
                    <img src={wavedark2} class="ani-move" alt="" />
                  </div>
                  <div class="smallcircleelementHA">
                    {" "}
                    <img src={smallcirclepng} alt="" />
                  </div>
                  <div class="contentpartservicesTIDL">
                    <h3 class="wow slideInRight " data-wow-duration="1.2s">
                      TRAVEL INSURANCE <br />
                      INTERNATIONAL DRIVING LICENSE
                    </h3>
                    <p
                      class="normaltext  wow slideInRight"
                      data-wow-delay=".1s"
                      data-wow-duration=".80s"
                    >
                      {" "}
                      Ensure peace of mind during your travels with Mannai
                      Travel's comprehensive services. We offer hassle-free
                      arrangements for Travel Insurance and International
                      Drivers Licenses, ensuring you have the necessary coverage
                      and documentation for a worry-free journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="section pp-scrollable slide slide-dark" id="Support">
              <div class="slide-container">
                <div class="slide-bg">
                  <div
                    class="inside"
                    style={{ backgroundImage: `url(${serviceimg9})` }}
                  ></div>
                </div>
                <div class="container">
                  <div class="serviceroundtxttechnology">
                    {" "}
                    <img src={roundtxtpng} alt="" />
                  </div>
                  <div class="serviceelement2support ">
                    {" "}
                    <img src={element2png} alt="" class="ani-left-right" />
                  </div>
                  <div class="serviceelement1bot">
                    {" "}
                    <img
                      src={element1png}
                      alt=""
                      class="wow pulse"
                      data-wow-delay="300ms"
                      data-wow-iteration="infinite"
                      data-wow-duration="2s"
                    />
                  </div>
                  <div class="servciebiglogo-fixed">
                    {" "}
                    <img src={biglogopng} alt="" />
                  </div>
                  <div class="pluselement">
                    {" "}
                    <img src={pluselement} alt="" />
                  </div>
                  <div class="semicircledownelement">
                    {" "}
                    <img src={semicircledownelement} alt="" />
                  </div>
                  <div class="semicircleelement">
                    {" "}
                    <img src={semicircleelement} alt="" />
                  </div>
                  <div class="uparrowelement">
                    {" "}
                    <img src={uparrowelement} alt="" class="ani-top-bottom" />
                  </div>
                  <div class="water1element">
                    {" "}
                    <img src={water1element} alt="" class="ani-move" />
                  </div>
                  <div class="waveselementdark">
                    {" "}
                    <img src={waveselementdark} class="ani-move" alt="" />
                  </div>
                  <div class="smallcircleelement">
                    {" "}
                    <img src={smallcirclepng} alt="" />
                  </div>
                  <div class="contentpartservicesSUP">
                    <h3 class="wow slideInLeft" data-wow-duration="1.2s">
                      24/7 <br />
                      SUPPORT{" "}
                    </h3>
                    <p
                      class="normaltext  wow slideInRight"
                      data-wow-delay=".1s"
                      data-wow-duration=".80s"
                    >
                      {" "}
                      Experience round-the-clock support with Mannai Travel's
                      24/7 service. Our dedicated team is available day and
                      night to assist you, ensuring your travel needs are met
                      anytime, anywhere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="section pp-scrollable slide slide-dark" id="Getintouch">
              <div
                className="col-md-12 min-height-100vh row position-relative m-0 footer"
                style={{ backgroundImage: `url(${serviceimg10})` }}
              >
                {/* <div className="brand">
                  <div>
                    <img src={logopng} alt="" />
                  </div>
                </div> */}
                <div className="elementfooter ">
                  {" "}
                  <img src={element2png} alt="" className="ani-left-right" />
                </div>
                <div className="footerlogo">
                  {" "}
                  <img src={biglogopng} alt="" />
                </div>
                <div className="pluselementfooter">
                  {" "}
                  <img src={pluselement} alt="" />
                </div>
                <div className="pluselementfootertop">
                  {" "}
                  <img src={pluselement} alt="" />
                </div>
                <div className="uparrowelementfooter">
                  {" "}
                  <img src={uparrowelement} alt="" className="ani-top-bottom" />
                </div>
                <div
                  className="wow fadeInLeft  col-md-5 d-flex justify-content-center align-items-center"
                  data-wow-duration="1000ms"
                  data-wow-delay="0ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1000ms",
                    animationDelay: "0ms",
                    animationName: "fadeInLeft",
                  }}
                >
                  {" "}
                  <img
                    className="servicefooterimg"
                    src={footerimg}
                    alt=""
                  />{" "}
                </div>
                <div className="col-md-7 row">
                  <div className="col-md-12">
                    <div className="wow fadeInUp text-white mt-3">
                      <h2 className="mb-3">THE NEW FACE OF TRAVEL</h2>
                      <h2 className="mb-5">GET IN TOUCH</h2>
                      <div className="row">
                        <div className="col-md-7 footersub">
                          <input
                            type="text"
                            className="form-control form-control-custom"
                            placeholder="Enter your email for newsletter subscription"
                          />
                        </div>
                        <div className="submitbtn col-md-5">
                          {" "}
                          <a
                            className="btn btn-primary mr-4 fr submitbtn"
                            href="#"
                          >
                            SUBMIT{" "}
                            <i className="icon ion-ios-arrow-thin-right"></i>
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-5 footer-content-flash ">
                    <div className="col-4  mb-5 wow fadeInUp">
                      <h5>COMPANY </h5>
                      <ul className="footer-nav">
                        <li>
                          <a className="text-decoration-none" href="#">
                            WHO WE ARE{" "}
                          </a>
                        </li>
                        <li>
                          <a className="text-decoration-none" href="#">
                            WHAT WE DO{" "}
                          </a>
                        </li>
                        <li>
                          <a className="text-decoration-none" href="#">
                            CAREERS
                          </a>
                        </li>
                        <li>
                          <a className="text-decoration-none" href="#">
                            CONTACT US{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4 mb-5 wow fadeInUp">
                      <h5>LEGAL</h5>
                      <ul className="footer-nav">
                        <li>
                          <a className="text-decoration-none" href="#">
                            PRIVACY POLICY{" "}
                          </a>
                        </li>
                        <li>
                          <a className="text-decoration-none" href="#">
                            TERMS OF USE{" "}
                          </a>
                        </li>
                        <li>
                          <a className="text-decoration-none" href="#">
                            COOKIE POLICY
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4  mb-5 wow fadeInUp">
                      <h5>REACH US</h5>
                      <div className="contact-item">
                        NEAR MANNAI SIGNAL
                        <br />
                        SELWA ROAD DOHA, QATAR
                        <br />
                        P.O BOX 9012
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul className="footersocial footersocial-rounded d-flex">
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

                  <div className="footercopyright text-center wow fadeInUp">
                    {" "}
                    COPYRIGHT &copy;2023-24 MANNAI TRAVELS DOHA QATAR
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

export default Services;
