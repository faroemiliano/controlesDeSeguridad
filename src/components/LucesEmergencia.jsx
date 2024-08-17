import React, { useState } from "react";
import styles from "../styles/Luces.module.css"; // Importar el módulo CSS
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function LucesDeEmergencia() {
  const [codigo, setCodigo] = useState("");
  const [fechaEdición, setFechaEdicion] = useState("");
  const [edicion, setEdicion] = useState("");
  const [date, setDate] = useState("");
  const [area, setArea] = useState("");
  // const [senalizacion, setSenializacion] = useState("");
  // const [direcionado, setDirecionado] = useState("");
  const [acceso, setAcceso] = useState("");
  // const [conectado, setConectado] = useState("");
  // const [funciona, setFunciona] = useState("");
  // const [limpio, setLimpio] = useState("");
  // const [observaciones, setObservaciones] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataUbicacion, setDataUbicacion] = useState({
    ubicaciones: [
      {
        id: 1,
        ubicacion: "Garita",
        senalizacion: false,
        direcionado: false,
        pilasEstado: false,
        conectado: false,
        funciona: false,
        limpio: false,
        observaciones: "",
      },
      {
        id: 2,
        ubicacion: "Entrada principal",
        senalizacion: false,
        direcionado: false,
        pilasEstado: false,
        conectado: false,
        funciona: false,
        limpio: false,
        observaciones: "",
      },
      {
        id: 3,
        ubicacion: "Liquidacion",
        senalizacion: false,
        direcionado: false,
        pilasEstado: false,
        conectado: false,
        funciona: false,
        limpio: false,
        observaciones: "",
      },
      {
        id: 4,
        ubicacion: "Conteo de dinero",
        senalizacion: false,
        direcionado: false,
        pilasEstado: false,
        conectado: false,
        funciona: false,
        limpio: false,
        observaciones: "",
      },
      {
        id: 5,
        ubicacion: "Sotano",
        senalizacion: false,
        direcionado: false,
        pilasEstado: false,
        conectado: false,
        funciona: false,
        limpio: false,
        observaciones: "",
      },
      {
        id: 6,
        ubicacion: "Baño administrativos",
        senalizacion: false,
        direcionado: false,
        pilasEstado: false,
        conectado: false,
        funciona: false,
        limpio: false,
        observaciones: "",
      },
      {
        id: 7,
        ubicacion: "Baño mujeres",
        senalizacion: false,
        direcionado: false,
        pilasEstado: false,
        conectado: false,
        funciona: false,
        limpio: false,
        observaciones: "",
      },
      {
        id: 8,
        ubicacion: "Baño varones",
        senalizacion: false,
        direcionado: false,
        pilasEstado: false,
        conectado: false,
        funciona: false,
        limpio: false,
        observaciones: "",
      },
      {
        id: 9,
        ubicacion: "Vestidores",
        senalizacion: false,
        direcionado: false,
        pilasEstado: false,
        conectado: false,
        funciona: false,
        limpio: false,
        observaciones: "",
      },
      {
        id: 10,
        ubicacion: "Comedor",
        senalizacion: false,
        direcionado: false,
        pilasEstado: false,
        conectado: false,
        funciona: false,
        limpio: false,
        observaciones: "",
      },
      {
        id: 11,
        ubicacion: "Puerta 1 de almacen",
        senalizacion: false,
        direcionado: false,
        pilasEstado: false,
        conectado: false,
        funciona: false,
        limpio: false,
        observaciones: "",
      },
      {
        id: 12,
        ubicacion: "Puerta 2 de almacen",
        senalizacion: false,
        direcionado: false,
        pilasEstado: false,
        conectado: false,
        funciona: false,
        limpio: false,
        observaciones: "",
      },
      {
        id: 13,
        ubicacion: "Picking no retornable 1",
        senalizacion: false,
        direcionado: false,
        pilasEstado: false,
        conectado: false,
        funciona: false,
        limpio: false,
        observaciones: "",
      },
      {
        id: 14,
        ubicacion: "Picking no retornable 2",
        senalizacion: false,
        direcionado: false,
        pilasEstado: false,
        conectado: false,
        funciona: false,
        limpio: false,
        observaciones: "",
      },
      {
        id: 15,
        ubicacion: "Picking no retornable 3",
        senalizacion: false,
        direcionado: false,
        pilasEstado: false,
        conectado: false,
        funciona: false,
        limpio: false,
        observaciones: "",
      },
      {
        id: 16,
        ubicacion: "Nave 1400",
        senalizacion: false,
        direcionado: false,
        pilasEstado: false,
        conectado: false,
        funciona: false,
        limpio: false,
        observaciones: "",
      },
    ],
  });

  const handleInputChange = (value, idx, field) => {
    setDataUbicacion((prevState) => {
      const updatedUbicaciones = [...prevState.ubicaciones];
      updatedUbicaciones[idx] = { ...updatedUbicaciones[idx], [field]: value };
      return { ...prevState, ubicaciones: updatedUbicaciones };
    });
  };

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setDataUbicacion((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = {
      codigo,
      fechaEdición,
      edicion,
      date,
      area,
      // senalizacion,
      // direcionado,
      acceso,
      // conectado,
      // funciona,
      // limpio,
      // observaciones,
      conclusion,
      ...dataUbicacion,
    };
    try {
      const response = await axios.post(
        "https://controlesdeseguridad-production.up.railway.app/api/emergency-lights",
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
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API
    console.log("Formulario enviado:", data);
  };

  return (
    <div className="content-wrapper">
      <div className={styles.container}>
        <div className={`col-12 text-center`}>
          <h3 className="mt-3">"INSPECCIÓN MENSUAL DE LUCES DE EMERGENCIA"</h3>
          <p>
            FORMATO: CODIGO:
            <input type="text" onChange={(e) => setCodigo(e.target.value)} />
          </p>

          <p>
            FECHA DE EDICIÓN:
            <input
              type="date"
              onChange={(e) => setFechaEdicion(e.target.value)}
            />
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-5 mt-3 justify-content-center">
            <div className="text-center">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th className="col-1">UBICACIÓN</th>
                    <th className="col-1">SEÑALIZACION</th>
                    <th className="col-1">"FAROS DIRECCIONADOS AL TRANSITO"</th>
                    <th className="col-1">PILAS EN BUEN ESTADO</th>
                    <th className="col-1">CONECTADO</th>
                    <th className="col-1">FUNCIONA AL ENCENDER</th>
                    <th className="col-1">LIMPIO</th>
                    <th className="col-3">OBSERVACIONES</th>
                  </tr>
                </thead>
                <tbody>
                  {dataUbicacion.ubicaciones.map((item, idx) => (
                    <tr key={item.id}>
                      <td className="text-center col-2">{item.ubicacion}</td>
                      <td className="text-center">
                        <div className="d-flex flex-column align-items-center">
                          <label className="form-check-label me-2">
                            <input
                              type="radio"
                              name={`señalizacion-${item.id}`}
                              value="Sí"
                              onChange={() =>
                                handleInputChange(true, idx, "senalizacion")
                              }
                            />
                            Sí
                          </label>
                          <label className="form-check-label">
                            <input
                              type="radio"
                              name={`señalizacion-${item.id}`}
                              value="No"
                              onChange={(e) =>
                                handleInputChange(false, idx, "senalizacion")
                              }
                            />
                            No
                          </label>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="d-flex flex-column align-items-center">
                          <label className="form-check-label me-2">
                            <input
                              type="radio"
                              name={`direccionados-${item.id}`}
                              value="Sí"
                              onChange={() =>
                                handleInputChange(true, idx, "direcionado")
                              }
                            />
                            Sí
                          </label>
                          <label className="form-check-label">
                            <input
                              type="radio"
                              name={`direccionados-${item.id}`}
                              value="No"
                              onChange={() =>
                                handleInputChange(false, idx, "direcionado")
                              }
                            />
                            No
                          </label>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="d-flex flex-column align-items-center">
                          <label className="form-check-label me-2">
                            <input
                              type="radio"
                              name={`pilas-${item.id}`}
                              value="Sí"
                              onChange={(e) =>
                                handleInputChange(true, idx, "pilas")
                              }
                            />
                            Sí
                          </label>
                          <label className="form-check-label">
                            <input
                              type="radio"
                              name={`pilas-${item.id}`}
                              value="No"
                              onChange={(e) =>
                                handleInputChange(false, idx, "pilas")
                              }
                            />
                            No
                          </label>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="d-flex flex-column align-items-center">
                          <label className="form-check-label me-2">
                            <input
                              type="radio"
                              name={`conectado-${item.id}`}
                              value="Sí"
                              onChange={(e) =>
                                handleInputChange(true, idx, "conectado")
                              }
                            />
                            Sí
                          </label>
                          <label className="form-check-label">
                            <input
                              type="radio"
                              name={`conectado-${item.id}`}
                              value="No"
                              onChange={(e) =>
                                handleInputChange(false, idx, "conectado")
                              }
                            />
                            No
                          </label>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="d-flex flex-column align-items-center">
                          <label className="form-check-label me-2">
                            <input
                              type="radio"
                              name={`funciona-${item.id}`}
                              value="Sí"
                              onChange={(e) =>
                                handleInputChange(true, idx, "funciona")
                              }
                            />
                            Sí
                          </label>
                          <label className="form-check-label">
                            <input
                              type="radio"
                              name={`funciona-${item.id}`}
                              value="No"
                              onChange={(e) =>
                                handleInputChange(false, idx, "funciona")
                              }
                            />
                            No
                          </label>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="d-flex flex-column align-items-center">
                          <label className="form-check-label me-2">
                            <input
                              type="radio"
                              name={`limpio-${item.id}`}
                              value="Sí"
                              onChange={(e) =>
                                handleInputChange(true, idx, "limpio")
                              }
                            />
                            Sí
                          </label>
                          <label className="form-check-label">
                            <input
                              type="radio"
                              name={`limpio-${item.id}`}
                              value="No"
                              onChange={(e) =>
                                handleInputChange(false, idx, "limpio")
                              }
                            />
                            No
                          </label>
                        </div>
                      </td>
                      <td className="text-center">
                        <input
                          type="text"
                          name={`observaciones-${item.id}`}
                          onChange={(e) =>
                            handleInputChange(
                              e.target.value,
                              idx,
                              "observaciones"
                            )
                          }
                          className="form-control"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4">
            <label className="form-label">Conclusiones</label>
            <textarea
              className="form-control"
              value={conclusion}
              onChange={(e) => setConclusion(e.target.value)}
              rows="3"
            ></textarea>
          </div>

          <div className="mt-4">
            <label className="form-label">Firma del Inspeccionador</label>
            <input
              type="text"
              className="form-control"
              name="firma"
              value={dataUbicacion.firma || ""}
              onChange={handleGeneralChange}
            />
          </div>
          {error && (
            <div className="alert alert-danger mt-4" role="alert">
              {error}
            </div>
          )}
          <div className="mt-4 text-center">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LucesDeEmergencia;
