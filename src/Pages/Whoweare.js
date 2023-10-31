import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
import { ReactTitle } from "react-meta-tags";

import WOW from "wow.js";

import logopng from "./img/logo.png";
import biglogopng from "./img/biglogobg.png";
import biglogoservicepng from "./img/biglogoservice.png";
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
import botlinepng from "./img/botline.png";
import wwabanner from "./img/wwabanner.jpg";
import dotsbg from "./img/dotsbg.jpg";
import hoarr from "./img/hoarr.jpg";
import biglogowwa from "./img/biglogowwa.png";
import wwapluselement from "./img/wwapluselement.png";
import blobsbg from "./img/blobsbg.png";
import hisimg from "./img/hisimg.png";
import jurneybg from "./img/jurneybg.png";
import wcubgimg from "./img/wcubgimg.jpg";
import misvisbg from "./img/misvisbg.jpg";
import techgraylogo from "./img/techgraylogo.png";
import pluselementmis from "./img/pluselementmis.png";
import pluselementaward from "./img/pluselementaward.png";
import award1 from "./img/award1.jpg";
import award2 from "./img/award2.jpg";
import award3 from "./img/award3.jpg";
import award4 from "./img/award4.jpg";
import award5 from "./img/award5.jpg";
import semicircleelementteam from "./img/semicircleelementteam.png";
import gmimg from "./img/gmimg.png";
import flight3 from "./img/plane.png";
import building from "./img/building.png";
import iata from "./img/iata.png";
import spatr from "./img/spatr.png";
import letr from "./img/letr.png";
import vfsg from "./img/vfsg.png";
import iso from "./img/iso.png";
import spcar from "./img/spcar.png";
import online from "./img/online.png";
import smtool from "./img/smtool.png";

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
import "./css/whoweare.css";
import "./js/timeline";
import "./js/script";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Partners from "../Components/Partners";

const Whoweare = () => {
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
    <div class="main-body theme-orange dark-horizontal whoweare overflow-hidden">
      <div class="animsition">
        <div class="wrapper">
          <ReactTitle title="Who We Are | Mannai Travels" />
          <Header />

          <div class="slide-container">
            <div class="slide-bg wow pulse">
              <div
                class="inside "
                style={{ backgroundImage: `url(${wwabanner})` }}
              ></div>
            </div>
            <div class="container">
              <div class="techpulusbot wow rotateIn">
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
              <div class="wwabotline">
                {" "}
                <img src={botlinepng} alt="" />
              </div>
              <div class="techserviceelement1bot">
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
                  class="wow slideInLeft text-white fw-bold fs-1 whowearebannerfont"
                  data-wow-duration="1.2s"
                >
                  WHO WE ARE
                </p>
                <p
                  class="normaltext  wow slideInRight"
                  data-wow-delay=".1s"
                  data-wow-duration=".80s"
                >
                  {" "}
                  Built upon a foundation of core human values, Mannai Travels
                  stands <br />
                  as a cherished and esteemed company in Qatar.{" "}
                </p>
              </div>
            </div>
          </div>

          <div class="slide-container pt0 ourhistory">
            <div class="slide-bg ">
              <div
                class="inside"
                style={{ backgroundImage: `url(${dotsbg})` }}
              ></div>
            </div>
            <div class="container col-12">
              <div class="hoarr ">
                {" "}
                <img src={hoarr} alt="" class="ani-left-right" />
              </div>
              <div class="historybiglogo">
                {" "}
                <img src={biglogowwa} alt="" />
              </div>
              <div class="pluselementohwwa wow rotateIn">
                {" "}
                <img src={wwapluselement} alt="" />
              </div>
              <div className="row">
                <div class="contentpartwwahistory col-12 col-md-6">
                  <h3 class="wow slideInLeft" data-wow-duration="1.2s">
                    OUR HISTORY
                  </h3>
                  <p
                    class="normaltext  wow slideInLeft"
                    data-wow-delay=".1s"
                    data-wow-duration=".80s"
                  >
                    {" "}
                    Mannai Travel, a distinguished name in Qatar and the broader
                    region, has earned its stellar reputation through the
                    provision of expert, responsive, and tailored services to
                    clients worldwide. Established in 1978, Mannai Travel has
                    been dedicated to crafting exceptional travel experiences
                    for both corporate and leisure travelers. As an accredited
                    IATA agent, Mannai Air Travel delivers comprehensive
                    solutions to both individual travelers and corporate
                    clientele. With a global presence through its affiliation
                    with BCD Travel and its role as the representative for VFS,
                    Mannai Travel efficiently manages visa applications for
                    numerous diplomatic missions.{" "}
                  </p>
                </div>
                <div className="col-12 col-md-6 historyimagecontainer">
                  <div class="historyimage wow fadeInRight ani-move2">
                    {" "}
                    <img src={blobsbg} />{" "}
                  </div>
                  <div class="historyimgpartwwa">
                    {" "}
                    <img src={hisimg} alt="" />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="histextpart">
            <div class="section  ">
              <div class="">
                <div class=" histext">
                  <p>
                    With a history spanning four decades, Mannai Travel has
                    extended its reach with branch offices strategically located{" "}
                    <br />
                    throughout Qatar, ensuring the highest standards of customer
                    service. Committed to thriving in a dynamic industry, <br />
                    Mannai Travel adopts a comprehensive approach to its
                    operations, resulting in remarkable client retention and a
                    strong <br />
                    presence in both local and regional markets. Experience the
                    rich legacy and exceptional services of Mannai Travel today.
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>

          {/* <div class="slide-container">
            <div class="slide-bg">
              <div
                class="inside"
                style={{ backgroundImage: `url(${jurneybg})` }}
              ></div>
            </div>
            <div class="row">
              <div class="journeywwa col-1 p-0" data-wow-duration="1.2s">
                MANNAI TRAVELS JOURNEY
              </div>
              <div class="contentpartjpwwa col-11 row">
                <div class="row main-timeline10 position-relative col-12">
                  <div class=" col-12 row">
                    <div
                      class=" col-12 col-md-6 col-lg-3 timeline wow fadeInRight"
                      data-wow-delay=".1s"
                      data-wow-duration="1s"
                    >
                      <div class="timeline-inner">
                        <div class="year">1978</div>
                        <div class="timeline-content">
                          <div class="post">ESTABLISHMENT</div>
                          <p class="description">
                            {" "}
                            Mannai Travel Establishment as a Full fledge in
                            house travel agency.{" "}
                          </p>
                        </div>
                        <div class="timeline-icon">
                          {" "}
                          <i class="fa fa-globe"></i>{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-12 col-md-6 col-lg-3 timeline wow fadeInRight"
                      data-wow-delay=".1s"
                      data-wow-duration="1.2s"
                    >
                      <div class="timeline-inner">
                        <div class="year">1982</div>
                        <div class="timeline-content">
                          <div class="post">IATA</div>
                          <p class="description">
                            {" "}
                            We got our accreditation from International Air
                            Transport Association(IATA){" "}
                          </p>
                        </div>
                        <div class="timeline-icon">
                          {" "}
                          <i class="fa fa-rocket"></i>{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-12 col-md-6 col-lg-3 timeline wow fadeInRight"
                      data-wow-delay=".1s"
                      data-wow-duration="1.4s"
                    >
                      <div class="timeline-inner">
                        <div class="year">1988</div>
                        <div class="timeline-content">
                          <div class="post">SPACE TRAVEL</div>
                          <p class="description">
                            {" "}
                            Mannai Travel established Space Travel which is the
                            General Sales Agent Division for FlyDubai, Kenya
                            Airways and Philippines Airlines.{" "}
                          </p>
                        </div>
                        <div class="timeline-icon">
                          {" "}
                          <i class="fa fa-briefcase"></i>{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-12 col-md-6 col-lg-3 timeline wow fadeInRight"
                      data-wow-delay=".1s"
                      data-wow-duration="1.6s"
                    >
                      <div class="timeline-inner">
                        <div class="year">1995</div>
                        <div class="timeline-content">
                          <div class="post">LEISURE TRAVEL</div>
                          <p class="description">
                            {" "}
                            Mannai Holidays was established, the leisure arm of
                            Mannai Travel is specializing in both outbound and
                            inbound leisure travels.{" "}
                          </p>
                        </div>
                        <div class="timeline-icon">
                          {" "}
                          <i class="fa fa-camera"></i>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=" col-12 row">
                    <div
                      class="col-12 col-md-6 col-lg-3 timeline wow fadeInRight"
                      data-wow-delay=".1s"
                      data-wow-duration="1.8s"
                    >
                      <div class="timeline-inner">
                        <div class="year">2007</div>
                        <div class="timeline-content">
                          <div class="post">VFS GLOBAL</div>
                          <p class="description">
                            {" "}
                            Mannai Travel became the global partner of VFS
                            Global and started providing visa facilitation to
                            customers
                          </p>
                        </div>
                        <div class="timeline-icon">
                          {" "}
                          <i class="fa fa-camera"></i>{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-12 col-md-6 col-lg-3 timeline wow fadeInRight"
                      data-wow-delay=".1s"
                      data-wow-duration="2s"
                    >
                      <div class="timeline-inner">
                        <div class="year">2017</div>
                        <div class="timeline-content">
                          <div class="post">ISO CERTIFIED</div>
                          <p class="description">
                            {" "}
                            We got our ISO certificate for International
                            Organization for Standardization{" "}
                          </p>
                        </div>
                        <div class="timeline-icon">
                          {" "}
                          <i class="fa fa-camera"></i>{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-12 col-md-6 col-lg-3 timeline wow fadeInRight"
                      data-wow-delay=".1s"
                      data-wow-duration="2.2s"
                    >
                      <div class="timeline-inner">
                        <div class="year">2018</div>
                        <div class="timeline-content">
                          <div class="post">SPACE CARGO</div>
                          <p class="description">
                            {" "}
                            Space Cargo was established which is the logistics
                            division of Mannai Travel and provides Door-to-Door
                            delivery services to countries like India, Nepal,
                            Bangladesh, Sri Lanka, Philippines, Indonesia, the
                            UK, USA and UAE.{" "}
                          </p>
                        </div>
                        <div class="timeline-icon">
                          {" "}
                          <i class="fa fa-camera"></i>{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-12 col-md-6 col-lg-3 timeline wow fadeInRight"
                      data-wow-delay=".1s"
                      data-wow-duration="2.4s"
                    >
                      <div class="timeline-inner">
                        <div class="year">2020</div>
                        <div class="timeline-content">
                          <div class="post">ONLINE</div>
                          <p class="description">
                            {" "}
                            Best Holidays Online was established which is a B2C
                            website helping customers in India book their flight
                            tickets, hotels and etc.{" "}
                          </p>
                        </div>
                        <div class="timeline-icon">
                          {" "}
                          <i class="fa fa-camera"></i>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div class="section section-item p0 position-relative">
            <div class="container-fluid">
              <div class="slide-body journeybg">
                <div class="container col-sm-12">
                  <h4 class="journey text-white pt-3">
                    MANNAI TRAVELS JOURNEY{" "}
                  </h4>
                  <div class="about__timeline">
                    <div id="timeline-aboutus" class="timeline text-inverted">
                      {" "}
                      <img class="timeline__cursor" src={flight3} width="60" />
                      <ul class="timeline__steps translateX263">
                        <li class="prev-step">
                          {" "}
                          <span class="year bg1 font-lg headingbold">1978</span>
                          <p class="bubble headingbold1">ESTABLISHMENT</p>
                          <p class="textnormal">
                            Mannai Travel Establishment as a Full fledge in
                            house travel agency.
                          </p>
                          <p class="build">
                            {" "}
                            <img src={building} />
                          </p>
                        </li>
                        <li class="active">
                          {" "}
                          <span class="year bg2  font-lg headingbold">
                            1982
                          </span>
                          <p class="bubble headingbold2">IATA</p>
                          <p class="textnormal">
                            We got our accreditation from International Air
                            Transport Association(IATA)
                          </p>
                          <p class="iata">
                            {" "}
                            <img src={iata} />
                          </p>
                        </li>
                        <li class="next-step">
                          {" "}
                          <span class="year  bg3 font-lg headingbold">
                            1988
                          </span>
                          <p class="bubble headingbold3">SPACE TRAVEL</p>
                          <p class="textnormal">
                            Mannai Travel established Space Travel which is the
                            General Sales Agent Division for FlyDubai, Kenya
                            Airways and Philippines Airlines.
                          </p>
                          <p class="spatr">
                            {" "}
                            <img src={spatr} />
                          </p>
                        </li>
                        <li class="">
                          {" "}
                          <span class="year bg4 font-lg headingbold">1995</span>
                          <p class="bubble headingbold4">LEISURE TRAVEL</p>
                          <p class="textnormal">
                            Mannai Holidays was established, the leisure arm of
                            Mannai Travel is specializing in both outbound and
                            inbound leisure travels.
                          </p>
                          <p class="letr">
                            {" "}
                            <img src={letr} />
                          </p>
                        </li>
                        <li class="">
                          {" "}
                          <span class="year bg5 font-lg headingbold">2007</span>
                          <p class="bubble headingbold5">VFS GLOBAL</p>
                          <p class="textnormal">
                            Mannai Travel became the global partner of VFS
                            Global and started providing visa facilitation to
                            customers
                          </p>
                          <p class="vfsg">
                            {" "}
                            <img src={vfsg} />
                          </p>
                        </li>
                        <li class="">
                          {" "}
                          <span class="year bg6 font-lg headingbold">2017</span>
                          <p class="bubble headingbold6">ISO CERTIFIED</p>
                          <p class="textnormal">
                            We got our ISO certificate for International
                            Organization for Standardization
                          </p>
                          <p class="iso">
                            {" "}
                            <img src={iso} />
                          </p>
                        </li>
                        <li class="">
                          {" "}
                          <span class="year bg7 font-lg headingbold">2018</span>
                          <p class="bubble headingbold7">SPACE CARGO</p>
                          <p class="textnormal">
                            Space Cargo was established and provides
                            Door-to-Door delivery services to countries like
                            India, Nepal, Bangladesh, Sri Lanka, Philippines,
                            Indonesia, UK, USA &amp; UAE.
                          </p>
                          <p class="spcar">
                            {" "}
                            <img src={spcar} />
                          </p>
                        </li>
                        <li class="">
                          {" "}
                          <span class="year bg8 font-lg headingbold">2020</span>
                          <p class="bubble headingbold8">ONLINE</p>
                          <p class="textnormal">
                            Best Holidays Online was established which is a B2C
                            website helping customers in India book their flight
                            tickets, hotels and etc.
                          </p>
                          <p class="online">
                            {" "}
                            <img src={online} />
                          </p>
                        </li>
                        <li class="">
                          {" "}
                          <span class="year bg9 font-lg headingbold">2023</span>
                          <p class="bubble headingbold9">SMART TOOLS</p>
                          <p class="textnormal">
                            Launching BI tools for corporate customers to for
                            qucik decision making.
                          </p>
                          <p class="smtool">
                            {" "}
                            <img src={smtool} />
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="wcu">
            <div class="slide-container">
              <div class="slide-bg">
                <div
                  class="inside"
                  style={{ backgroundImage: `url(${wcubgimg})` }}
                ></div>
              </div>
              <div class="wcuheading ps-5">
                <h3
                  class="whowearebannerfont wow slideInLeft "
                  data-wow-duration="1.2s"
                >
                  WHY
                  <br />
                  CHOOSE US
                </h3>
              </div>
              <div class="container">
                <div class="contentpartwcubg row p-4">
                  <div
                    class="normaltext  wow slideInLeft col-12 col-lg-6"
                    data-wow-delay=".1s"
                    data-wow-duration=".80s"
                  >
                    <p>
                      MANNAI TRAVEL PROVIDES A WIDE RANGE OF TRAVEL <br />
                      SOLUTIONS THAT ARE CUSTOMIZED TO SUIT SPECIFIC <br />
                      BUSINESS REQUIREMENTS. ARMED WITH IN-DEPTH <br />
                      INDUSTRY KNOWLEDGE AND KEY PARTNERSHIPS,
                      <br />
                      OUR INSIGHTS AND EXPERTISE ARE BOTH GLOBAL AND <br />
                      LOCAL, WHILE BEING FLEXIBLE AND AGILE.{" "}
                    </p>
                  </div>

                  <div
                    class="listtext  wow slideInRight col-12 col-lg-6"
                    data-wow-delay=".1s"
                    data-wow-duration=".80s"
                  >
                    <ul>
                      <li>
                        <i class="icon ion-chevron-right"></i> Personalized
                        travel plans and programs{" "}
                      </li>
                      <li>
                        <i class="icon ion-chevron-right"></i> Consolidating
                        travel budgets{" "}
                      </li>
                      <li>
                        <i class="icon ion-chevron-right"></i> Cost optimization{" "}
                      </li>
                      <li>
                        <i class="icon ion-chevron-right"></i> Timely business
                        reviews{" "}
                      </li>
                      <li>
                        <i class="icon ion-chevron-right"></i> Streamlining
                        processes{" "}
                      </li>
                      <li>
                        <i class="icon ion-chevron-right"></i> Technology
                        solutions{" "}
                      </li>
                      <li>
                        <i class="icon ion-chevron-right"></i> Dedicated travel
                        advisors{" "}
                      </li>
                      <li>
                        <i class="icon ion-chevron-right"></i> Round-the-clock
                        service
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="serviceroundtxttechnology wow rotateIn">
                  {" "}
                  <img src={roundtxtpng} alt="" />
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
                <div class="wcubiglogo">
                  {" "}
                  <img src={biglogopng} alt="" />
                </div>
                <div class="pluselementwcu wow rotateIn">
                  {" "}
                  <img src={pluselement} alt="" />
                </div>
                <div class="serviceelement2 ">
                  {" "}
                  <img src={element2png} alt="" class="ani-left-right" />
                </div>
                <div class="semicircledownelement">
                  {" "}
                  <img src={semicircledownelement} alt="" />
                </div>
                <div class="semicircleelement">
                  {" "}
                  <img src={semicircleelement} alt="" />
                </div>
                <div class="uparrowelementWCU">
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
              </div>
            </div>
          </div>

          <div class="misvis">
            <div class="slide-container">
              <div class="slide-bg ">
                <div
                  class="inside"
                  style={{ backgroundImage: `url(${misvisbg})` }}
                ></div>
              </div>
              <div class="container">
                <div class="uparrowelementmis ">
                  {" "}
                  <img src={uparrowelement} alt="" class="ani-top-bottom" />
                </div>
                <div class="element2vis ">
                  {" "}
                  <img src={element2png} alt="" class="ani-left-right" />
                </div>
                <div class="wwabiglogo">
                  {" "}
                  <img src={techgraylogo} alt="" />
                </div>
                <div class="pluselementmis wow rotateIn">
                  {" "}
                  <img src={pluselementmis} alt="" />
                </div>
                <div class="pluselementvis wow rotateIn">
                  {" "}
                  <img src={pluselementmis} alt="" />
                </div>
                <div class="misviselementsmallx">
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
                <div class="bb wow backInRight"></div>
                <div className="row">
                  <div class="missionpart col-12 col-lg-6">
                    <div class="contentpartmission">
                      <h3 class="wow slideInLeft" data-wow-duration="1.2s">
                        MISSION
                      </h3>
                      <p
                        class="normaltext  wow slideInLeft"
                        data-wow-delay=".3s"
                        data-wow-duration="1.2s"
                      >
                        {" "}
                        AT MANNAI TRAVELS, OUR MISSION IS TO BE THE PREMIER
                        PROVIDER OF INNOVATIVE TRAVEL SOLUTIONS, DELIVERING
                        SEAMLESS AND PERSONALIZED EXPERIENCES TO OUR CLIENTS. WE
                        STRIVE TO EXCEED EXPECTATIONS BY OFFERING TOP-NOTCH
                        SERVICES THAT CATER TO DIVERSE TRAVEL NEEDS WHILE
                        UPHOLDING THE HIGHEST STANDARDS OF PROFESSIONALISM AND
                        INTEGRITY. OUR COMITMENT IS TO EMPOWER TRAVELERS, FOSTER
                        GROWTH, AND CONTRIBUTE POSITIVELY TO THE TRAVEL INDUSTRY
                        AND THE COMMUNITIES WE SERVE.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="visionpart col-12 col-lg-6">
                    <div class="contentpartvision">
                      <h3 class="wow slideInRight" data-wow-duration="1.5s">
                        VISION
                      </h3>
                      <p
                        class="normaltext  wow slideInRight"
                        data-wow-delay=".3s"
                        data-wow-duration="1.5s"
                      >
                        {" "}
                        OUR VISION AT MANNAI TRAVELS IS TO SHAPE THE FUTURE OF
                        TRAVEL BY CONTINUOUSLY INNOVATING AND ADAPTING TO THE
                        EVOLVING NEEDS OF OUR CLIENTS. WE AIM TO BE THE
                        PREFERRED CHOICE FOR TRAVELERS AND CORPORATE PARTNERS
                        ALIKE, KNOWN FOR OUR EXCEPTIONAL CUSTOMER SERVICE,
                        CUTTING-EDGE TECHNOLOGY, AND SUSTAINABLE TRAVEL
                        PRACTICES. THROUGH GLOBAL COLLABORATION, A DEDICATED
                        TEAM, AND A PASSION FOR EXPLORATION, WE ENVISION A WORLD
                        WHERE TRAVEL IS NOT ONLY SEAMLESS BUT ALSO ENRICHING,
                        LEAVING LASTING MEMORIES FOR ALL WHO EMBARK ON JOURNEYS
                        WITH US.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="award ">
            <div class="section section-content slide-dark">
              <div class="container-fluid">
                <div class="project-list-flash row  no-gutters ">
                  <div
                    class="col-lg-4 col-sm-6 p-0 wow fadeInRight"
                    data-wow-delay=".2s"
                  >
                    {" "}
                    <a class="project-item">
                      <div class="aletter">A</div>
                      <div class="wletter">W</div>
                      <div class="pluselementaward wow rotateIn">
                        {" "}
                        <img src={pluselementaward} alt="" />
                      </div>
                      <div
                        class="project-carousel-photo"
                        style={{ backgroundImage: `url(${award1})` }}
                      ></div>
                    </a>{" "}
                  </div>
                  <div
                    class="col-lg-4 col-sm-6 p-0 wow fadeInRight "
                    data-wow-delay=".4s"
                  >
                    {" "}
                    <a class="project-item">
                      <div class="aaletter">A</div>
                      <div
                        class="project-carousel-photo"
                        style={{ backgroundImage: `url(${award2})` }}
                      ></div>
                    </a>{" "}
                  </div>
                  <div
                    class="col-lg-4 col-sm-6 p-0 wow fadeInRight "
                    data-wow-delay=".6s"
                  >
                    <div class="awardelementsmallx">
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
                    <a class="project-item">
                      <div
                        class="project-carousel-photo"
                        style={{ backgroundImage: `url(${award3})` }}
                      ></div>
                    </a>{" "}
                  </div>
                  <div
                    class="col-lg-4 col-sm-6 p-0 wow fadeInLeft "
                    data-wow-delay=".2s"
                  >
                    {/* <div class="awardelement1bot">
                      {" "}
                      <img
                        src={element1png}
                        class="wow pulse"
                        data-wow-delay="300ms"
                        data-wow-iteration="infinite"
                        data-wow-duration="2s"
                        alt=""
                      />
                    </div> */}
                    <a class="project-item">
                      <div
                        class="project-carousel-photo"
                        style={{ backgroundImage: `url(${award4})` }}
                      ></div>
                    </a>{" "}
                  </div>
                  <div
                    class="col-lg-4 col-sm-6 p-0 wow fadeInLeft "
                    data-wow-delay=".4s"
                  >
                    {" "}
                    <a class="project-item">
                      <div class="rletter">R</div>
                      <div
                        class="project-carousel-photo"
                        style={{ backgroundImage: `url(${award5})` }}
                      ></div>
                    </a>{" "}
                  </div>
                  <div
                    class="col-lg-4 col-sm-6 p-0 wow fadeInLeft "
                    data-wow-delay=".6s"
                  >
                    {" "}
                    <a class="project-item">
                      <div class="dletter">D</div>
                      <div class="sletter">S</div>
                      <div class="pluselementaward1 wow rotateIn">
                        {" "}
                        <img src={pluselementaward} alt="" />
                      </div>
                      <div
                        class="project-carousel-photo"
                        style={{ backgroundImage: `url(${award2})` }}
                      ></div>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section section-item p0 ">
            <div class="container-fluid team">
              <div class="slide-body teambg">
                <div class="container-fluid">
                  <div class="contentpartteam">
                    <h3 class="wow slideInLeft" data-wow-duration="1.2s">
                      Our Leadership Team
                    </h3>
                    <div class=" row  mt-16">
                      <div
                        class="col-md-4  gmdeskimg wow fadeInLeft"
                        data-wow-delay=".2s"
                      >
                        {" "}
                        <img src={gmimg} alt="" />{" "}
                      </div>
                      <div class="col-md-6 gmsmsg pe-4">
                        <h4 class="wow slideInRight" data-wow-duration="1.2s">
                          MESSAGE FROM
                          <br />
                          GM’S DESK
                        </h4>
                        <div
                          class="normaltext  wow slideInRight"
                          data-wow-delay=".1s"
                          data-wow-duration=".80s"
                        >
                          <p className="my-0">
                            {" "}
                            At Mannai Travel, it is our privilege to serve you,
                            and I wanted to take a moment to express my
                            heartfelt gratitude for your continued trust and
                            support.
                          </p>
                          <p className="my-0">
                            In these unprecedented times, the world of travel
                            has faced its share of challenges. Yet, we have
                            remained steadfast in our commitment to providing
                            you with exceptional service, ensuring your safety,
                            comfort, and peace of mind throughout your journeys.
                          </p>
                          <p className="my-0">
                            Our dedicated team has worked tirelessly to adapt to
                            the changing landscape, offering you flexible
                            options, top-notch safety measures, and a seamless
                            booking experience through our secure and reliable
                            apps.
                          </p>
                          <p className="my-0">
                            As we look forward to the future, Mannai Travel
                            remains committed to innovation, excellence, and
                            personalized service. We are excited about the
                            opportunities that lie ahead and are continuously
                            striving to enhance your travel experiences.
                          </p>
                          <p className="my-0">
                            Your feedback is invaluable to us, and we encourage
                            you to share your thoughts and suggestions as we
                            work together to shape the future of travel. Our
                            24/7 support team is here to assist with any queries
                            you may have, travel-related or otherwise, ensuring
                            that your every need is met.
                          </p>
                          <p className="my-0">
                            In conclusion, Mannai Travel is not just a travel
                            agency; it's a trusted partner in your journeys.
                            Thank you for choosing us, and we look forward to
                            serving you with dedication, reliability, and a
                            commitment to excellence.
                          </p>
                          <p className="mt-2 mb-0">Warm regards,</p>
                          <p className="mt-1 mb-0">Shafiq Nasiruddin</p>
                          <p className="my-0">General Manager, Mannai Travel</p>
                        </div>
                      </div>
                    </div>
                    <div class=" row  ">
                      <div
                        class="col-md-12 col-sm-6 gmimg wow fadeInLeft"
                        data-wow-delay=".2s"
                      >
                        <div class="teammembers">
                          <div class="teamsheading">
                            <h5>TEAM</h5>
                          </div>
                          <div className="position-relative">
                            <div class="container">
                              <div class="row">
                                <div id="teams-slider" class="owl-carousel">
                                  <div class="teammemberslider">
                                    <div class="pic">
                                      {" "}
                                      <img src={gmimg} alt="" />{" "}
                                    </div>
                                    <div class="name">SHAFIQ NASIRUDDIN </div>
                                    <span class="title">
                                      General Manager
                                    </span>{" "}
                                  </div>
                                  <div class="teammemberslider">
                                    <div class="pic">
                                      {" "}
                                      <img src={gmimg} alt="" />{" "}
                                    </div>
                                    <div class="name">SHAFIQ NASIRUDDIN </div>
                                    <span class="title">
                                      General Manager
                                    </span>{" "}
                                  </div>
                                  <div class="teammemberslider">
                                    <div class="pic">
                                      {" "}
                                      <img src={gmimg} alt="" />{" "}
                                    </div>
                                    <div class="name">SHAFIQ NASIRUDDIN </div>
                                    <span class="title">
                                      General Manager
                                    </span>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="waveselementdarkteams">
                              {" "}
                              <img
                                src={waveselementdark}
                                class="ani-move"
                                alt=""
                              />
                            </div>
                            <div class="smallcircleelementteams">
                              {" "}
                              <img src={smallcirclepng} alt="" />
                            </div>
                            <div class="serviceelementteams ">
                              {" "}
                              <img
                                src={element2png}
                                alt=""
                                class="ani-left-right"
                              />
                            </div>
                            <div class="semicircledownelementteams">
                              {" "}
                              <img src={semicircledownelement} alt="" />
                            </div>
                            <div class="teamselementsmallx">
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
                            <div class="pluselementteams wow rotateIn">
                              {" "}
                              <img src={pluselementaward} alt="" />
                            </div>
                            <div class="teamselement1bot">
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="semicircleelementteam">
                      {" "}
                      <img src={semicircleelementteam} alt="" />
                    </div>
                    <div class="water1elementteam">
                      {" "}
                      <img src={water1element} alt="" class="ani-move" />
                    </div>
                    <div class="teambiglogo">
                      {" "}
                      <img src={biglogowwa} alt="" />
                    </div>
                    <div class="pluselementteamleadership wow rotateIn">
                      {" "}
                      <img src={wwapluselement} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Partners />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
