import React from "react";
import { Route, Routes } from "react-router-dom";
import ExtintoresUnidad from "./ExtintoresUnidad";
import LucesDeEmergencia from "./LucesEmergencia";
import ExtintoresDeAlmacen from "./ExtintoresAlmacen";
import ExtintoresMtc from "./ExtintoresMtc";
import EspejosConvexos from "./EspejosConvexos";
import TablerosElectricos from "./TablerosElectricos";

export default function Content(props) {
  return (
    <Routes>
      <Route path="/lucesEmergencia" element={<LucesDeEmergencia />} />
      <Route path="/extintores/unidad" element={<ExtintoresUnidad />} />
      <Route path="/extintores/almacen" element={<ExtintoresDeAlmacen />} />
      <Route path="/extintores/mtc" element={<ExtintoresMtc />} />
      <Route path="/espejosConvexos" element={<EspejosConvexos />} />
      <Route path="/tablerosElectricos" element={<TablerosElectricos />} />
    </Routes>
    // <div className="content-wrapper">
    //   <h1>{props.nombre}</h1>
    // </div>
  );
}
