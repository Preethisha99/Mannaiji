import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Technologies from "../Pages/Technologies";
import Services from "../Pages/Services";
import Whoweare from "../Pages/Whoweare";
import Leisuretravel from "../Pages/Leisuretravel";
import Businesstravel from "../Pages/Businesstravel";
import Blogandnews from "../Pages/Blogsandnews";
import VisitThailand from "../Pages/Visitthailand";

const PRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Technologies" element={<Technologies />} />
        <Route path="/Whoweare" element={<Whoweare />} />
        <Route path="/Leisuretravel" element={<Leisuretravel />} />
        <Route path="/Businesstravel" element={<Businesstravel />} />
        <Route path="/Blogsandnews" element={<Blogandnews />} />
        <Route path="/Blogsandnews/visitThailand" element={<VisitThailand />} />
      </Routes>
    </>
  );
};

export default PRoute;
