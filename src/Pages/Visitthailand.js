import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
import { ReactTitle } from "react-meta-tags";

import WOW from "wow.js";

// import logopng from "./img/logo.png";
// import biglogopng from "./img/biglogobg.png";
import biglogoservicepng from "./img/biglogoservice.png";
import roundtxtpng from "./img/roundtxt.png";
import element1png from "./img/element1.png";
import element2png from "./img/element2.png";
import elementsmallxpng from "./img/elementsmallx.png";
import pluselement from "./img/pluselement.png";
import uparrowelement from "./img/uparrowelement.png";
import playthailand from "./img/playthailand.png";
import camthailand from "./img/camerathailand.png";
import sharethailand from "./img/sharethailand.png";
import penthailand from "./img/writingthailand.png";
import compassthailand from "./img/compassthailand.png";
import thailandcarouselpic from "./img/Grand-palace.png";
import MesgPicthailand from "./img/MesgPicthailand.png";
import accplus from "./img/accplus.png";
import blogimg2 from "./img/blogimg2.jpg";
import blogimg1 from "./img/blogimg1.jpg";
import carousel1 from "./img/carousel1.png";

import "animsition";
import "animsition/dist/css/animsition.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

import "socicon/css/socicon.css";

import "./css/animate.min.css";
import "./css/ionicons.min.css";
import "./css/style.css";
import "./css/visitthailand.css";
import "./js/timeline";
import "./js/script";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Partners from "../Components/Partners";

const VisitThailand = () => {
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

    // Initialize or use the scripts here
    // For example, you can initialize a WOW.js animation

    const htmlTag = document.querySelector("html");
    if (htmlTag.classList.contains("body-menu-opened")) {
      htmlTag.classList.remove("body-menu-opened");
      htmlTag.classList.add("body-menu-close");
    }

    new WOW().init();
  }, []);

  useEffect(() => {
    $(function () {
      window.$(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        center: true,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 3,
          },
        },
      });
    });
    /* eslint-disable no-undef */
    $(function () {
      var timelineElement = document.getElementById("timeline-aboutus");

      if (window.Timeline && timelineElement)
        new Timeline({
          element: timelineElement,
        });
    });
    /* eslint-enable no-undef */
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

  return (
    <div class="main-body theme-orange dark-horizontal visithailand overflow-hidden">
      <div class="animsition">
        <div class="wrapper">
          <ReactTitle title="Visit Thailand | Mannai Travels" />
          <Header />

          <div class="slide-container">
            <div class="slide-bg wow pulse">
              <div class="inside  visitthaillandbanner"></div>
            </div>
            <div class="container">
              <div class="techpulusbot wow fadeInRight">
                {" "}
                <img src={roundtxtpng} alt="" />
              </div>
              <div class="serviceelementjwwab ">
                {" "}
                <img src={element2png} alt="" class="ani-left-right" />
              </div>
              <div class="wwasmlogo">
                {" "}
                <img src={biglogoservicepng} alt="" />
              </div>
              <div class="wwabpluselement wow rotateIn">
                {" "}
                <img src={pluselement} alt="" />
              </div>
              <div class="uparrowelement">
                {" "}
                <img src={uparrowelement} alt="" class="ani-top-bottom" />
              </div>
              <div class="techelementsmallx">
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
              <div class="techbannertext">
                <p
                  class="wow slideInLeft text-white fw-bold fs-1 visthailandbannerfont"
                  data-wow-duration="1.2s"
                >
                  BLOG- 23
                </p>
                <p
                  class="normaltext  wow slideInRight fw-bold visthailandnormalfont"
                  data-wow-delay=".1s"
                  data-wow-duration=".80s"
                >
                  GATEWAY TO HEAVEN VISIT THAILAND
                </p>
              </div>
              <div
                class="vtpackbtn wow fadeInUp d-flex ms-5"
                data-wow-delay="0.4s"
              >
                {" "}
                <a class="btn btn-primary mr-4 fr " href="#">
                  BOOK THAILAND PACKAGE
                  <i class="icon ion-ios-arrow-thin-right"></i>
                </a>{" "}
              </div>
            </div>
          </div>

          <div className="row bgthailandblue p-4">
            <div className="col-12 col-md-2 bgsquarex mobnone tabnone">
              <div className="d-flex justify-content-center align-items-center py-5">
                <img
                  src={playthailand}
                  height="80"
                  width="80"
                  alt=""
                  class="wow pulse  "
                ></img>
              </div>
            </div>
            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center padmob">
              <h3
                className="text-white text-align: center"
                style={{ textAlign: "center" }}
              >
                BEST PLACES TO VISIT IN THAILAND
              </h3>
            </div>
            <div className="col-12 col-md-5">
              <div className="d-flex justify-content-center">
                <img src={camthailand} alt="" />
                <h5 className="mt-2 mb-0 ms-2 text-white">Author / Traveler</h5>
              </div>
              <h5 className="text-center text-white mt-3">Manasi Thankur</h5>
              <div className="d-flex justify-content-center mt-3 ms-3">
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
                  <img
                    height="25"
                    className="mt-2"
                    src={sharethailand}
                    alt=""
                  />
                  <p className="mt-2 mb-0 ms-2 text-white share">Share</p>
                </ul>
              </div>
              <div className="d-flex justify-content-around mt-2 gap-2">
                <div className="d-flex justify-content-center">
                  {/* <img
                    height="25"
                    className="mt-2"
                    src={sharethailand}
                    alt=""
                  /> */}
                  {/* <p className="mt-2 mb-0 ms-2 text-white">Share</p> */}
                </div>{" "}
                <div className="d-flex justify-content-center">
                  <img height="25" className="mt-2" src={penthailand} alt="" />
                  <p className="mt-2 mb-0 ms-2 text-white  text-center">
                    Posted : 29-10-2023
                  </p>
                </div>{" "}
                <div className="d-flex justify-content-center">
                  <img
                    height="25"
                    className="mt-2"
                    src={compassthailand}
                    alt=""
                  />
                  <p className="mt-2 mb-0 ms-2 text-white text-center">
                    Read Time : 20 Mins 30 Sec
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="linearthailandbgm ">
            <div className="py-4 px-5">
              <h2 className="text-white mobcenter">ABOUT DESTINATION</h2>
              <p className="text-white abouttext mt-2 mobcenter">
                Thailand is a Southeast Asian country. It's known for tropical
                beaches, opulent royal palaces, ancient ruins and ornate temples
                displaying figures of Buddha. In Bangkok, the capital, an
                ultramodern cityscape rises next to quiet canalside communities
                and the iconic temples of Wat Arun, Wat Pho and the Emerald
                Buddha Temple (Wat Phra Kaew). Nearby beach resorts include
                bustling Pattaya and fashionable Hua H
              </p>
            </div>

            {/* CCCCCCCCCCCCCCCCCCCCCCCC */}
            <div
              className="d-flex overflow-x-scroll mx-4 scroll-hidden"
              style={{ gap: "20px" }}
            >
              <div className="w-30 position-relative">
                <div className=" justify-content-center align-items-center mb-4 ">
                  {" "}
                  <img className="op8 car" src={carousel1} alt="" />{" "}
                </div>
                <div className="position-absolute editcardiv shadowCard">
                  <div className="position-relative " style={{ bottom: 33 }}>
                    <h4 className="loose">ATTRACTION 01</h4>
                    <h4 className="mt-4 loose">THE GRAND PALACE</h4>
                    <img
                      className="position-absolute editcarplus"
                      src={pluselement}
                      alt=""
                      height="100"
                      width="100"
                    />
                  </div>
                </div>
              </div>
              <div className="w-30 position-relative">
                <div className=" justify-content-center align-items-center mb-4 ">
                  {" "}
                  <img className="op8 car" src={carousel1} alt="" />{" "}
                </div>
                <div className="position-absolute editcardiv shadowCard">
                  <div
                    className="position-relative "
                    style={{ bottom: 33, fontSize: 30 }}
                  >
                    <h4 className="loose">ATTRACTION 02</h4>
                    <h4 className="mt-auto loose">THE GRAND PALACE </h4>
                    <img
                      className="position-absolute editcarplus"
                      src={pluselement}
                      alt=""
                      height="100"
                      width="100"
                    />
                  </div>
                </div>
              </div>
              <div className="w-30 position-relative">
                <div className=" justify-content-center align-items-center mb-4 ">
                  {" "}
                  <img className="op8 car" src={carousel1} alt="" />{" "}
                </div>
                <div className="position-absolute editcardiv shadowCard">
                  <div className="position-relative" style={{ bottom: 33 }}>
                    <h4 className="loose">ATTRACTION 03</h4>
                    <h4 className="mt-4 loose">THE GRAND PALACE</h4>
                    <img
                      className="position-absolute editcarplus"
                      src={pluselement}
                      alt=""
                      height="100"
                      width="100"
                    />
                  </div>
                </div>
              </div>
              <div className="w-30 position-relative">
                <div className=" justify-content-center align-items-center mb-4 ">
                  {" "}
                  <img className="op8 car" src={carousel1} alt="" />{" "}
                </div>
                <div className="position-absolute editcardiv shadowCard">
                  <div className="position-relative " style={{ bottom: 33 }}>
                    <h4 className="loose">ATTRACTION 04</h4>
                    <h4 className="mt-4 loose">THE GRAND PALACE</h4>
                    <img
                      className="position-absolute editcarplus"
                      src={pluselement}
                      alt=""
                      height="100"
                      width="100"
                    />
                  </div>
                </div>
              </div>
              <div className="w-30 position-relative">
                <div className=" justify-content-center align-items-center mb-4 ">
                  {" "}
                  <img className="op8 car" src={carousel1} alt="" />{" "}
                </div>
                <div className="position-absolute editcardiv shadowCard">
                  <div className="position-relative" style={{ bottom: 33 }}>
                    <h4 className="loose">ATTRACTION 05</h4>
                    <h4 className="mt-4 loose">THE GRAND PALACE</h4>
                    <img
                      className="position-absolute editcarplus"
                      src={pluselement}
                      alt=""
                      height="100"
                      width="100"
                    />
                  </div>
                </div>
              </div>
              <div className="w-30 position-relative">
                <div className=" justify-content-center align-items-center mb-4 ">
                  {" "}
                  <img className="op8 car" src={carousel1} alt="" />{" "}
                </div>
                <div className="position-absolute editcardiv shadowCard">
                  <div className="position-relative" style={{ bottom: 33 }}>
                    <h4 className="loose">ATTRACTION 06</h4>
                    <h4 className="mt-4 loose">THE GRAND PALACE</h4>
                    <img
                      className="position-absolute editcarplus"
                      src={pluselement}
                      alt=""
                      height="100"
                      width="100"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* PHI PHI SECTION  */}
            <div className="row mobborderbottom">
              <div className="col-12 col-lg-3 MesgPicthailand wow fadeInLeft">
                <img className="" src={MesgPicthailand} alt="" />{" "}
              </div>
              <div className="col-12 col-lg-9 d-flex justify-content-center flex-column align-items-center position-relative wow fadeInRight ">
                <div className="p-5 ">
                  <h2 className="text-white w-100">PHUKET</h2>
                  <p className="text-white abouttext mt-2">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hen drerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam,
                  </p>
                  <img
                    className="position-absolute editplusnew"
                    src={pluselement}
                    alt=""
                    height="100"
                    width="100"
                  />
                </div>
              </div>
            </div>
            {/* second  */}
            <div className="row mobborderbottom">
              <div className="col-12 col-lg-9 d-flex justify-content-center flex-column align-items-center position-relative ">
                <div className="p-5">
                  <h2 className="text-white text-end w-100">PHUKET</h2>
                  <p className="text-white abouttext text-end mt-2">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hen drerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam,
                  </p>
                  <img
                    className="position-absolute editplusnewright"
                    src={pluselement}
                    alt=""
                    height="100"
                    width="100"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-3 MesgPicthailand ">
                <img className="" src={MesgPicthailand} alt="" />{" "}
              </div>
            </div>
            {/* third  */}
            <div className="row mobborderbottom">
              <div className="col-12 col-lg-3 MesgPicthailand ">
                <img className="" src={MesgPicthailand} alt="" />{" "}
              </div>
              <div className="col-12 col-lg-9 d-flex justify-content-center flex-column align-items-center position-relative">
                <div className="p-5">
                  <h2 className="text-white w-100">PHUKET</h2>
                  <p className="text-white abouttext mt-2">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hen drerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam,
                  </p>
                  <img
                    className="position-absolute editplusnew"
                    src={pluselement}
                    alt=""
                    height="100"
                    width="100"
                  />
                </div>
              </div>
            </div>
            {/* fourth  */}
            <div className="row mobborderbottom">
              <div className="col-12 col-lg-9 d-flex justify-content-center flex-column align-items-center position-relative ">
                <div className="p-5">
                  <h2 className="text-white text-end w-100">PHUKET</h2>
                  <p className="text-white abouttext text-end mt-2">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hen drerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam,
                  </p>
                  <img
                    className="position-absolute editplusnewright"
                    src={pluselement}
                    alt=""
                    height="100"
                    width="100"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-3 MesgPicthailand ">
                <img className="" src={MesgPicthailand} alt="" />{" "}
              </div>
            </div>
            <div className="ms-5 py-5">
              <img src={element2png} alt="" class="ani-left-right ms-5" />
              <div class=" wow fadeInUp d-flex ms-5" data-wow-delay="0.4s">
                {" "}
                <a class="btn btn-primary mr-4 fr mt-4" href="#">
                  BOOK THAILAND PACKAGE
                  <i class="icon ion-ios-arrow-thin-right"></i>
                </a>{" "}
              </div>
            </div>
          </div>

          <div className="bgthailandblue px-5 py-4">
            <h3 className="text-white">FAQ'S</h3>
          </div>

          <div className="linearthailandbgm pt-4">
            {/* old  */}
            {/* <div className="row px-4 justify-content-around py-2 ">
              <div className="col-12 col-md-6">
                <div className="bg-light p-4 ">
                  <h4>1. BEST TIME TO VISIT THAILAND</h4>
                  <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</p>
                  <div className="d-flex justify-content-end">
                    <img height="20" width="20" src={accplus} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="bg-light p-4 ">
                  <h4>1. BEST TIME TO VISIT THAILAND</h4>
                  <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</p>
                  <div className="d-flex justify-content-end">
                    <img height="20" width="20" src={accplus} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row px-4 justify-content-around py-2 ">
              <div className="col-12 col-md-6">
                <div className="bg-light p-4">
                  <h4>1. BEST TIME TO VISIT THAILAND</h4>
                  <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</p>
                  <div className="d-flex justify-content-end">
                    <img height="20" width="20" src={accplus} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="bg-light p-4 ">
                  <h4>1. BEST TIME TO VISIT THAILAND</h4>
                  <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</p>
                  <div className="d-flex justify-content-end">
                    <img height="20" width="20" src={accplus} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row px-4 justify-content-around py-2 ">
              <div className="col-12 col-md-6">
                <div className="bg-light p-4 m">
                  <h4>1. BEST TIME TO VISIT THAILAND</h4>
                  <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</p>
                  <div className="d-flex justify-content-end">
                    <img height="20" width="20" src={accplus} alt="" />
                  </div>
                </div>
              </div>
             
              <div className="col-12 col-md-6">
                <div className="bg-light p-4 ">
                  <h4>1. BEST TIME TO VISIT THAILAND</h4>
                  <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER</p>
                  <div className="d-flex justify-content-end">
                    <img height="20" width="20" src={accplus} alt="" />
                  </div>
                </div>
              </div>
            </div> */}

            {/* accordion  */}
            <div class="container">
              <div class="row">
                {/* <!-- start  --> */}
                <div class="col-md-6 mobpad">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header m-3" id="headingOne">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          1. BEST TIME TO VISIT THAILAND
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse "
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header m-3" id="headingTwo">
                        <button
                          class="accordion-button collapsed "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          2.BEST TIME TO VISIT THAILAND
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the second item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header m-3" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          3. BEST TIME TO VISIT THAILAND
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end  --> */}

                {/* <!-- start  --> */}
                <div class="col-md-6">
                  {/* <!-- start  --> */}
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header m-3" id="headingFour">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="true"
                          aria-controls="collapseFour"
                        >
                          4. BEST TIME TO VISIT THAILAND
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        class="accordion-collapse collapse "
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header m-3" id="headingFive">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          5. BEST TIME TO VISIT THAILAND
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the second item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header m-3" id="headingSix">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          6. BEST TIME TO VISIT THAILAND
                        </button>
                      </h2>
                      <div
                        id="collapseSix"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end  */}
                </div>
              </div>
            </div>

            <div className="row py-4 px-5">
              <div className="col-12 col-lg-3 bgsquarex d-flex justify-content-center align-items-center h-150">
                <h2 className="text-white m-0">SIMILAR BLOGS</h2>
              </div>
            </div>

            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-lg-6  ">
                  <div class="article-item bl1 mb70">
                    <div class="blogelementsmallx ">
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
                    <div class="blogpartpluselement wow rotateIn">
                      {" "}
                      <img src={pluselement} alt="" />
                    </div>
                    <h5
                      class="wow fadeInUp lapres"
                      data-wow-delay="0.4s"
                      data-wow-duration="1s"
                    >
                      BLOG - 24
                    </h5>
                    <h6
                      class="wow fadeInUp lapres"
                      data-wow-delay="0.6s"
                      data-wow-duration="1s"
                    >
                      LEISURE TRAVEL
                    </h6>
                    <div
                      class="article-item-photo zooming wow fadeInDown"
                      data-wow-delay=".4s"
                      data-wow-offset="150"
                    >
                      {" "}
                      <img src={blogimg2} alt="" class="img-fluid" />{" "}
                    </div>
                    <div class="blogimgtpluselement wow rotateIn">
                      {" "}
                      <img src={pluselement} alt="" />
                    </div>
                    <div class="blogimgarelement ">
                      {" "}
                      <img src={element2png} alt="" class="ani-left-right" />
                    </div>
                    <div
                      class="blogimgrbbtn editbottom wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      {" "}
                      <a class="btn btn-primary mr-4 fr " href="#">
                        READ BLOG <i class="icon ion-ios-arrow-thin-right"></i>
                      </a>{" "}
                    </div>
                    <div class="bolgimgtitle ">
                      YOUR WAY OUT TO GERMANY - WHAT YOU NEED TO EXPLORE
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6  ">
                  <div class="article-item bl1 mb70">
                    <div class="blogelementsmallx ">
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
                    <div class="blogpartpluselement wow rotateIn">
                      {" "}
                      <img src={pluselement} alt="" />
                    </div>
                    <h5
                      class="wow fadeInUp lapres"
                      data-wow-delay="0.4s"
                      data-wow-duration="1s"
                    >
                      BLOG - 24
                    </h5>
                    <h6
                      class="wow fadeInUp lapres"
                      data-wow-delay="0.6s"
                      data-wow-duration="1s"
                    >
                      LEISURE TRAVEL
                    </h6>
                    <div
                      class="article-item-photo zooming wow fadeInDown"
                      data-wow-delay=".4s"
                      data-wow-offset="150"
                    >
                      {" "}
                      <img src={blogimg1} alt="" class="img-fluid" />{" "}
                    </div>
                    <div class="blogimgtpluselement wow rotateIn">
                      {" "}
                      <img src={pluselement} alt="" />
                    </div>
                    <div class="blogimgarelement ">
                      {" "}
                      <img src={element2png} alt="" class="ani-left-right" />
                    </div>
                    <div
                      class="blogimgrbbtn editbottom wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      {" "}
                      <a class="btn btn-primary mr-4 fr " href="#">
                        READ BLOG <i class="icon ion-ios-arrow-thin-right"></i>
                      </a>{" "}
                    </div>
                    <div class="bolgimgtitle ">
                      YOUR WAY OUT TO GERMANY - WHAT YOU NEED TO EXPLORE
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-lg-6 tabnone ">
                  <div class="article-item bl1 mb70">
                    <div class="blogelementsmallx ">
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
                    <div class="blogpartpluselement wow rotateIn">
                      {" "}
                      <img src={pluselement} alt="" />
                    </div>
                    <h5
                      class="wow fadeInUp lapres"
                      data-wow-delay="0.4s"
                      data-wow-duration="1s"
                    >
                      BLOG - 24
                    </h5>
                    <h6
                      class="wow fadeInUp lapres"
                      data-wow-delay="0.6s"
                      data-wow-duration="1s"
                    >
                      LEISURE TRAVEL
                    </h6>
                    <div
                      class="article-item-photo zooming wow fadeInDown"
                      data-wow-delay=".4s"
                      data-wow-offset="150"
                    >
                      {" "}
                      <img src={blogimg2} alt="" class="img-fluid" />{" "}
                    </div>
                    <div class="blogimgtpluselement wow rotateIn">
                      {" "}
                      <img src={pluselement} alt="" />
                    </div>
                    <div class="blogimgarelement ">
                      {" "}
                      <img src={element2png} alt="" class="ani-left-right" />
                    </div>
                    <div
                      class="blogimgrbbtn editbottom wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      {" "}
                      <a class="btn btn-primary mr-4 fr " href="#">
                        READ BLOG <i class="icon ion-ios-arrow-thin-right"></i>
                      </a>{" "}
                    </div>
                    <div class="bolgimgtitle ">
                      YOUR WAY OUT TO GERMANY - WHAT YOU NEED TO EXPLORE
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 tabnone  mobnone">
                  <div class="article-item bl1 mb70">
                    <div class="blogelementsmallx ">
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
                    <div class="blogpartpluselement wow rotateIn">
                      {" "}
                      <img src={pluselement} alt="" />
                    </div>
                    <h5
                      class="wow fadeInUp lapres"
                      data-wow-delay="0.4s"
                      data-wow-duration="1s"
                    >
                      BLOG - 24
                    </h5>
                    <h6
                      class="wow fadeInUp lapres"
                      data-wow-delay="0.6s"
                      data-wow-duration="1s"
                    >
                      LEISURE TRAVEL
                    </h6>
                    <div
                      class="article-item-photo zooming wow fadeInDown"
                      data-wow-delay=".4s"
                      data-wow-offset="150"
                    >
                      {" "}
                      <img src={blogimg1} alt="" class="img-fluid" />{" "}
                    </div>
                    <div class="blogimgtpluselement wow rotateIn">
                      {" "}
                      <img src={pluselement} alt="" />
                    </div>
                    <div class="blogimgarelement ">
                      {" "}
                      <img src={element2png} alt="" class="ani-left-right" />
                    </div>
                    <div
                      class="blogimgrbbtn wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      {" "}
                      <a class="btn btn-primary mr-4 fr " href="#">
                        READ BLOG <i class="icon ion-ios-arrow-thin-right"></i>
                      </a>{" "}
                    </div>
                    <div class="bolgimgtitle ">
                      YOUR WAY OUT TO GERMANY - WHAT YOU NEED TO EXPLORE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default VisitThailand;
