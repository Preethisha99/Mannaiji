import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
import { ReactTitle } from "react-meta-tags";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import WOW from "wow.js";

import biglogoservicepng from "./img/biglogoservice.png";
import roundtxtpng from "./img/roundtxt.png";
import element1png from "./img/element1.png";
import element2png from "./img/element2.png";
import elementsmallxpng from "./img/elementsmallx.png";
import pluselement from "./img/pluselement.png";
import blogsbg from "./img/blogsbg.jpg";
import playicon from "./img/playicon.png";

import uparrowelement from "./img/uparrowelement.png";
import ltbiglogo from "./img/ltbiglogo.png";
import smallxltm from "./img/smallxltm.png";
import blogimg2 from "./img/blogimg2.jpg";
import blogimg1 from "./img/blogimg1.jpg";
import newsimg1 from "./img/newsimg1.jpg";

import "animsition";
import "animsition/dist/css/animsition.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "socicon/css/socicon.css";

import "./css/animate.min.css";
import "./css/ionicons.min.css";
import "./css/style.css";
import "./css/blogsandnews.css";
import "./js/script";
import Partners from "../Components/Partners";

const Blogandnews = () => {
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
    <div class="main-body theme-orange dark-horizontal blogandnews overflow-hidden">
      <div class="animsition">
        <div class="wrapper">
          <ReactTitle title="Blogs & News | Mannai Travels" />
          <Header />

          <div class="slide-container">
            <div class="slide-bg wow pulse">
              <div
                class="inside "
                style={{ backgroundImage: `url(${blogsbg})` }}
              ></div>
            </div>
            <div class="container">
              <div class="techpulusbot wow rotateIn ">
                {" "}
                <img src={roundtxtpng} alt="" />
              </div>
              <div class="bnarelement ">
                {" "}
                <img src={element2png} alt="" class="ani-left-right" />
              </div>
              <div class="smlogo">
                {" "}
                <img src={biglogoservicepng} alt="" />
              </div>
              <div class="techserviceelement1bot">
                <img
                  src={element1png}
                  alt=""
                  class="wow pulse"
                  data-wow-delay="300ms"
                  data-wow-iteration="infinite"
                  data-wow-duration="2s"
                />
              </div>
              <div
                class="bnbpluselement  wow rotateIn"
                style={{ visibility: "visible", animationName: "rotateIn" }}
              >
                {" "}
                <img src={pluselement} alt="" />
              </div>
              <div class="uparrowelement">
                {" "}
                <img src={uparrowelement} alt="" class="ani-top-bottom" />
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
              <div class="bntext">
                <h3 class="wow slideInLeft " data-wow-duration="1.2s">
                  "Your Travel Resource Hub"
                </h3>
                <p
                  class="normaltext  wow slideInRight"
                  data-wow-delay=".1s"
                  data-wow-duration=".80s"
                >
                  {" "}
                  Unlock hidden gems with our curated travel guides for
                  destinations across the globe{" "}
                </p>
              </div>
            </div>
          </div>

          <div class="section section-item p0 ">
            <div class="container-fluid ">
              <div class="slide-body bnbg">
                <div class="row ">
                  <div class="col-lg-12">
                    <div class="col-md-12  bncontentpart ">
                      <div class="bnbiglogo ">
                        {" "}
                        <img src={ltbiglogo} alt="" />
                      </div>
                      <div class="smallxbn ">
                        {" "}
                        <img
                          src={smallxltm}
                          alt=""
                          class="wow pulse"
                          data-wow-delay="300ms"
                          data-wow-iteration="infinite"
                          data-wow-duration="2s"
                        />
                        <div class="d-flex wow fadeInLeft justify-content-center blogwithplayicon">
                          {" "}
                          <img src={playicon} alt="" />
                          <h3
                            class="wow fadeInRight"
                            data-wow-delay="0.2s"
                            data-wow-duration="1s"
                          >
                            BLOG{" "}
                          </h3>
                        </div>
                        <div className="position-relative blogposition">
                          <div class="bnpluselement wow rotateIn">
                            {" "}
                            <img src={pluselement} alt="" />
                          </div>
                          <h5
                            class="wow fadeInUp"
                            data-wow-delay="0.4s"
                            data-wow-duration="1s"
                          >
                            BLOG - 23
                          </h5>
                          <h6
                            class="wow fadeInUp"
                            data-wow-delay="0.6s"
                            data-wow-duration="1s"
                          >
                            LEISURE TRAVEL
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="blogbigimg">
                  <div className="mt-25">
                    <h4 class="wow slideInLeft " data-wow-duration="1.2s">
                      {" "}
                      GATEWAY TO HEAVEN VISIT THAILAND
                    </h4>
                    <p
                      class="wow fadeInUp"
                      data-wow-delay="0.6s"
                      data-wow-duration="1.4s"
                    >
                      {" "}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      Lorem ipsum dolor sit amet, consectetuer adipiscing
                      elitLorem ipsum dolor sit amet, consectetuer adipiscing
                      elitLorem ipsum dolor sit amet, consectetuer adipiscing
                      elitLorem ipsum dolor sit amet, consectetuer adipiscing
                      elitLorem ipsum dolor sit amet, consectetuer adipiscing
                      <br />
                      <br />
                      <span className="mobnone">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elitLorem ipsum dolor sit amet, consectetuer adipiscing
                        elitLorem ipsum dolor sit amet, consectetuer adipiscing
                        elitLorem ipsum dolor sit amet, consectetuer adipiscing
                        elitLorem ipsum dolor sit amet, consectetuer adipiscing
                        elitLorem ipsum dolor sit amet.{" "}
                      </span>
                    </p>
                    <div
                      class="rbbtn wow fadeInUp d-flex ms-5"
                      data-wow-delay="0.4s"
                    >
                      {" "}
                      <Link to="/Blogsandnews/visitThailand">
                        <a class="btn btn-primary mr-4 fr " href="#">
                          READ BLOG{" "}
                          <i class="icon ion-ios-arrow-thin-right"></i>
                        </a>{" "}
                      </Link>
                    </div>
                    <div class="bgbnarelement ">
                      {" "}
                      <img src={element2png} alt="" class="ani-left-right" />
                    </div>
                  </div>
                </div>
                <div class="section-item text-left mobmt150">
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
                            class="wow fadeInUp"
                            data-wow-delay="0.4s"
                            data-wow-duration="1s"
                          >
                            BLOG - 24
                          </h5>
                          <h6
                            class="wow fadeInUp"
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
                            <img
                              src={element2png}
                              alt=""
                              class="ani-left-right"
                            />
                          </div>
                          <div
                            class="blogimgrbbtn wow fadeInUp"
                            data-wow-delay="0.4s"
                          >
                            {" "}
                            <a
                              class="btn btn-primary mr-4 fr beboguie "
                              href="#"
                            >
                              READ BLOG{" "}
                              <i class="icon ion-ios-arrow-thin-right"></i>
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
                            class="wow fadeInUp"
                            data-wow-delay="0.4s"
                            data-wow-duration="1s"
                          >
                            BLOG - 24
                          </h5>
                          <h6
                            class="wow fadeInUp"
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
                            <img
                              src={element2png}
                              alt=""
                              class="ani-left-right"
                            />
                          </div>
                          <div
                            class="blogimgrbbtn wow fadeInUp"
                            data-wow-delay="0.4s"
                          >
                            {" "}
                            <a class="btn btn-primary mr-4 fr " href="#">
                              READ BLOG{" "}
                              <i class="icon ion-ios-arrow-thin-right"></i>
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
                            class="wow fadeInUp"
                            data-wow-delay="0.4s"
                            data-wow-duration="1s"
                          >
                            BLOG - 24
                          </h5>
                          <h6
                            class="wow fadeInUp"
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
                            <img
                              src={element2png}
                              alt=""
                              class="ani-left-right"
                            />
                          </div>
                          <div
                            class="blogimgrbbtn wow fadeInUp"
                            data-wow-delay="0.4s"
                          >
                            {" "}
                            <a class="btn btn-primary mr-4 fr " href="#">
                              READ BLOG{" "}
                              <i class="icon ion-ios-arrow-thin-right"></i>
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
                            class="wow fadeInUp"
                            data-wow-delay="0.4s"
                            data-wow-duration="1s"
                          >
                            BLOG - 24
                          </h5>
                          <h6
                            class="wow fadeInUp"
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
                            <img
                              src={element2png}
                              alt=""
                              class="ani-left-right"
                            />
                          </div>
                          <div
                            class="blogimgrbbtn wow fadeInUp"
                            data-wow-delay="0.4s"
                          >
                            {" "}
                            <a class="btn btn-primary mr-4 fr " href="#">
                              READ BLOG{" "}
                              <i class="icon ion-ios-arrow-thin-right"></i>
                            </a>{" "}
                          </div>
                          <div class="bolgimgtitle ">
                            YOUR WAY OUT TO GERMANY - WHAT YOU NEED TO EXPLORE
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text-center">
                      <a class="btn btn-primary mr-4  " href="#">
                        EXPLORE MORE{" "}
                        <i class="icon ion-ios-arrow-thin-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="newspart">
            <div class="section section-item p0 ">
              <div class="container-fluid ">
                <div class="slide-body newsbg">
                  <div class="row  ">
                    <div class="col-lg-12">
                      <div class="col-md-12  newscontentpart ">
                        <h3
                          class="wow fadeInRight"
                          data-wow-delay="0.2s"
                          data-wow-duration="1s"
                        >
                          NEWS{" "}
                        </h3>
                        <div class="newsbiglogo ">
                          {" "}
                          <img src={ltbiglogo} alt="" />
                        </div>
                        <div class="smallxnews  d-sm-block">
                          {" "}
                          <img
                            src={smallxltm}
                            alt=""
                            class="wow pulse"
                            data-wow-delay="300ms"
                            data-wow-iteration="infinite"
                            data-wow-duration="2s"
                          />
                        </div>
                        <div class="playiconnews wow fadeInLeft">
                          {" "}
                          <img src={playicon} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="newssectionpart">
                    <div class="row ">
                      <div class="col-12 col-lg-6 newsdotsbgleft">
                        <div class="news-item ">
                          <div
                            class="news-item-photo zoomingnews wow fadeInDown"
                            data-wow-delay=".2s"
                            data-wow-offset="150"
                          >
                            {" "}
                            <img src={newsimg1} alt="" class="img-fluid" />
                            <div class="blogimgtpluselement wow rotateIn">
                              {" "}
                              <img src={pluselement} alt="" />
                            </div>
                            <div
                              class="newsimgrbbtn wow fadeInUp"
                              data-wow-delay="0.4s"
                            >
                              {" "}
                              <a class="btn btn-primary mr-4 fr " href="#">
                                READ NEWS{" "}
                                <i class="icon ion-ios-arrow-thin-right"></i>
                              </a>{" "}
                            </div>
                          </div>
                          <div class="blogimgtpluselement wow rotateIn">
                            {" "}
                            <img src={pluselement} alt="" />
                          </div>
                          <div class="newsimgarelement ">
                            {" "}
                            <img
                              src={element2png}
                              alt=""
                              class="ani-left-right"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-lg-6 mob-pad-20 tab-pad-20">
                        <div class="news-item nw1 ">
                          <div class="newsspartpluselement wow rotateIn">
                            {" "}
                            <img src={pluselement} alt="" />
                          </div>
                          <h5
                            class="wow fadeInUp"
                            data-wow-delay="0.4s"
                            data-wow-duration="1s"
                          >
                            NEWS - 23
                          </h5>
                          <h6
                            class="wow fadeInUp"
                            data-wow-delay="0.6s"
                            data-wow-duration="1s"
                          >
                            MANNAI HOSTED QATAR <br />
                            NATIONAL DAY EVENT
                          </h6>
                          <div class="newstext">
                            <p>
                              Mannai – Microsoft Solutions, an ICT division of
                              Mannai Trading Company WLL and a leading Microsoft
                              Solutions provider in Qatar, is thrilled to
                              announce its strategic partnership with Wizard
                              Cyber, a global Cybersecurity firm. This
                              collaboration marks a significant milestone in
                              Qatar’s cybersecurity landscape, promising
                              enhanced services, expertise, and solutions to
                              businesses and organizations across Qatar, Oman,
                              Bahrain, and Kuwait. The partnership also
                              introduces a unique Sentinel CyberShield platform
                              in Qatar Microsoft data center powered by
                              Microsoft Sentinel to provide Modern SOC services.
                              As Qatar aims to become a prominent digital hub,
                              the demand for robust cybersecurity measures has
                              never been more critical. Mannai Microsoft
                              Solutions{" "}
                            </p>
                          </div>
                          <div class="newstextbg">
                            <p>
                              <i class="icon ion-person"></i> AUTHOR | MANSI
                              ARUNAKAR
                              <br />
                              <i class="icon ion-ios-timer-outline"></i> MONDAY
                              - SEPTEMBER 25, 2023
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mrsection">
                      <div class="col-12 col-lg-6 mob-pad-20 ">
                        <div class="news-item nw2 ">
                          <div class="newsspartpluselement wow rotateIn">
                            {" "}
                            <img src={pluselement} alt="" />
                          </div>
                          <h5
                            class="wow fadeInUp"
                            data-wow-delay="0.4s"
                            data-wow-duration="1s"
                          >
                            NEWS - 23
                          </h5>
                          <h6
                            class="wow fadeInUp"
                            data-wow-delay="0.6s"
                            data-wow-duration="1s"
                          >
                            MANNAI HOSTED QATAR <br />
                            NATIONAL DAY EVENT
                          </h6>
                          <div class="newstext">
                            <p>
                              Mannai – Microsoft Solutions, an ICT division of
                              Mannai Trading Company WLL and a leading Microsoft
                              Solutions provider in Qatar, is thrilled to
                              announce its strategic partnership with Wizard
                              Cyber, a global Cybersecurity firm. This
                              collaboration marks a significant milestone in
                              Qatar’s cybersecurity landscape, promising
                              enhanced services, expertise, and solutions to
                              businesses and organizations across Qatar, Oman,
                              Bahrain, and Kuwait. The partnership also
                              introduces a unique Sentinel CyberShield platform
                              in Qatar Microsoft data center powered by
                              Microsoft Sentinel to provide Modern SOC services.
                              As Qatar aims to become a prominent digital hub,
                              the demand for robust cybersecurity measures has
                              never been more critical. Mannai Microsoft
                              Solutions{" "}
                            </p>
                          </div>
                          <div class="newstextrightbg">
                            <p>
                              <i class="icon ion-person"></i> AUTHOR | MANSI
                              ARUNAKAR
                              <br />
                              <i class="icon ion-ios-timer-outline"></i> MONDAY
                              - SEPTEMBER 25, 2023
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-lg-6 newsdotsbgright mobnone">
                        <div class="news-item ">
                          <div
                            class="news-item-photo zoomingnews wow fadeInDown"
                            data-wow-delay=".2s"
                            data-wow-offset="150"
                          >
                            {" "}
                            <img src={newsimg1} alt="" class="img-fluid" />
                            <div class="blogimgtpluselement wow rotateIn">
                              {" "}
                              <img src={pluselement} alt="" />
                            </div>
                            <div
                              class="newsimgrbbtn wow fadeInUp"
                              data-wow-delay="0.4s"
                            >
                              {" "}
                              <a class="btn btn-primary mr-4 fr " href="#">
                                READ NEWS{" "}
                                <i class="icon ion-ios-arrow-thin-right"></i>
                              </a>{" "}
                            </div>
                          </div>
                          <div class="blogimgtpluselement wow rotateIn">
                            {" "}
                            <img src={pluselement} alt="" />
                          </div>
                          <div class="newsimgarelement ">
                            {" "}
                            <img
                              src={element2png}
                              alt=""
                              class="ani-left-right"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row tabnone">
                      <div class="col-12 col-lg-6 newsdotsbgleft">
                        <div class="news-item mob-pad-20 ">
                          <div
                            class="news-item-photo zoomingnews wow fadeInDown"
                            data-wow-delay=".2s"
                            data-wow-offset="150"
                          >
                            {" "}
                            <img src={newsimg1} alt="" class="img-fluid" />
                            <div class="blogimgtpluselement wow rotateIn">
                              {" "}
                              <img src={pluselement} alt="" />
                            </div>
                            <div
                              class="newsimgrbbtn wow fadeInUp"
                              data-wow-delay="0.4s"
                            >
                              {" "}
                              <a class="btn btn-primary mr-4 fr " href="#">
                                READ NEWS{" "}
                                <i class="icon ion-ios-arrow-thin-right"></i>
                              </a>{" "}
                            </div>
                          </div>
                          <div class="blogimgtpluselement wow rotateIn">
                            {" "}
                            <img src={pluselement} alt="" />
                          </div>
                          <div class="newsimgarelement ">
                            {" "}
                            <img
                              src={element2png}
                              alt=""
                              class="ani-left-right"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-lg-6 ">
                        <div class="news-item nw1 ">
                          <div class="newsspartpluselement wow rotateIn">
                            {" "}
                            <img src={pluselement} alt="" />
                          </div>
                          <h5
                            class="wow fadeInUp"
                            data-wow-delay="0.4s"
                            data-wow-duration="1s"
                          >
                            NEWS - 23
                          </h5>
                          <h6
                            class="wow fadeInUp"
                            data-wow-delay="0.6s"
                            data-wow-duration="1s"
                          >
                            MANNAI HOSTED QATAR <br />
                            NATIONAL DAY EVENT
                          </h6>
                          <div class="newstext">
                            <p>
                              Mannai – Microsoft Solutions, an ICT division of
                              Mannai Trading Company WLL and a leading Microsoft
                              Solutions provider in Qatar, is thrilled to
                              announce its strategic partnership with Wizard
                              Cyber, a global Cybersecurity firm. This
                              collaboration marks a significant milestone in
                              Qatar’s cybersecurity landscape, promising
                              enhanced services, expertise, and solutions to
                              businesses and organizations across Qatar, Oman,
                              Bahrain, and Kuwait. The partnership also
                              introduces a unique Sentinel CyberShield platform
                              in Qatar Microsoft data center powered by
                              Microsoft Sentinel to provide Modern SOC services.
                              As Qatar aims to become a prominent digital hub,
                              the demand for robust cybersecurity measures has
                              never been more critical. Mannai Microsoft
                              Solutions{" "}
                            </p>
                          </div>
                          <div class="newstextbg">
                            <p>
                              <i class="icon ion-person"></i> AUTHOR | MANSI
                              ARUNAKAR
                              <br />
                              <i class="icon ion-ios-timer-outline"></i> MONDAY
                              - SEPTEMBER 25, 2023
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text-center">
                      <a class="btn btn-primary mr-4  " href="#">
                        EXPLORE MORE{" "}
                        <i class="icon ion-ios-arrow-thin-right"></i>
                      </a>
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

export default Blogandnews;
