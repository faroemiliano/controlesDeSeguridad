import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Espejos.module.css";

export default function ReporterEspejos() {
  const [reportesEspejos, setReportesEspejos] = useState([]);

  useEffect(() => {
    axios
      .get("https://controlesdeseguridad-production.up.railway.app/api/espejos")
      .then((response) => {
        setReportesEspejos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de los extintores:", error);
      });
  }, []);

  return (
    <div className="content-wrapper">
      <div className={styles.containerEspejo}>
        <h2 className="mb-4">Reporte de Inspección</h2>

        {/* Campos de entrada */}
        <form>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="fecha">Fecha</label>
              <input
                type="date"
                className="form-control"
                id="fecha"
                name="fecha"
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="ruc">RUC</label>
              <input
                type="text"
                className="form-control"
                id="ruc"
                name="ruc"
                placeholder="Ingrese el RUC"
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="domicilio">Domicilio</label>
              <input
                type="text"
                className="form-control"
                id="domicilio"
                name="domicilio"
                placeholder="Ingrese el domicilio"
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="numeroEdicion">Número de Edición</label>
              <input
                type="text"
                className="form-control"
                id="numeroEdicion"
                name="numeroEdicion"
                placeholder="Ingrese el número de edición"
              />
            </div>
          </div>
        </form>

        {/* Tabla de inspección */}
        <h3 className="mt-5">Inspección</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Ubicacion</th>
              <th>Estado</th>
              <th>Observaciones</th>
            </tr>
          </thead>
          <tbody>
            {reportesEspejos.map((reporte, index) => (
              <tr>
                <td>{reporte.ubicacion}</td>
                <td></td>
                <td></td>
              </tr>
            ))}

            {/* Más filas pueden añadirse según sea necesario */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
