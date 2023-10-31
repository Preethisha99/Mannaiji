import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
import WOW from "wow.js";
import { ReactTitle } from "react-meta-tags";

import Headertwo from "../Components/Headertwo";
import Header from "../Components/Header";

import logopng from "./img/logo.png";
import biglogopng from "./img/biglogobg.png";
import roundtxtpng from "./img/roundtxt.png";
import botlinepng from "./img/botline.png";
import element1png from "./img/element1.png";
import element2png from "./img/element2.png";
import elementsmallxpng from "./img/elementsmallx.png";
import pluselement from "./img/pluselement.png";
import semicircleelement from "./img/semicircleelement.png";
import uparrowelement from "./img/uparrowelement.png";
import serviceimg10 from "./img/serviceimg10.jpg";
import footerimg from "./img/footerimg.png";
import techbannerimg from "./img/techbannerimg.jpg";
import biglogoservice from "./img/biglogoservice.png";
import whitelogotech from "./img/whitelogotech.jpg";
import appimg from "./img/appimg.png";
import talkimg from "./img/talkimg.png";
import techgraylogo from "./img/techgraylogo.png";
import toparrowtech from "./img/toparrowtech.png";
import dashboard1 from "./img/dashboard1.png";
import dashboard2 from "./img/dashboard2.png";
import demobg from "./img/demobg.jpg";

import "wow.js";

import "pagepiling.js/jquery.pagepiling.css";

import "animsition";
import "animsition/dist/css/animsition.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "socicon/css/socicon.css";

import "./css/animate.min.css";
// import "./css/ionicons.min.css";
import "./css/style.css";
import "./css/technology.css";
import "./js/script";
import Footer from "../Components/Footer";
import Requestform from "../Components/Requestform";

const Technologies = () => {
  const location = useLocation();
  useEffect(() => {
    document.body.style.removeProperty("overflow");
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "hidden";

    $(function () {
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

    const htmlTag = document.querySelector("html");
    if (htmlTag.classList.contains("body-menu-opened")) {
      htmlTag.classList.remove("body-menu-opened");
      htmlTag.classList.add("body-menu-close");
    }

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
    <div className="theme-orange  technologyjs">
      <div className="animsition overflow-hidden">
        <div className="wrapper">
          <ReactTitle title="Technologies | Mannai Travels" />
          <Header />

          <div className="slide-container">
            <div className="slide-bg">
              <div
                className="inside"
                style={{ backgroundImage: `url(${techbannerimg})` }}
              ></div>
            </div>
            <div className="container">
              <div className="techpulusbot">
                {" "}
                <img src={roundtxtpng} alt="" />
              </div>
              <div className="serviceelementtech ">
                {" "}
                <img src={element2png} alt="" className="ani-left-right" />
              </div>
              <div className="smlogo">
                {" "}
                <img src={biglogoservice} alt="" />
              </div>
              <div className="techpluselement">
                {" "}
                <img src={pluselement} alt="" />
              </div>
              <div className="uparrowelement">
                {" "}
                <img src={uparrowelement} alt="" className="ani-top-bottom" />
              </div>
              <div className="techbotline">
                {" "}
                <img src={botlinepng} alt="" />
              </div>
              <div className="techserviceelement1bot">
                {" "}
                <img src={element1png} alt="" />
              </div>
              <div className="techelementsmallx">
                {" "}
                <img
                  src={elementsmallxpng}
                  alt=""
                  className="wow pulse"
                  data-wow-delay="300ms"
                  data-wow-iteration="infinite"
                  data-wow-duration="2s"
                />
              </div>

              <div className="techbannertext">
                <h3 className="wow slideInLeft " data-wow-duration="1.2s">
                  TECHNOLOGY
                </h3>
                <p
                  className="normaltext  wow slideInRight"
                  data-wow-delay=".1s"
                  data-wow-duration=".80s"
                >
                  {" "}
                  Transition from traditional booking platforms to a
                  comprehensive and robust travel management <br />
                  system. Our system not only provides insights into your travel
                  expenses but also offers guidance <br />
                  on intelligent cost-saving strategies for your travel
                  expenditures.
                </p>
              </div>
            </div>
          </div>

          <div className="section p0">
            <div className="container-fluid">
              <div className="techlogobg">
                <div className="slide-body">
                  <div className="row ">
                    <div className="col-lg-4 d-flex flex-direction-column justify-content-center mt-5 text-center">
                      <div className=" wow rotateIn">
                        <img src={whitelogotech} alt="" />
                        <h2 className="text-white mt-2 technologyexp">
                          {" "}
                          TRAVEL TECHNOLOGY EXPERTS{" "}
                        </h2>
                      </div>
                    </div>

                    <div className="col-lg-8 d-flex justify-content-center align-items-center">
                      <div
                        className=" wow fadeInRight"
                        data-wow-delay="1s"
                        data-wow-duration="1.5s"
                      >
                        <h2 className="text-center text-white">
                          An all-encompassing Travel Suite
                          <br /> equipped revolutionary Dashboards <br /> to
                          expedite decision-making !
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-item p0">
            <div className="container-fluid">
              <div className="slide-body techappbg">
                <div className="row py-3 ">
                  <div className="col-md-7">
                    <div
                      className="col-md-12  apptext  wow fadeInRight"
                      data-wow-delay="0.2s"
                      data-wow-duration="1s"
                    >
                      &quot;Simplified Travel, Whether on Leisure or on
                      Business&quot; <br />
                      <h4>EXPLORE OUR MYTRAVELCOMPASS APP</h4>
                      <br />
                      Our unified travel platform, <span>MYTRAVELCOMPASS</span>
                      <br />
                      simplifies the lives of your employees. Whether
                      <br />
                      they're making travel bookings online, via
                      <br />
                      Mobile, or with our dedicated travel counselors,
                      <br />
                      all their travel details are accessible through
                      <br />
                      every channel.
                    </div>
                    <a
                      className="btn btn-primary mt-4 wow fadeInLeft"
                      data-wow-delay="0.50s"
                      data-wow-duration="1.2s"
                      href="#"
                    >
                      EXPLORE OUR APPS{" "}
                      <i className="icon ion-ios-arrow-thin-right"></i>
                    </a>
                    {/* <div className="techroundtxttechnology">
                      {" "}
                      <img src={roundtxtpng} className="wow zoomIn" alt="" />
                    </div>
                    <div className="semicircleelementtech">
                      {" "}
                      <img
                        src={semicircleelement}
                        alt=""
                        className="wow rotateIn"
                      />
                    </div> */}
                  </div>

                  <div className="col-md-5 p0">
                    <div className="appimg">
                      <img src={appimg} className="wow fadeInRight" alt="" />
                    </div>
                  </div>

                  <div className=" appsup ">
                    <h3 className="wow bounceIn">Have a Question ?</h3>
                    <p className="appsuptxt wow fadeInDown">
                      {" "}
                      Write email to us our team will swiftly get back to you.
                    </p>
                    <p className="wow fadeInUp">
                      <a href="#">Support@Mannaitravels.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-item p0 talkteam">
            <div className="slide-body ">
              <div className="row ">
                <div className="col-lg-4 z-index-3">
                  <div className="talkimg ">
                    <img src={talkimg} className="wow fadeInLeft" alt="" />
                  </div>
                </div>

                <div className="col-lg-8 ">
                  <div
                    className="mx-auto talkteamtext  wow fadeInRight"
                    data-wow-delay="0.2s"
                    data-wow-duration="1s"
                  >
                    <span>
                      {" "}
                      &quot;Efficient Communication Tools for Minimizing
                      Turnaround Time&quot;{" "}
                    </span>
                    <h4>TALK TO OUR PROFESSIONAL TEAM</h4>
                    <br />
                    Link with our Smart Counselors from anywhere <br />
                    across the world for immediate assistance and
                    <br />
                    answers to your queries
                    <br />
                  </div>
                  <a
                    className="btn btn-primary wow fadeInLeft mt-4"
                    data-wow-delay="0.50s"
                    data-wow-duration="1.2s"
                    href="#"
                  >
                    LEARN MORE <i className="icon ion-ios-arrow-thin-right"></i>
                  </a>
                </div>

                <div className="dashboardpart col-lg-12 row">
                  <div className="col-lg-8 ">
                    <div className="techgraylogo">
                      {" "}
                      <img src={techgraylogo} className="wow zoomIn" alt="" />
                    </div>
                    <div className="toparrowtech wow slideInRight">
                      {" "}
                      <img
                        src={toparrowtech}
                        data-wow-delay="10s"
                        data-wow-duration="5s"
                        alt=""
                        className="ani-top-bottom"
                      />
                    </div>

                    <div
                      className=" dashboardparttext z-index-3 position-relative  wow fadeInRight"
                      data-wow-delay="0.2s"
                      data-wow-duration="1s"
                    >
                      <span>
                        &quot;Technology monitors what matters most&quot;
                      </span>
                      <h4>
                        COMPREHENSIVE REAL-TIME DATA <br />
                        FOR A FULL SPECTRUM OF INSIGHTS
                      </h4>
                      <br />
                      Frustrated by extended data delays? These delays can
                      hinder timely decision-making that has a direct impact on
                      your company's financial performance. Our business
                      intelligence and reporting tool provide real-time data,
                      delivering precisely the information you require, exactly
                      when you need it. Our user-friendly interface ensures
                      swift access to the data necessary for effectively
                      managing your corporate travelprogram.
                    </div>
                    <a
                      className="btn btn-primary mt-4 ms-5  wow fadeInLeft"
                      data-wow-delay="0.50s"
                      data-wow-duration="1.2s"
                      href="#"
                    >
                      EXPLORE OUR APPS{" "}
                      <i className="icon ion-ios-arrow-thin-right"></i>
                    </a>
                  </div>

                  <div className="col-lg-4 position-relative  p0">
                    <div className="dashboard1">
                      <img
                        src={dashboard1}
                        className="wow fadeInRight"
                        data-wow-delay="0.5s"
                        data-wow-duration="1s"
                        alt=""
                      />
                    </div>
                    <div className="dashboard2">
                      <img
                        src={dashboard2}
                        className="wow fadeInRight"
                        data-wow-delay="1.2s"
                        data-wow-duration="1.2s"
                        alt=""
                      />
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

export default Technologies;
