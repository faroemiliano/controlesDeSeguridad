import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Luces.module.css";

function ReporterLuces() {
  const [reportes, setReportes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://controlesdeseguridad-production.up.railway.app/api/emergency-lights"
      )
      .then((response) => {
        setReportes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de los extintores:", error);
      });
  }, []);

  return (
    <div className="content-wrapper">
      <div className={styles.container}>
        <div className="container mt-5">
          <h2>Reporte de Luces de Emergencia</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Código</th>
                <th>Fecha de Edición</th>
                <th>Edición</th>
                <th>Fecha</th>
                <th>Área</th>
                <th>Ubicación</th>
                <th>Señalización</th>
                <th>Direcionado</th>
                <th>Pilas en Buen Estado</th>
                <th>Conectado</th>
                <th>Funciona</th>
                <th>Limpio</th>
                <th>Observaciones</th>
                <th>Conclusiones</th>
              </tr>
            </thead>
            <tbody>
              {reportes.map((reporte, idx) => (
                <tr key={idx}>
                  <td>{reporte.codigo}</td>
                  <td>{reporte.fechaEdición}</td>
                  <td>{reporte.edicion}</td>
                  <td>{reporte.date}</td>
                  <td>{reporte.area}</td>
                  {reporte.ubicaciones.map((ubicacion, idx) => (
                    <tr key={idx}>
                      <td>{ubicacion.ubicacion}</td>
                      <td>{ubicacion.senalizacion ? "Sí" : "No"}</td>
                      <td>{ubicacion.direcionado ? "Sí" : "No"}</td>
                      <td>{ubicacion.pilasEstado ? "Sí" : "No"}</td>
                      <td>{ubicacion.conectado ? "Sí" : "No"}</td>
                      <td>{ubicacion.funciona ? "Sí" : "No"}</td>
                      <td>{ubicacion.limpio ? "Sí" : "No"}</td>
                      <td>{ubicacion.observaciones}</td>
                    </tr>
                  ))}
                  <td>{reporte.conclusion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReporterLuces;
