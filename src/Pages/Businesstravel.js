import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
import { ReactTitle } from "react-meta-tags";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import WOW from "wow.js";
import CountUp from "react-countup";

import biglogoservicepng from "./img/biglogoservice.png";
import roundtxtpng from "./img/roundtxt.png";
import element1png from "./img/element1.png";
import element2png from "./img/element2.png";
import elementsmallxpng from "./img/elementsmallx.png";
import pluselement from "./img/pluselement.png";

import uparrowelement from "./img/uparrowelement.png";
import wwapluselement from "./img/wwapluselement.png";
import ltbannerbg from "./img/ltbannerbg.jpg";
import ltbiglogo from "./img/ltbiglogo.png";
import smallxltm from "./img/smallxltm.png";
import lteimgbg from "./img/lteimgbg.png";
import ltmimg from "./img/ltmimg.png";
import keybenibg from "./img/keybenibg.jpg";
import grayuparr from "./img/grayuparr.png";
import likeimg from "./img/like.png";
import smallxgray from "./img/smallxgray.png";
import btbg from "./img/btbg.jpg";
import btmgimg from "./img/btmgimg.png";
import btmimg from "./img/btmimg.png";
import btarrow from "./img/btarrow.png";
import ambgimg from "./img/ambgimg.png";
import amimg from "./img/amimg.png";
import demobg from "./img/demobg.jpg";

import "animsition";
import "animsition/dist/css/animsition.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "socicon/css/socicon.css";

import "./css/animate.min.css";
import "./css/ionicons.min.css";
import "./css/style.css";
import "./css/Businesstravel.css";
import "./js/script";
import Requestform from "../Components/Requestform";

const Businesstravel = () => {
  const location = useLocation();
  const [acc1, setAcc1] = useState(true);
  const [acc2, setAcc2] = useState(false);
  const [acc3, setAcc3] = useState(false);
  const [acc4, setAcc4] = useState(false);
  const [acc5, setAcc5] = useState(false);

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
      $(".toggle-accordion").click(function () {
        const target = $($(this).data("target"));
        target.collapse("toggle");

        // Toggle the plus/minus icon
        const icon = $(this).find(".icon-plus");
        icon.toggleClass("icon-minus");
      });
    });

    const htmlTag = document.querySelector("html");
    if (htmlTag.classList.contains("body-menu-opened")) {
      htmlTag.classList.remove("body-menu-opened");
      htmlTag.classList.add("body-menu-close");
    }

    // Initialize or use the scripts here
    // For example, you can initialize a WOW.js animation
    // $(".a-counter").countdown(() => {});
    new WOW().init();
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
    <div class="main-body theme-orange dark-horizontal businesstravel overflow-hidden">
      <div class="animsition">
        <div class="wrapper">
          <ReactTitle title="Business Travel | Mannai Travels" />
          <Header />

          <div class="slide-container">
            <div class="slide-bg wow pulse">
              <div
                class="inside "
                style={{ backgroundImage: `url(${btbg})` }}
              ></div>
            </div>
            <div class="container">
              <div class="techpulusbot wow rotateIn">
                {" "}
                <img src={roundtxtpng} alt="" />
              </div>
              <div class="btmbanelementtech ">
                {" "}
                <img src={element2png} alt="" class="ani-left-right" />
              </div>
              <div class="smlogo">
                {" "}
                <img src={biglogoservicepng} alt="" />
              </div>
              <div class="btmpluselement wow rotateIn">
                {" "}
                <img src={pluselement} alt="" />
              </div>
              <div class="uparrowelement">
                {" "}
                <img src={uparrowelement} alt="" class="ani-top-bottom" />
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
              <div class="btmtext">
                <h3 class="wow slideInLeft " data-wow-duration="1.2s">
                  BUSINESS TRAVEL
                </h3>
                <p
                  class="normaltext  wow slideInRight"
                  data-wow-delay=".1s"
                  data-wow-duration=".80s"
                >
                  {" "}
                  Our core expertise lies in organizing and overseeing business
                  travel efficiently. We assist companies in optimizing their
                  business travel expenditures, providing an array of travel
                  related services delivered with exceptional service standards.{" "}
                </p>
              </div>
            </div>
          </div>

          <div class="container-fluid btm">
            <div class="slide-body btmbg">
              <div class="row ">
                <div class="col-12 col-lg-6">
                  <div class="tmpulusbot ">
                    {" "}
                    <img src={roundtxtpng} class="wow rotateIn" alt="" />
                  </div>
                  <div class="col-md-12  travelmanagementpart ">
                    <h4
                      class="wow fadeInLeft"
                      data-wow-delay="0.2s"
                      data-wow-duration="1s"
                    >
                      Business Travel Management{" "}
                    </h4>
                    <h3
                      class="wow fadeInRight"
                      data-wow-delay="0.4s"
                      data-wow-duration="1s"
                    >
                      {" "}
                      The perfect solution is as <br />
                      unique as your enterprise!
                    </h3>
                    <p
                      class="wow fadeInLeft"
                      data-wow-delay="0.6s"
                      data-wow-duration="1s"
                    >
                      Discover our range of solutions to ﬁnd the one that <br />
                      perfectly aligns with your requirements. Whether you{" "}
                      <br />
                      prefer a straightforward approach, a customized <br />
                      solution, or a high-touch service, we'll stand beside{" "}
                      <br />
                      you, ensuring every journey is meaningful.
                    </p>
                    <div class="serviceelementbtm ">
                      {" "}
                      <img src={element2png} alt="" class="ani-left-right" />
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 p0  position-relative">
                  <div class="btmgimg wow pulse">
                    <img src={btmgimg} className="mobbtwoman" alt="" />
                  </div>
                  <div class="btmimg ">
                    <img
                      src={btmimg}
                      class="wow rotateIn mobbtwomanbg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid amgradientbg">
            <div class="row ">
              <div class="col-lg-6">
                <div class="col-md-12  accmanagementpart  ">
                  <h3
                    class="wow fadeInLeft"
                    data-wow-delay="0.2s"
                    data-wow-duration="1s"
                  >
                    {" "}
                    ACCOUNT MANAGEMENT
                  </h3>
                  <p
                    class="wow fadeInLeft"
                    data-wow-delay="0.4s"
                    data-wow-duration="1s"
                  >
                    Establishing a robust travel program today is similar to{" "}
                    <br />
                    constructing a complex puzzle: it demands a skilled
                    strategist. <br />
                    <br />
                    With Mannai Travels' Account Management, we'll assist you in{" "}
                    <br />
                    creating a travel program that not only pushes boundaries{" "}
                    <br />
                    but also reﬂects your business identity, all while
                    proactively <br />
                    averting costly pitfalls.
                  </p>
                  <div class="serviceelementbtm ">
                    {" "}
                    <img src={btarrow} alt="" class="ani-left-right" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 p0 position-relative">
                <div class="accmanagementimagebg wow fadeInRight ani-move2">
                  {" "}
                  <img src={ambgimg} />{" "}
                </div>
                <div class="amimg">
                  {" "}
                  <img src={amimg} alt="" />{" "}
                </div>
              </div>
            </div>
            <div class="row customerper">
              <div class="col-lg-6 p0">
                <div class="nintyeight ">
                  <div class="inside a-counter" data-value="98">
                    <CountUp end={98} duration={10}></CountUp>{" "}
                    <span class="percentage">%</span>
                  </div>{" "}
                </div>
                <div class="cr">
                  {" "}
                  <h4
                    class="wow fadeInLeft"
                    data-wow-delay="0.4s"
                    data-wow-duration="1s"
                  >
                    CUSTOMER RETENTION
                  </h4>{" "}
                </div>
                <div class="nintyfive">
                  <div class="inside a-counter">
                    <CountUp end={95} duration={10}></CountUp>{" "}
                    <span class="percentage">%</span>
                  </div>{" "}
                </div>
                <div class="cs">
                  {" "}
                  <h4
                    class="wow fadeInLeft"
                    data-wow-delay="0.5s"
                    data-wow-duration="1s"
                  >
                    CUSTOMER SATISFACTION
                  </h4>{" "}
                </div>
              </div>
              <div class="col-lg-6 comitted">
                <div
                  class="col-md-12  amtext  wow fadeInRight"
                  data-wow-delay="0.2s"
                  data-wow-duration="1s"
                >
                  <h4
                    class=" wow fadeInRight"
                    data-wow-delay="0.3s"
                    data-wow-duration="1s"
                  >
                    {" "}
                    Having a committed account manager
                    <br />
                    at your service means you will :{" "}
                  </h4>
                  <ul>
                    <li>
                      Unlock exclusive corporate deals you've yet to explore.
                    </li>
                    <li>
                      Explore an extensive inventory, whether it's flights or
                      hotels, all with unbeatable rates you've never seen
                      before.
                    </li>
                    <li>
                      Discover a more streamlined travel program tailored to
                      meet your precise requirements.
                    </li>
                    <li>
                      Gain entry to resources and comprehensive reports that
                      dissect critical trends, facilitating worldwide
                      consolidation and uniformity.
                    </li>
                    <li>
                      Strengthen your travel policy and deploy tools that
                      elevate your efficiency.
                    </li>
                  </ul>
                  <div class="amtextelementbtm ">
                    {" "}
                    <img src={btarrow} alt="" class="ani-left-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid btm businesslike position-relative">
            <div class="slide-body counterwhitebg">
              <div class="row ">
                <div class="col-lg-12 countpart">
                  <div class="countpulusbot wow rotateIn">
                    {" "}
                    <img src={pluselement} alt="" />
                  </div>
                  <div class="graypluselement  position-absolute rotateIn d-none d-sm-block">
                    {" "}
                    <img src={pluselement} alt="" />
                  </div>
                  <div class="countuparrowelement">
                    {" "}
                    <img src={uparrowelement} alt="" class="ani-top-bottom" />
                  </div>
                  <div class="countelementsmallx d-none d-sm-block">
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
                  <div className="d-flex mt-5  ms-5 thumb">
                    {" "}
                    <h5
                      class="wow fadeInLeft pt-3 "
                      data-wow-delay="0.4s"
                      data-wow-duration="1s"
                    >
                      We've excelled thus far and are now <br />
                      pushing the boundaries even further{" "}
                    </h5>
                    <div class="likeimg wow flash pt-3">
                      {" "}
                      <img src={likeimg} alt="" class="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="facts row ">
                <div class="col-md-3 fact-item">
                  <div class=" font-abril text-blue">
                    <div class="inside a-counter mplusblue">
                      <CountUp end={10} duration={3}></CountUp>{" "}
                      <span class="fact-item-param mplusblue">M+</span>
                    </div>
                    <p class="count-textblue">
                      HAPPY TRAVELLERS
                      <br />
                      PER YEAR
                    </p>
                  </div>
                </div>
                <div class="col-md-3 fact-item">
                  <div class=" font-abril text-blue">
                    <div class="inside a-counter mplusblue">
                      <CountUp end={45} duration={5}></CountUp>{" "}
                      <span class="fact-item-param mplusblue">+</span>
                    </div>
                    <p class="count-textblue">
                      YEARS IN BUSINESS
                      <br />
                      TRAVEL
                    </p>
                  </div>
                </div>
                <div class="col-md-3 fact-item">
                  <div class=" font-abril text-blue">
                    <div class="inside a-counter mplusblue">
                      <CountUp end={100} duration={7}></CountUp>{" "}
                      <span class="fact-item-param mplusblue">+</span>
                    </div>
                    <p class="count-textblue">TRAVEL EXPERTS</p>
                  </div>
                </div>
                <div class="col-md-3 fact-item">
                  <div class=" font-abril text-blue">
                    <div class="inside a-counter mplusblue">
                      <CountUp end={200} duration={8}></CountUp>{" "}
                      <span class="fact-item-param mplusblue">+</span>
                    </div>
                    <p class="count-textblue">CORPORATES</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="keyben ">
            <div class="slide-container">
              <div class="slide-bg">
                <div
                  class="inside"
                  style={{ backgroundImage: `url(${keybenibg})` }}
                ></div>
              </div>
              <div class="container">
                <div class="keybenelement2 ">
                  {" "}
                  <img src={element2png} alt="" class="ani-left-right" />
                </div>
                <h5 class="wow slideInLeft " data-wow-duration="1.2s">
                  Key benefits of using Mannai’s
                  <br />
                  Corporate Booking Tool
                </h5>
                <div class="row">
                  <div class="col-lg-6 finfea">
                    <div class="adminfeatext "> ADMIN FEATURE</div>
                    <div class=" adminfeabg wow wow slideInLeft">
                      <div class="contentpartadminfea">
                        <ul>
                          <li class="wow fadeInLeft data-wow-delay='.1s'  ">
                            100% Automated Travel Booking solutions. Real-time
                            ticketing{" "}
                          </li>
                          <li class="wow fadeInLeft data-wow-delay='1.1s'  ">
                            Exhaustive search result display through Multiple
                            GDS and LCC
                          </li>
                          <li class="wow fadeInLeft data-wow-delay='1.2s'  ">
                            Airline API Integrations for all products{" "}
                          </li>
                          <li class="wow fadeInLeft data-wow-delay='1.3s'  ">
                            Online multi-tier travel approval workflow{" "}
                          </li>
                          <li class="wow fadeInLeft data-wow-delay='1.4s'  ">
                            Online Cancellations / ability to track amendments
                          </li>
                          <li class="wow fadeInLeft data-wow-delay='1.5s' ">
                            Ability to Sort / Filter and Email results to
                            Travelers{" "}
                          </li>
                          <li class="wow fadeInLeft data-wow-delay='1.6s'  ">
                            Multiple payment options: BTA, Credit Card & Deposit
                          </li>
                          <li class="wow fadeInLeft data-wow-delay='1.7s'  ">
                            User roles to control access levels for each
                            employee
                          </li>
                          <li class="wow fadeInLeft data-wow-delay='1.8s'  ">
                            Accounts, Travel administrator, IT, Travelers &
                            Approvers
                          </li>
                          <li class="wow fadeInLeft data-wow-delay='1.9s' ">
                            Ability to display and sell Published Fares & GDS
                            Private Fares
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 adminfea">
                    <div class=" finfeabg wow slideInRight">
                      <div class="contentpartadminfea">
                        <ul>
                          <li class="wow fadeInRight data-wow-delay='.2s' ">
                            Automated Commercials computation, ensuring 100%
                            transparency
                          </li>
                          <li class="wow fadeInRight data-wow-delay='.3s' ">
                            Powerful Expense and Accounting reports, analytics
                            and visual charts enabling you to track your travel
                            expenditure
                          </li>
                          <li class="wow fadeInRight data-wow-delay='.4s' ">
                            track your travel expenditure Band-wise /
                            product-wise real-time reports{" "}
                          </li>
                          <li class="wow fadeInRight data-wow-delay='.5s' ">
                            Online multi-tier travel approval workflow{" "}
                          </li>
                          <li class="wow fadeInRight data-wow-delay='.6s'  ">
                            Accounting XML feeds for auto-import into Financial
                            Package
                          </li>
                          <li class="wow fadeInRight data-wow-delay='.7s' ">
                            Security Audit reports
                          </li>
                          <li class="wow fadeInRight data-wow-delay='.8s'  ">
                            Real-time missed Saving reporting
                          </li>
                          <li class="wow fadeInRight data-wow-delay='.9s'  ">
                            Automated passing of Tour-codes
                          </li>
                          <li class="wow fadeInRight data-wow-delay='1s'  ">
                            Various MIS Reports to help ﬁnance team to pull out
                            management reports{" "}
                          </li>
                          <li class="wow fadeInRight data-wow-delay='1.1s'  ">
                            Mordern Dashboards
                          </li>
                          <li class="wow fadeInRight data-wow-delay='1.2s'  ">
                            360 Degree overview of your spendings vs savings etc
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="finfeatext typing" data-wow-duration="1.2s">
                      FINANCE FEATURE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Requestform />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Businesstravel;
