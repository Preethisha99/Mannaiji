import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logopng from "../Pages/img/logo.png";
import biglogopng from "../Pages/img/biglogobg.png";
import homeicon from "../Pages/img/headerhome.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "socicon/css/socicon.css";

import "../Pages/css/animate.min.css";
import "../Pages/css/ionicons.min.css";
import "../Pages/css/style.css";
import "../Pages/js/script";

const Header = () => {
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
  );
};

export default Header;
