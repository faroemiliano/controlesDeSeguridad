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
              <th>Descripción</th>
              <th>Estado (Marcar con "X")</th>
              <th>Observaciones</th>
            </tr>
          </thead>
          <tbody>
            {reportesEspejos.map((reporte, index) => (
              <tr>
                <td>Ubicación</td>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="bueno"
                    />
                    <label className="form-check-label" htmlFor="bueno">
                      Bueno
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="malo"
                    />
                    <label className="form-check-label" htmlFor="malo">
                      Malo
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="falta"
                    />
                    <label className="form-check-label" htmlFor="falta">
                      Falta
                    </label>
                  </div>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese observaciones"
                  />
                </td>
              </tr>
            ))}

            {/* Más filas pueden añadirse según sea necesario */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
