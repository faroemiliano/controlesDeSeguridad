import React, { useState } from "react";
import styles from "../styles/TablerosElec.module.css";
import axios from "axios";

function TablerosIngreso() {
  const [ubicacion, setUbicacion] = useState("");
  const [date, setDate] = useState("");
  const [responsableInspeccion, setResponsableInspeccion] = useState("");
  const [responsable, setResponsable] = useState("");
  const [fechaEdicion, setFechaEdicion] = useState("");
  const [area] = useState("Sótano");
  const [inspecciones, setInspecciones] = useState({
    estructura: false,
    estructuraComentarios: "",
    puertaChapaInterruptor: false,
    puertaChapaInterruptorComentario: "",
    cablesDimension: false,
    cablesDimensionComentario: "",
    interruptor: false,
    interruptorComentario: "",
    seccionado: false,
    seccionadoComentario: "",
    senalizacion: false,
    senalizacionComentario: "",
    tomaCorriente: false,
    tomaCorrienteComentario: "",
    conexionado: false,
    conexionadoComentario: "",
  });
  const [mantenimiento, setMantenimiento] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const descripciones = [
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

    // "2. Cuenta con puerta frontal, chapa, interruptor de seguridad y puesta a tierra.",
    // "3. Cuenta con los tomacorrientes industriales en buen estado.",
    // "4. Se encuentra señalizada de manera correcta.",
    // "5. Cuenta con interruptor o seccionador general.",
    // "6. Cuenta con interruptores bipolares o tripolares, según el caso.",
    // "7. Cuenta con cables dimensionados según la carga.",
    // "8. El conexionado cuenta con terminales adecuados.",
  ];

  const changeInspeccion = (inspeccion, value) => {
    setInspecciones((prevState) => {
      const newInspecciones = { ...prevState };
      newInspecciones[inspeccion] = value;
      return newInspecciones;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const data = {
      ubicacion,
      date,
      area,
      responsableInspeccion,
      responsable,
      fechaEdicion,
      mantenimiento,
      ...inspecciones,
    };
    console.log(data);

    try {
      const response = await axios.post(
        "https://controlesdeseguridad-production.up.railway.app/api/tableros-electricos",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Formulario enviado exitosamente:", response.data);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setError("Error al enviar el formulario. Por favor, intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content-wrapper">
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center my-4">
              <h2 className="text-center">
                INVERSIONES MARTINEZ Y CHIHUANTITO SAC
                <div className="text-center my-4">
                  <h4>FORMATO DE INSPECCIÓN DE TABLEROS ELÉCTRICOS</h4>
                </div>
              </h2>
              <div>
                <strong>CÓDIGO:</strong>
                <input type="text" className="form-control" />
                <strong>FECHA EDICION:</strong>
                <input
                  type="date"
                  className="form-control"
                  value={fechaEdicion}
                  onChange={(e) => setFechaEdicion(e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>
                  <strong>LUGAR DE LA INSPECCIÓN:</strong>
                </label>
                <input
                  type="text"
                  className={`form-control ${styles.customInput}`}
                  value={ubicacion}
                  onChange={(e) => setUbicacion(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label>
                  <strong>FECHA:</strong>
                </label>
                <input
                  type="date"
                  className={`form-control ${styles.customInput}`}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>
                  <strong>RESPONSABLE INSPECCIÓN:</strong>
                </label>
                <input
                  type="text"
                  className={`form-control ${styles.customInput}`}
                  value={responsableInspeccion}
                  onChange={(e) => setResponsableInspeccion(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label>
                  <strong>RESPONSABLE:</strong>
                </label>
                <input
                  type="text"
                  className={`form-control ${styles.customInput}`}
                  value={responsable}
                  onChange={(e) => setResponsable(e.target.value)}
                />
              </div>
            </div>
            <h4 className="mt-4">TABLERO N° 02 SOTANO </h4>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>DESCRIPCIÓN</th>
                    <th>BUENO</th>
                    <th>MALO</th>
                    <th>OBSERVACIONES</th>
                  </tr>
                </thead>
                <tbody>
                  {descripciones.map((descripcion, index) => (
                    <tr key={index}>
                      <td>{descripcion.texto}</td>
                      <td>
                        <input
                          type="radio"
                          name={`estado-${index}`}
                          value="bueno"
                          checked={inspecciones[descripcion.inspeccion]}
                          onChange={() => {
                            changeInspeccion(descripcion.inspeccion, true);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name={`estado-${index}`}
                          value="malo"
                          checked={!inspecciones[descripcion.inspeccion]}
                          onChange={() => {
                            changeInspeccion(descripcion.inspeccion, false);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={inspecciones[descripcion.comentario]}
                          onChange={(e) =>
                            changeInspeccion(
                              descripcion.comentario,
                              e.target.value
                            )
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h4 className="mt-4">¿Necesita mantenimiento?</h4>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="mantenimiento"
                value="si"
                onChange={(e) => setMantenimiento(e.target.value)}
              />
              <label className="form-check-label" htmlFor="mantenimientoSi">
                Sí
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="mantenimiento"
                value="no"
                onChange={(e) => setMantenimiento(e.target.value)}
              />
              <label className="form-check-label" htmlFor="mantenimientoNo">
                No
              </label>
            </div>
            {error && (
              <div className="alert alert-danger mt-4" role="alert">
                {error}
              </div>
            )}
            <div className="d-flex justify-content-center align-items-center mt-4">
              <button
                type="submit"
                className={`btn btn-primary ${styles.buttonElectr}`}
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default TablerosIngreso;
