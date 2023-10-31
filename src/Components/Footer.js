import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import serviceimg10 from "../Pages/img/serviceimg10.jpg";
import biglogopng from "../Pages/img/biglogobg.png";
import element2png from "../Pages/img/element2.png";
import pluselement from "../Pages/img/pluselement.png";
import uparrowelement from "../Pages/img/uparrowelement.png";
import footerimg from "../Pages/img/footerimg.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "socicon/css/socicon.css";

import "../Pages/css/animate.min.css";
import "../Pages/css/ionicons.min.css";
import "../Pages/css/style.css";
import "../Pages/js/script";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {}, []);

  return (
    <footer
      id="footer"
      className="col-md-12 row position-relative m-0"
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
        <img src={footerimg} alt="" />{" "}
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
                <a className="btn btn-primary mr-4 fr submitbtn" href="#">
                  SUBMIT <i className="icon ion-ios-arrow-thin-right"></i>
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
                <a className="text-decoration-none text-white" href="#">
                  WHO WE ARE{" "}
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  WHAT WE DO{" "}
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  CAREERS
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  CONTACT US{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-4 mb-5 wow fadeInUp">
            <h5>LEGAL</h5>
            <ul className="footer-nav">
              <li>
                <a className="text-decoration-none text-white" href="#">
                  PRIVACY POLICY{" "}
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  TERMS OF USE{" "}
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
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
    </footer>
  );
};

export default Footer;
