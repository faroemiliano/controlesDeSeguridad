import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Extintor.module.css";

function ReporterExtintores() {
  const [reportesExtintor, setReportesExtintor] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://controlesdeseguridad-production.up.railway.app/api/extintores"
      )
      .then((response) => {
        setReportesExtintor(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de los extintores:", error);
      });
  }, []);

  return (
    <div className="content-wrapper">
      <div className={styles.containermtc}>
        <div className="container mt-5">
          <h2 className="mb-4">Extintor Data</h2>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Serie</th>

                <th>Fecha Recarga</th>
                <th>Fecha Vencimiento</th>
                <th>Cambio de Extintor</th>
                <th>Tipo de Extintor</th>
                <th>Capacidad del Extintor</th>
                <th>Estado del Cilindro</th>
                <th>Estado del Manómetro</th>
                <th>Estado Manguera</th>
                <th>Pin de Seguridad</th>
                <th>Observación</th>
                <th>Responsable</th>
              </tr>
            </thead>
            <tbody>
              {reportesExtintor.map((reporte, index) => (
                <tr key={index}>
                  <td>{reporte.serie}</td>

                  <td>{reporte.dateRecarga}</td>
                  <td>{reporte.dateVencimiento}</td>
                  <td>{reporte.cambioDeExtintor} </td>
                  <td>{reporte.tipoDeExtintor} </td>
                  <td>{reporte.capacidadExtintor} </td>
                  <td>{reporte.estadoDelCilindro} </td>
                  <td> {reporte.estadoDelManometro}</td>
                  <td>{reporte.estadoManguera} </td>
                  <td> {reporte.pinDeSeguirdad}</td>
                  <td>{reporte.observacion} </td>
                  <td>{reporte.responsable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReporterExtintores;
