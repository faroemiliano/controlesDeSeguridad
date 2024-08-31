import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/TablerosElec.module.css";

function ReporterTableros() {
  const [reporterTableros, SetReporterTableros] = useState([]);

  const descripciones = [
    {
      texto: "Area",
      inspeccion: "area",
    },
    {
      texto:
        "1. La estructura se encuentra en buenas condiciones y son las adecuadas para el lugar.",
      inspeccion: "estructura",
      comentario: "estructuraComentarios",
    },
    {
      texto:
        "2. Cuenta con puerta frontal, chapa, interruptor de seguridad y puesta a tierra.",
      inspeccion: "puertaChapaInterruptor",
      comentario: "puertaChapaInterruptorComentario",
    },
    {
      texto: "3. Cuenta con los tomacorrientes industriales en buen estado.",
      inspeccion: "tomaCorriente",
      comentario: "tomaCorrienteComentario",
    },
    {
      texto: "4. Se encuentra señalizada de manera correcta.",
      inspeccion: "senalizacion",
      comentario: "senalizacionComentario",
    },
    {
      texto: "5. Cuenta con interruptor o seccionador general.",
      inspeccion: "seccionado",
      comentario: "seccionadoComentario",
    },
    {
      texto:
        "6. Cuenta con interruptores bipolares o tripolares, según el caso.",
      inspeccion: "interruptor",
      comentario: "interruptorComentario",
    },
    {
      texto: "7. Cuenta con cables dimensionados según la carga.",
      inspeccion: "cablesDimension",
      comentario: "cablesDimensionComentario",
    },

    {
      texto: "8. El conexionado cuenta con terminales adecuados.",
      inspeccion: "conexionado",
      comentario: "conexionadoComenatrio",
    },
  ];

  useEffect(() => {
    axios
      .get(
        "https://controlesdeseguridad-production.up.railway.app/api/tableros-electricos"
      )
      .then((response) => {
        SetReporterTableros(response.data);
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
          <h1 className="mb-4">Tabla de Información</h1>

          {/* Información General */}
          <div className="info-header mb-4">
            <p>
              <strong>Fecha de Edición:</strong>{" "}
              {reporterTableros[0]?.fechaEdicion}
            </p>
            <p>
              <strong>Ubicación:</strong> {reporterTableros[0]?.ubicacion}
            </p>
          </div>

          {/* Tabla de Inspección */}
          <table className="table table-bordered table-striped" border="1">
            <thead>
              <tr>
                <th>Descripción</th>
                {descripciones.map((desc, index) => (
                  <th key={index}>{desc.texto}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reporterTableros.map((reporter, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>Valor</td>
                    {descripciones.map((desc, i) => {
                      if (desc.inspeccion === "area") {
                        return (
                          <td key={`${i}-valor`}>
                            {reporter[desc.inspeccion]}
                          </td>
                        );
                      } else {
                        return (
                          <td key={`${i}-valor`}>
                            {reporter[desc.inspeccion] ? "Sí" : "-"}
                          </td>
                        );
                      }
                    })}
                  </tr>
                  <tr>
                    <td>Observación</td>
                    {descripciones.map((desc, i) => (
                      <td key={`${i}-observacion`}>
                        {reporter[desc.comentario]}
                      </td>
                    ))}
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReporterTableros;
