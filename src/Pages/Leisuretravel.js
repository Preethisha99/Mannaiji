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
import elementsmallxpng from "./img/smallxgray.png";
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
import likeblueimg from "./img/likeblueimg.png";
import smallxgray from "./img/smallxgray.png";
import msgbox1 from "./img/msgbox1.png";
import msgbox2 from "./img/msgbox2.png";
import msgbox4 from "./img/msgbox4.png";
import msgbox5 from "./img/msgbox5.png";
import msgimg1 from "./img/booking.png";
import msgimg2 from "./img/gift-box.png";
import msgimg3 from "./img/user.png";
import msgimg4 from "./img/24-hours-support.png";
import msgimg5 from "./img/secure.png";
import qatarmap from "./img/qatarmap.png";

import "animsition";
import "animsition/dist/css/animsition.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "socicon/css/socicon.css";

import "./css/animate.min.css";
import "./css/ionicons.min.css";
import "./css/style.css";
import "./css/leisuretravel.css";
import "./js/script";

const Leisuretravel = () => {
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
          // '<div class="spinner"><div class="mannai-logo-gif"></div></div>', // e.g '<img src="loading.svg" />'
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
    console.log("hi");

    if (ppnav) {
      ppnav.remove(); // Remove the ppnav element from the DOM
    }
  }, []);

  return (
    <div class="main-body theme-orange dark-horizontal leisuretravel overflow-hidden">
      <div class="animsition">
        <div class="wrapper">
          <ReactTitle title="Leisure Travel | Mannai Travels" />
          <Header />
          <div class="slide-container">
            <div class="slide-bg wow pulse">
              <div
                class="inside "
                style={{ backgroundImage: `url(${ltbannerbg})` }}
              ></div>
            </div>
            <div class="container">
              <div class="techpulusbot wow rotateIn ">
                {" "}
                <img src={roundtxtpng} alt="" />
              </div>
              <div class="ltarelement ">
                {" "}
                <img src={element2png} alt="" class="ani-left-right" />
              </div>
              <div class="smlogo">
                {" "}
                <img src={biglogoservicepng} alt="" />
              </div>
              <div class="ltpluselement wow rotateIn">
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
              <div class="ltelementsmallx d-none d-sm-block">
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
              <div class="lttext">
                <h3 class="wow slideInLeft " data-wow-duration="1.2s">
                  LEISURE TRAVEL
                </h3>
                <p
                  class="normaltext  wow slideInRight"
                  data-wow-delay=".1s"
                  data-wow-duration=".80s"
                >
                  {" "}
                  Experience the world like never before. We're your gateway to
                  unforgettable journeys, offering an array of travel solutions
                  tailored to your desires. Whether you seek relaxation,
                  adventure, or cultural exploration, our team is dedicated to
                  curating your dream vacation.{" "}
                </p>
              </div>
            </div>
          </div>

          <div class="container-fluid leitr">
            <div class="slide-body ltmbg">
              <div class="row ">
                <div class="col-lg-12">
                  <div class="ltpulusbot d-none d-sm-block">
                    {" "}
                    <img src={roundtxtpng} class="wow rotateIn" alt="" />
                  </div>
                  <div class="col-md-12  leitravelmanagementpart ">
                    <div class="smallxltm d-none d-sm-block"> </div>
                    <h4
                      class="wow fadeInLeft"
                      data-wow-delay="0.2s"
                      data-wow-duration="1s"
                    >
                      Leisure Travel Management{" "}
                    </h4>
                    <h3
                      class="wow fadeInRight"
                      data-wow-delay="0.4s"
                      data-wow-duration="1s"
                    >
                      {" "}
                      Your Portal to the Destinations of Your Dreams
                    </h3>
                    <p
                      class="wow fadeInLeft"
                      data-wow-delay="0.6s"
                      data-wow-duration="1s"
                    >
                      BestHolidaysonline.com powered by cutting-edge technology,
                      offers an unparalleled booking experience for all your
                      travel needs, whether it's leisurely getaways or thrilling
                      adventures.
                    </p>
                    <div>
                      {" "}
                      <a
                        class="btn btn-primary  itmbtn wow fadeInLeft"
                        data-wow-delay="1s"
                        data-wow-duration="1.2s"
                        href="http://www.bestholidaysonline.com/"
                      >
                        VISIT OUR WESBITE TO EXPLORE LATEST DEALS
                        <i class="icon ion-ios-arrow-thin-right"></i>
                      </a>{" "}
                      <div class="ltmelementbtm ">
                        {" "}
                        <img src={element2png} alt="" class="ani-left-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" itmimagepart position-relative mt-4">
                <div class="lteimgbg wow fadeInRight ani-move2">
                  {" "}
                  <img src={lteimgbg} alt="" />{" "}
                </div>
                <div class="ltmimg">
                  {" "}
                  <img src={ltmimg} alt="" />{" "}
                </div>
                <div className="row">
                  <div className="col-12 col-lg-4 mobnone">
                    <img src={ltbiglogo} alt="" />
                  </div>
                  <div className="col-12 col-lg-4 text-center">
                    <img
                      src={smallxltm}
                      alt=""
                      class="wow pulse"
                      data-wow-delay="300ms"
                      data-wow-iteration="infinite"
                      data-wow-duration="2s"
                    />
                    <h5 class="wow fadeInUp ms-3">
                      {" "}
                      WALK IN TO OUR <br />
                      OFFICE NEAR YOU
                    </h5>
                  </div>
                  <div className="col-4 mobnone"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="row ">
            <div class="col-lg-12 manntextbg">
              <p>
                “Step into our opulent offices across Qatar and prepare to
                encounter a travel experience like no other. Our highly
                knowledgeable travel experts, boasting extensive expertise in
                the realm of travel, will present you with an exclusive
                selection of travel options from a myriad of global suppliers.
                Expect nothing less than top-tier service coupled with
                incomparable prices. Join us in the journey of discovery and
                become a true Mannaian Traveler.”
              </p>
            </div>
          </div>

          <div class="keyben ">
            <div class="section pp-scrollable slide wow pulse">
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
                  <h4 class="wow slideInLeft " data-wow-duration="1.2s">
                    BENEFITS OF BEING MANNAIAN{" "}
                  </h4>
                  <div class="row horizontal-service-list">
                    <div class="col-lg-3">
                      <div class="horizontal-service-item  wow fadeInUp">
                        <div class="horizontal-service-item-title">
                          {" "}
                          <span
                            class="txt-rotate"
                            data-period="2000"
                            data-rotate='[  "SPONTANEITY" ]'
                          >
                            SPONTANEITY
                          </span>
                        </div>
                        <div class="horizontal-service-item-descr ">
                          YOU’LL HAVE THE FLEXIBILITY TO MAKE LAST-MINUTE
                          DECISIONS ABOUT THEIR TRAVEL PLANS. THIS SPONTANEITY
                          CAN LEAD TO UNEXPECTED ADVENTURES AND UNIQUE
                          EXPERIENCES{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="horizontal-service-item  wow fadeInUp">
                        <div class="horizontal-service-item-title">
                          {" "}
                          <span
                            class="txt-rotate"
                            data-period="2000"
                            data-rotate='[  "AVAILABILITY" ]'
                          >
                            AVAILABILITY
                          </span>
                        </div>
                        <div class="horizontal-service-item-descr ">
                          BY BOOKING IN PERSON OR ON THE SPOT, WALK-IN TRAVELERS
                          CAN SECURE ACCOMMODATIONS OR ACTIVITIES EVEN IN
                          HIGH-DEMAND OR FULLY BOOKED LOCATIONS.{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="horizontal-service-item  wow fadeInUp">
                        <div class="horizontal-service-item-title">
                          {" "}
                          <span
                            class="txt-rotate"
                            data-period="2000"
                            data-rotate='[  "RECOMMEN<br />DATIONS" ]'
                          >
                            RECOMMEN
                            <br />
                            DATIONS
                          </span>
                        </div>
                        <div class="horizontal-service-item-descr ">
                          YOU’LL OFTEN HAVE THE OPPORTUNITY TO SPEAK DIRECTLY
                          WITH TRAVEL EXPERTS, GAINING VALUABLE INSIGHTS AND
                          RECOMMENDATIONS FOR PLACES TO VISIT,DINE, OR EXPLORE{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="horizontal-service-item  wow fadeInUp">
                        <div class="horizontal-service-item-title">
                          {" "}
                          <span
                            class="txt-rotate"
                            data-period="2000"
                            data-rotate='[  "REDUCED STREES" ]'
                          >
                            REDUCED STREES
                          </span>
                        </div>
                        <div class="horizontal-service-item-descr ">
                          FOR THOSE WHO ENJOY LIVING IN THE MOMENT, WALK-IN
                          TRAVEL CAN REDUCE THE STRESS ASSOCIATED WITH EXTENSIVE
                          PLANNING AND ITINERARY ADHERENCE.{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="horizontal-service-item  wow fadeInUp">
                        <div class="horizontal-service-item-title">
                          {" "}
                          <span
                            class="txt-rotate"
                            data-period="2000"
                            data-rotate='[  "FLEXIBILITY" ]'
                          >
                            FLEXIBILITY
                          </span>
                        </div>
                        <div class="horizontal-service-item-descr ">
                          ITINERARIES CAN BE ADJUSTED ON THE FLY, ALLOWING
                          WALK-IN TRAVELERS TO ADAPT TO CHANGING CIRCUMSTANCES
                          OR INTERESTS{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="horizontal-service-item  wow fadeInUp">
                        <div class="horizontal-service-item-title">
                          {" "}
                          <span
                            class="txt-rotate"
                            data-period="2000"
                            data-rotate='[  "COST SAVINGS" ]'
                          >
                            COST SAVINGS
                          </span>
                        </div>
                        <div class="horizontal-service-item-descr ">
                          IN MANY CASES, WALK-IN TRAVELERS MAY FIND DISCOUNTS OR
                          SPECIAL DEALS THAT ARE ONLY AVAILABLE TO THOSE BOOKING
                          ON THE GO.{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="horizontal-service-item  wow fadeInUp">
                        <div class="horizontal-service-item-title">
                          {" "}
                          <span
                            class="txt-rotate"
                            data-period="2000"
                            data-rotate='[  "FREEDOM" ]'
                          >
                            FREEDOM
                          </span>
                        </div>
                        <div class="horizontal-service-item-descr ">
                          IN MANY CASES, WALK-IN TRAVELERS MAY FIND DISCOUNTS OR
                          SPECIAL DEALS THAT ARE ONLY AVAILABLE TO THOSE BOOKING
                          ON THE GO.{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="horizontal-service-item  wow fadeInUp">
                        <div class="horizontal-service-item-title">
                          {" "}
                          <span
                            class="txt-rotate"
                            data-period="2000"
                            data-rotate='[  "CANCELLATIONS FEE" ]'
                          >
                            CANCELLATION
                            <br />
                            FEE
                          </span>
                        </div>
                        <div class="horizontal-service-item-descr ">
                          AVOID CANCELLATION FEES ASSOCIATED WITH PRE-BOOKED
                          ARRANGEMENTS IF THEY NEED TO CHANGE THEIR PLANS{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid btm position-relative">
            <div class="slide-body counterwhitebg">
              <div class="row ">
                <div class="col-lg-12 countpart">
                  <div class="countpulusbot wow rotateIn position-absolute">
                    {" "}
                    <img src={wwapluselement} alt="" />
                  </div>
                  <div class="graypluselement wow rotateIn d-none d-sm-block">
                    {" "}
                    <img src={wwapluselement} alt="" />
                  </div>
                  <div class="countuparrowelement">
                    {" "}
                    <img src={grayuparr} alt="" class="ani-top-bottom" />
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
                  <div className="d-flex mt-5  ms-5">
                    {" "}
                    <h5
                      class="wow fadeInLeft pt-3"
                      data-wow-delay="0.4s"
                      data-wow-duration="1s"
                    >
                      We've excelled thus far and are now <br />
                      pushing the boundaries even further{" "}
                    </h5>
                    <div class="likeimg wow flash pt-3">
                      {" "}
                      <img src={likeblueimg} alt="" class="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="facts row mb-5">
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

          <div class="container-fluid ltexpandbg">
            <div class="row">
              <div class="ltpluselementbot wow rotateIn">
                {" "}
                <img src={pluselement} alt="" />
              </div>
              <h4
                class="wow fadeInLeft"
                data-wow-delay="0.2s"
                data-wow-duration="1s"
              >
                {" "}
                EMPOWER YOUR ADVENTURES WITH <br />
                PERSONALIZED TRAVEL ASSISTANCE{" "}
              </h4>
              <div class="col-lg-6 position-relative ltexpandimgbg">
                <div class="msgbox1 wow fadeInUp " data-wow-delay="0.2s">
                  <div class="ani-top-bottom">
                    <img src={msgbox1} alt="" />
                    <div class="benefit-list-item">
                      <div class="benefit-list-photo">
                        <img className="msgimg1" src={msgimg1} alt="" />
                      </div>
                      <div class="benefit-list-item-title">
                        Easy booking With Us.
                      </div>
                      {/* <div class="benefit-list-item-descr">
                        Easy navigations to complete <br />
                        booking in 3 steps.
                      </div> */}
                    </div>
                  </div>
                </div>
                <div class="msgbox2 wow fadeInUp" data-wow-delay="0.4s">
                  <div class="ani-top-bottom">
                    <img src={msgbox4} alt="" />
                    <div class="benefit-list-item-long">
                      <div class="benefit-list-photo">
                        <img className="msgimg4" src={msgimg3} alt="" />
                      </div>
                      <div class="benefit-list-item-title">
                        Centralised Profile Management
                      </div>
                      {/* <div class="benefit-list-item-descr">
                        Centralised Profile Management with Mannai travels.
                      </div> */}
                    </div>
                  </div>
                </div>
                <div class="msgbox3 wow fadeInUp" data-wow-delay="0.6s">
                  <div class="ani-top-bottom">
                    <img src={msgbox5} alt="" />
                    <div class="benefit-list-item">
                      <div class="benefit-list-photo">
                        <img className="msgimg5" src={msgimg2} alt="" />
                      </div>
                      <div class="benefit-list-item-title">
                        Offers & Promotions{" "}
                      </div>
                      {/* <div class="benefit-list-item-descr">
                        Best Offers & Promotions from Mannai Travels.
                      </div> */}
                    </div>
                  </div>
                </div>
                <div class="msgbox4 wow fadeInUp" data-wow-delay="0.8s">
                  <div class="ani-top-bottom">
                    {" "}
                    <img src={msgbox2} alt="" />
                    <div class="benefit-list-item">
                      <div class="benefit-list-photo">
                        <img className="msgimg2" src={msgimg4} alt="" />
                      </div>
                      <div class="benefit-list-item-title">
                        Round the clock Support{" "}
                      </div>
                      {/* <div class="benefit-list-item-descr">
                        With Mannai Travels you will get Round the clock
                        Support.
                      </div> */}
                    </div>
                  </div>
                </div>
                <div class="msgbox5 wow fadeInUp " data-wow-delay="1s">
                  <div class="ani-top-bottom">
                    {" "}
                    <img src={msgbox2} alt="" />
                    <div class="benefit-list-item">
                      <div class="benefit-list-photo">
                        <img className="msgimg2" src={msgimg5} alt="" />
                      </div>
                      <div class="benefit-list-item-title">
                        Secured & Reliable
                      </div>
                      {/* <div class="benefit-list-item-descr">
                        24/7 online support from Mannai Travels.
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 ">
                <div
                  class="accordion solution-collapse accordionpart"
                  id="accordionExample"
                >
                  <div class="solution-collapse-item accordion-item">
                    <div
                      class="solution-collapse-item-title font-libre accordion-header"
                      id="headingOne"
                    >
                      {" "}
                      <a
                        className={`${!acc1 ? "collapsed" : ""}`}
                        type="button"
                        // href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#solution1"
                        aria-expanded="true"
                        aria-controls="solution1"
                        onClick={() => {
                          setAcc1(!acc1);
                          // setAcc2(false);
                          // setAcc3(false);
                          // setAcc4(false);
                          // setAcc5(false);
                        }}
                      >
                        {" "}
                        Centralized Profile Management <i class="icon-plus"></i>{" "}
                      </a>{" "}
                    </div>
                    <div
                      id="solution1"
                      class="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#solutions"
                    >
                      <div class="card-body">
                        {" "}
                        With Mannai's cross-platform apps, your profile is
                        securely and centrally managed. Wheather you access our
                        apps or visit any of our offices, all your travel
                        information is just one touch away. Thats how we enhance
                        your travel experience, providing seamless service.{" "}
                      </div>
                    </div>
                  </div>
                  <div class="solution-collapse-item accordion-item">
                    <div
                      class="solution-collapse-item-title font-libre accordion-header"
                      id="headingTwo"
                    >
                      {" "}
                      <a
                        className={`${!acc2 ? "collapsed" : ""}`}
                        // href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#solution2"
                        aria-expanded="false"
                        aria-controls="solution2"
                        onClick={() => {
                          setAcc2(!acc2);
                          // setAcc1(false);
                          // setAcc3(false);
                          // setAcc4(false);
                          // setAcc5(false);
                        }}
                      >
                        {" "}
                        Get the Best Travel Options <i class="icon-plus"></i>{" "}
                      </a>{" "}
                    </div>
                    <div
                      id="solution2"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#solutions"
                    >
                      <div class="card-body">
                        {" "}
                        When you choose Mannai Travel, you unlock exclusive
                        benefits, especially in the realm of exclusive offers
                        and promotions. Enjoy privileged access to limited-time
                        deals, discounts, and special packages tailored to
                        enhance your travel experience. With Mannai, you'll
                        savor unparalleled savings and opportunities that make
                        your journeys truly extraordinary.
                      </div>
                    </div>
                  </div>
                  <div class="solution-collapse-item accordion-item">
                    <div
                      class="solution-collapse-item-title font-libre accordion-header"
                      id="headingThree"
                    >
                      {" "}
                      <a
                        className={`${!acc3 ? "collapsed" : ""}`}
                        // href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#solution3"
                        aria-expanded="false"
                        aria-controls="solution3"
                        onClick={() => {
                          setAcc3(!acc3);
                          // setAcc2(false);
                          // setAcc1(false);
                          // setAcc4(false);
                          // setAcc5(false);
                        }}
                      >
                        {" "}
                        Exclusive offers and promotions{" "}
                        <i class="icon-plus"></i>{" "}
                      </a>{" "}
                    </div>
                    <div
                      id="solution3"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#solutions"
                    >
                      <div class="card-body">
                        {" "}
                        Experience the ultimate value for money in travel with
                        the Mannai app. Uncover cost-effective travel options
                        curated for your satisfaction. Our selection ensures you
                        enjoy top-notch travel without breaking the bank. Choose
                        Mannai for a better, budget-friendly travel experience.
                      </div>
                    </div>
                  </div>
                  <div class="solution-collapse-item accordion-item">
                    <div
                      class="solution-collapse-item-title font-libre accordion-header"
                      id="headingFour"
                    >
                      {" "}
                      <a
                        className={`${!acc4 ? "collapsed" : ""}`}
                        // href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#solution4"
                        aria-expanded="false"
                        aria-controls="solution4"
                        onClick={() => {
                          setAcc4(!acc4);
                          // setAcc2(false);
                          // setAcc3(false);
                          // setAcc1(false);
                          // setAcc5(false);
                        }}
                      >
                        {" "}
                        Paragon of Security <i class="icon-plus"></i>{" "}
                      </a>{" "}
                    </div>
                    <div
                      id="solution4"
                      class="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#solutions"
                    >
                      <div class="card-body">
                        {" "}
                        Rest assured, our apps are a paragon of security and
                        reliability. We employ state-of-the-art encryption to
                        safeguard your data, ensuring your privacy is paramount.
                        With a robust infrastructure, our apps offer seamless
                        performance, delivering a consistently dependable user
                        experience. Trust in our commitment to providing you
                        with secure and reliable technology that you can rely
                        on, every time you use our apps.
                      </div>
                    </div>
                  </div>
                  <div class="solution-collapse-item accordion-item">
                    <div
                      class="solution-collapse-item-title font-libre accordion-header"
                      id="headingFive"
                    >
                      {" "}
                      <a
                        className={`${!acc5 ? "collapsed" : ""}`}
                        // href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#solution5"
                        aria-expanded="false"
                        aria-controls="solution5"
                        onClick={() => {
                          setAcc5(!acc5);
                          // setAcc2(false);
                          // setAcc3(false);
                          // setAcc4(false);
                          // setAcc1(false);
                        }}
                      >
                        {" "}
                        24/7 online support <i class="icon-plus"></i>{" "}
                      </a>{" "}
                    </div>
                    <div
                      id="solution5"
                      class="collapse"
                      aria-labelledby="headingFive"
                      data-parent="#solutions"
                    >
                      <div class="card-body">
                        {" "}
                        With our 24/7 support, you gain peace of mind for both
                        travel-related and journey-related queries. Our
                        dedicated team is here to assist you around the clock,
                        ensuring seamless travel experiences. Whether you need
                        assistance with bookings, itinerary changes, or any
                        inquiries during your journey, we're just a call away.
                        Count on us for prompt, reliable support that makes
                        every aspect of your travel worry-free.
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bottext">
                  <h4
                    class="wow fadeInLeft"
                    data-wow-delay="0.2s"
                    data-wow-duration="1s"
                  >
                    {" "}
                    BENEFITS ABOVE YOUR IMAGINATION
                  </h4>
                </div>
              </div>

              <div class="col-lg-1 "></div>
            </div>
          </div>

          <div class="slide-container slide wow pulse locations qatarmapbg">
            <div class="container ">
              <div class="mapimg">
                <img src={qatarmap} alt="" />
              </div>
              <div class="mapheading">
                <h4
                  class="wow slideInLeft text-center"
                  data-wow-duration="1.2s"
                >
                  WE ARE AVAILABLE ACROSS
                  <br />
                  QATAR <br />
                  TO SERVE YOU BETTER{" "}
                </h4>
              </div>

              <div
                class=" location1 wow fadeInLeft"
                data-wow-delay="0.2s"
                data-wow-duration="1s"
              >
                <div class="reddots1">
                  <i class="icon ion-ios-location"></i>
                </div>
                <hr class="line1" />
                <div class="add1">
                  {" "}
                  <b>MATAR QADEEM OFFICE</b>
                  <br />
                  Building No. 282, Street 310 <br />
                  Zone 45{" "}
                </div>
              </div>

              <div
                class=" location2 wow fadeInLeft"
                data-wow-delay="0.4s"
                data-wow-duration="1s"
              >
                <div class="reddots2">
                  <i class="icon ion-ios-location"></i>
                </div>
                <hr class="line2" />
                <div class="add2">
                  {" "}
                  <b>SHERATON CORNICHE OFFICE</b>
                  <br />
                  P.O. Box 76 Doha, Qatar <br />
                  Building 2, Street 390, Zone 61{" "}
                </div>
              </div>

              <div
                class=" location3 wow fadeInLeft"
                data-wow-delay="0.6s"
                data-wow-duration="1s"
              >
                <div class="reddots3">
                  <i class="icon ion-ios-location"></i>
                </div>
                <hr class="line3" />
                <div class="add3">
                  {" "}
                  <b>C-RING ROAD OFFICE,</b>
                  <br />
                  P.O. Box 76 Doha, Qatar <br />
                  Building 117, Street 250, Zone 45{" "}
                </div>
              </div>

              <div
                class=" location4 wow fadeInLeft"
                data-wow-delay="0.8s"
                data-wow-duration="1s"
              >
                <div class="reddots4">
                  <i class="icon ion-ios-location"></i>
                </div>
                <hr class="line4" />
                <div class="add4">
                  {" "}
                  <b>C-RING ROAD OFFICE,</b>
                  <br />
                  P.O. Box 76 Doha, Qatar <br />
                  Building 209, Street 230, Zone 42{" "}
                </div>
              </div>

              <div
                class=" location5 wow fadeInRight"
                data-wow-delay="0.2s"
                data-wow-duration="1s"
              >
                <div class="reddots5">
                  <i class="icon ion-ios-location"></i>
                </div>
                <hr class="line5" />
                <div class="add5">
                  {" "}
                  <b>AL KHOR OFFICE</b>
                  <br />
                  P.O. Box 76 Doha, Qatar <br />
                  Building 11, Street 211, Zone 74{" "}
                </div>
              </div>

              <div
                class=" location6 wow fadeInRight"
                data-wow-delay="0.41s"
                data-wow-duration="1s"
              >
                <div class="reddots6">
                  <i class="icon ion-ios-location"></i>
                </div>
                <hr class="line6" />
                <div class="add6">
                  {" "}
                  <b>MANSOURA OFFICE</b>
                  <br />
                  P.O. Box 76 Doha, Qatar <br />
                  Building 94, Street 850, Zone 25{" "}
                </div>
              </div>

              <div
                class=" location7 wow fadeInRight"
                data-wow-delay="0.41s"
                data-wow-duration="1s"
              >
                <div class="reddots7">
                  <i class="icon ion-ios-location"></i>
                </div>
                <hr class="line7" />
                <div class="add7">
                  {" "}
                  <b>MESAIEED OFFICE</b>
                  <br />
                  P.O. Box 76 Doha, Qatar <br />
                  Shop E5 And E6, Dunes Mall Shopping Complex Unit 6, Buliding
                  32, Street 552, Zone 92{" "}
                </div>
              </div>

              <div
                class=" location8 wow fadeInRight"
                data-wow-delay="0.41s"
                data-wow-duration="1s"
              >
                <div class="reddots8">
                  <i class="icon ion-ios-location"></i>
                </div>
                <hr class="line8" />
                <div class="add8">
                  {" "}
                  <b>MANNAI CORPORATION QPSC</b>
                  <br />
                  Building No. 72, Zone No. 57 <br />
                  PO Box 76, Doha, Qatar{" "}
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

export default Leisuretravel;
