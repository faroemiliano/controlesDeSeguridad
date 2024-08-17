import React from "react";
import { Route, Routes } from "react-router-dom";
import ExtintoresUnidad from "./ExtintoresUnidad";
import LucesDeEmergencia from "./LucesEmergencia";
import ExtintoresDeAlmacen from "./ExtintoresAlmacen";
import ExtintoresMtc from "./ExtintoresMtc";
import EspejosConvexos from "./EspejosConvexos";
import TablerosIngreso from "./TablerosIngreso";
import TablerosSotano from "./TablerosSotano";
import ReporterExtintores from "./ReporterExtintor";
import ReporterLuces from "./ReporterLuces";
import ReporterTableros from "./ReporterTableros";
import ReporterEspejos from "./ReporterEspejos";
export default function Content() {
  return (
    <Routes>
      <Route path="/lucesEmergencia" element={<LucesDeEmergencia />} />
      <Route path="/extintores/unidad" element={<ExtintoresUnidad />} />
      <Route path="/extintores/almacen" element={<ExtintoresDeAlmacen />} />
      <Route path="/extintores/mtc" element={<ExtintoresMtc />} />
      <Route path="/espejosConvexos" element={<EspejosConvexos />} />
      <Route path="/tablero/ingreso" element={<TablerosIngreso />} />
      <Route path="/tablero/sotano" element={<TablerosSotano />} />
      <Route path="/reporter/extintores" element={<ReporterExtintores />} />
      <Route path="/reporter/luces" element={<ReporterLuces />} />
      <Route path="/reporter/tableros" element={<ReporterTableros />} />
      <Route path="/reporter/espejos" element={<ReporterEspejos />} />
    </Routes>
  );
}
