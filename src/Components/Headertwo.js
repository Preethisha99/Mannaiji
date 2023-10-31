import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logopng from "../Pages/img/logo.png";
import logob from "../Pages/img/logob.png";
import biglogopng from "../Pages/img/biglogobg.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "socicon/css/socicon.css";

import "../Pages/css/animate.min.css";
import "../Pages/css/ionicons.min.css";
import "../Pages/css/style.css";
import "../Pages/js/script";

const Headertwo = () => {
  const location = useLocation();

  useEffect(() => {}, []);

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
    <header id="header" class="header techheader">
      <div class="container-fluid mp0 clearfix">
        <div class="brand">
          <Link to="/">
            <div>
              <img src={logob} alt="" class="brand-logo" />
            </div>
          </Link>
        </div>
        <div class="homeicontech">
          <Link to="/">
            <i class="icon icon ion-home"></i>{" "}
          </Link>
        </div>
        <button class="nav-toggle-btn a-nav-toggle">
          <span class="nav-toggle nav-toggle-sm" onClick={toggleClassToHtml}>
            <span class="stick stick-1"></span>
            <span class="stick stick-2"></span>
            <span class="stick stick-3"></span>
          </span>
        </button>
      </div>
      <div class="hide-menu a-nav-toggle"></div>
      <div class="menu">
        <input
          type="text"
          class="form-control form-control-custom"
          placeholder="How can we help you?"
        />
        <div class="menu-main" id="accordion">
          <ul>
            <li class="expand">
              <a
                data-text=""
                data-toggle="collapse"
                href="#menuWhatwedo"
                role="button"
                aria-expanded="false"
                aria-controls="menuWhatwedo"
              >
                Who we are
              </a>
              <div class="collapse" id="menuWhatwedo" data-parent="#accordion">
                <ul>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Air Travel/Flights
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Hotel
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Car Rentals
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Cruises
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Rail
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Travel Insurance
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Meet &amp; Greet
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Mice
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text=""
                    >
                      Passport &amp; Visa
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
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
              <div class="collapse" id="menuLeisure" data-parent="#accordion">
                <ul>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
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
              <a
                data-text=""
                data-toggle="collapse"
                href="#menuBusiness"
                role="button"
                aria-expanded="false"
                aria-controls="menuBusiness"
              >
                Technology
              </a>
              <div class="collapse" id="menuBusiness" data-parent="#accordion">
                <ul>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
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
              <div
                class="collapse"
                id="menuTechnology"
                data-parent="#accordion"
              >
                <ul>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text="Link One"
                    >
                      Link One
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text="Link Two"
                    >
                      Link Two
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
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
              <div class="collapse" id="menuWhoweare" data-parent="#accordion">
                <ul>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text="Company Overview"
                    >
                      Company Overview
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text="Our Mission &amp; Value"
                    >
                      Our Mission &amp; Value
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text="Awards &amp; Achievements"
                    >
                      Awards &amp; Achievements
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text="Our Team / Leadership"
                    >
                      Our Team / Leadership
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
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
              <div class="collapse" id="menuResources" data-parent="#accordion">
                <ul>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text="Blogs"
                    >
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text="Newsletters"
                    >
                      Newsletters
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text="Events"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
                      data-animsition-out-class="fade-out"
                      data-text="Suppliers"
                    >
                      Suppliers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
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
              <a
                data-text=""
                data-toggle="collapse"
                href="#menuCareers"
                role="button"
                aria-expanded="false"
                aria-controls="menuCareers"
              >
                Careers
              </a>
              <div class="collapse" id="menuCareers" data-parent="#accordion">
                <ul>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
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
              <div class="collapse" id="menuContact" data-parent="#accordion">
                <ul>
                  <li>
                    <a
                      href="#"
                      class="animsition-link"
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
        <div class="menu-footer">
          <ul class="social social-rounded">
            <li>
              <a href="#">
                <i class="socicon-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="socicon-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="socicon-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="socicon-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="menu-lang">
          <a href="#" class="menu-lang-item">
            Privacy Policy
          </a>
          <a href="#" class="menu-lang-item">
            Terms &amp; Conditions
          </a>
          <a href="#" class="menu-lang-itemlast">
            Cookie Policy
          </a>
        </div>
        <div class="menu-copyright copyright">
          Copyright &copy Mannai Travels 2023-2024
        </div>
        <div class="biglogo-fixed">
          <img src="img/biglogobg.png" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Headertwo;
