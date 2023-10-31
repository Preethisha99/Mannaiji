import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "socicon/css/socicon.css";

import "../Pages/css/animate.min.css";
import "../Pages/css/ionicons.min.css";
import "../Pages/css/style.css";
import "../Pages/js/script";

import pluselementaward from "../Pages/img/pluselementaward.png";
import uparrowelement from "../Pages/img/uparrowelement.png";
import c1 from "../Pages/img/c1.png";
import c2 from "../Pages/img/c2.png";
import c3 from "../Pages/img/c3.png";
import c4 from "../Pages/img/c4.png";
import c5 from "../Pages/img/c5.png";
import partnerbg from "../Pages/img/partnerbg.jpg";

const Partners = () => {
  const location = useLocation();

  useEffect(() => {}, []);

  return (
    <div
      class="partners whoweare"
      style={{
        backgroundImage: `url(${partnerbg})`,
        backgroundPositionX: "center",
      }}
    >
      <div class="slide-container">
        <div class="partnerpluselement wow rotateIn">
          {" "}
          <img src={pluselementaward} alt="" />
        </div>
        <div class="uparrowelementpartner">
          {" "}
          <img src={uparrowelement} alt="" class="ani-top-bottom" />
        </div>
        <div className="row justify-content-between mobpad15">
          <div className="col-12 col-lg-5">
            <div class="contentpartpartner">
              <h3 class="wow slideInLeft" data-wow-duration="1.2s">
                PARTNERING WITH
                <br />
                THE BEST
              </h3>
              <p
                class="normaltext  wow slideInLeft"
                data-wow-delay=".1s"
                data-wow-duration=".80s"
              >
                {" "}
                With exclusive global partnerships with some of the world’s
                biggest names in travel, Mannai Travel offers businesses and
                individual customers travel experiences that are seamless,
                satisfying and the best-in-class. Through these partnerships, we
                cover hotel bookings, visa services, train travel, experiential
                travel, personal car rentals, luxury cruises, mice, etc.{" "}
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            {" "}
            <div class="rightpartpartner">
              <p
                class="normaltext  wow slideInRight"
                data-wow-delay=".1s"
                data-wow-duration=".80s"
              >
                {" "}
                OUR PARTNERS
              </p>
              <h3 class="wow slideInRight" data-wow-duration="1.2s">
                {" "}
                JOIN US <br />
                BE A PART <br />
                OF RAPIDLY <br />
                GROWING <br />
                TRAVEL GROUP
                <br />
                IN QATAR.
                <br />
              </h3>
            </div>
            <div class="row no-gutters partner-list">
              <div class="col partner-item">
                <a href="#" class="inside">
                  <img src={c1} alt="" />
                </a>
              </div>
              <div class="col partner-item">
                <a href="#" class="inside">
                  <img src={c2} alt="" />
                </a>
              </div>
              <div class="col partner-item">
                <a href="#" class="inside">
                  <img src={c3} alt="" />
                </a>
              </div>
              <div class="col partner-item">
                <a href="#" class="inside">
                  <img src={c4} alt="" />
                </a>
              </div>
              <div class="col partner-item">
                <a href="#" class="inside">
                  <img src={c5} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
