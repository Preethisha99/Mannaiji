import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "socicon/css/socicon.css";

import "../Pages/css/animate.min.css";
import "../Pages/css/ionicons.min.css";
import "../Pages/css/style.css";
import "../Pages/js/script";

import demobg from "../Pages/img/demobg.jpg";

const Requestform = () => {
  const location = useLocation();

  useEffect(() => {}, []);

  return (
    <div className="section p0 ">
      <div className="section-item ">
        <div className="container-fluid wow fadeInUp " data-wow-delay=".2s">
          <div className="formbg formpart row">
            <div className="col-lg-7  ">
              <h4 className="wow fadeInUp">
                ALMOST THERE TO GET YOUR DEMO ACCOUNT !{" "}
              </h4>
              <p
                className="normaltxt wow fadeInUp"
                data-wow-delay="1s"
                data-wow-duration="1.2s"
              >
                Fill the form below to get connected with our expert <br />
                to experience the Live Demo.
              </p>

              <form action="#" className="text-left wow fadeInUp">
                <div className="row justify-content-center gap-2">
                  <div className="col-md-5 ">
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      placeholder="First Name*"
                    />
                  </div>

                  <div className="col-md-5 ">
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      placeholder="Last Name*"
                    />
                  </div>
                </div>
                <div className="row justify-content-center mt-3 gap-2">
                  <div className="col-md-5 ">
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      placeholder="Company Name*"
                    />
                  </div>

                  <div className="col-md-5 ">
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      placeholder="Work Email*"
                    />
                  </div>
                </div>
                <div className="row justify-content-center mt-3 gap-2">
                  <div className="col-md-5  ">
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      placeholder="Phone Number*"
                    />
                  </div>

                  <div className="col-md-5 ">
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      placeholder="Country(India)"
                    />
                  </div>
                </div>
                <div className="row justify-content-center mt-3 gap-2">
                  <div className="col-md-5  ">
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      placeholder="P.O Box / Postal Code"
                    />
                  </div>

                  <div className="col-md-5  ">
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      placeholder="Designation"
                    />
                  </div>
                </div>
                <div className="row justify-content-center mt-3 gap-2">
                  <div className="col-md-5 ">
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      placeholder="How did you hear about us ?"
                    />
                  </div>

                  <div className="col-md-5 ">
                    <input
                      type="text"
                      className="form-control form-control-custom"
                      placeholder="Number of User’s Required "
                    />
                  </div>
                </div>
                <div className="row mt-3 tabcheck">
                  <div className="checkbox wow fadeInUp col-1 p-0 d-flex justify-content-center">
                    <input type="checkbox" className="largerCheckbox" />
                    <span className="checkmark"></span>{" "}
                  </div>
                  <p className="formtext wow fadeInUp col-11">
                    {" "}
                    By filling and submitting this form you understand and agree
                    that the use of Mannai Travels web site is subject to the
                    Mannaitravels.com <span>Terms &amp; Conditions.</span>{" "}
                    Additional details regarding Finanzz collection and use of
                    your personal information, including information about
                    access, retention, rectification, deletion, security,
                    cross-border transfers and other topics, is available in the
                    Mannaitravels.com <span>Privacy Policy.</span>
                  </p>
                </div>
                <a
                  className="btn btn-primary my-2  formbtn wow fadeInLeft"
                  data-wow-delay="1s"
                  data-wow-duration="1.2s"
                  href="#"
                >
                  REQUEST DEMO ACCOUNT{" "}
                  <i className="icon ion-ios-arrow-thin-right"></i>
                </a>{" "}
              </form>
            </div>
            <div className=" col-md-5 choose-future">
              <img src={demobg} alt="" className="wow fadeIn responsive " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requestform;
