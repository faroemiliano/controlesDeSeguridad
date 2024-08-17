import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Espejos.module.css";
import axios from "axios";

const EspejosConvexos = () => {
  const [codigo, setCodigo] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [edicion, setEdicion] = useState("");
  const [fechaEdicion, setFechaEdicion] = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [ruc, setRuc] = useState("");
  const [estado, setEstado] = useState("");
  const [formData, setFormData] = useState({
    inspecciones: [
      {
        ubicacion: "",
        cantidad: "",
        bueno: false,
        malo: false,
        falta: false,
        observaciones: "",
      },
    ],
  });
  const handleChange = (index, field, value) => {
    setFormData((prevState) => {
      const updatedInspecciones = [...prevState.inspecciones];
      updatedInspecciones[index] = {
        ...updatedInspecciones[index],
        [field]: value,
      };
      return {
        ...prevState,
        inspecciones: updatedInspecciones,
      };
    });
  };

  const handleAddRow = () => {
    setFormData({
      ...formData,
      inspecciones: [
        ...formData.inspecciones,
        {
          ubicacion: "",
          cantidad: "",
          bueno: false,
          malo: false,
          falta: false,
          observaciones: "",
        },
      ],
    });
  };

  const handleDeleteRow = (index) => {
    const newInspecciones = formData.inspecciones.filter((_, i) => i !== index);
    setFormData({ ...formData, inspecciones: newInspecciones });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      codigo,
      domicilio,
      edicion,
      fechaEdicion,
      razonSocial,
      ruc,
      estado,
      ...formData,
    };
    console.log(data);

    try {
      const response = await axios.post(
        "https://controlesdeseguridad-production.up.railway.app/api/espejos",
        data
      );
      console.log("Formulario enviado exitosamente:", response.data);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="content-wrapper">
      <div className={styles.containerEspejo}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center my-4">
            <h2 className="text-center">
              INVERSIONES MARTINEZ Y CHIHUANTITO SAC
            </h2>
            <div>
              <strong>CÓDIGO:</strong>
              <input
                type="text"
                className="form-control"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
            </div>
          </div>
          <h3 className="text-center">
            FORMATO DE INSPECCIONES DE ESPEJOS PANORAMICOS
          </h3>

          <table className="table table-bordered mt-4">
            <tbody>
              <tr>
                <td>CÓDIGO</td>
                <td>GSE-FO-059</td>
                <td>F. APROBACIÓN: </td>
                <td>
                  <input type="date" className="form-control w-100" />
                </td>
                <td>N° EDICIÓN</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={edicion}
                    onChange={(e) => setEdicion(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>RAZON SOCIAL</td>
                <td colSpan="5">INVERSIONES MARTINEZ Y CHIHUANTITO SAC</td>
              </tr>
              <tr>
                <td>RUC</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={ruc}
                    onChange={(e) => setRuc(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>DOMICILIO</td>
                <td colSpan="5">
                  <input
                    type="text"
                    name=""
                    value={domicilio}
                    onChange={(e) => setDomicilio(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>TIPO DE ACTIVIDAD ECONÓMICA</td>
                <td colSpan="3">ALMACENAMIENTO Y TRANSPORTE DE PRODUCTOS</td>
                <td>FECHA</td>
                <td>
                  <input
                    type="date"
                    className="form-control"
                    value={fechaEdicion}
                    onChange={(e) => setFechaEdicion(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <form onSubmit={handleSubmit}>
            <div className={styles.scroll}>
              <table className="table table-bordered mt-4">
                <thead>
                  <tr>
                    <th colSpan="2" className="text-center">
                      Descripción
                    </th>
                    <th colSpan="3">Estado (Marcar con "X")</th>
                    <th className="text-center">Observaciones</th>
                    <th>Acciones</th>
                  </tr>
                  <tr>
                    <th>Ubicación</th>
                    <th>Cantidad</th>
                    <th>Bueno</th>
                    <th>Malo</th>
                    <th>Falta</th>
                    <th>------------------------------------</th>
                    <th>--------</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.inspecciones.map((inspeccion, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control w-100"
                          value={inspeccion.ubicacion}
                          onChange={(e) =>
                            handleChange(index, "ubicacion", e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          value={inspeccion.cantidad}
                          onChange={(e) =>
                            handleChange(index, "cantidad", e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          checked={inspeccion.estado}
                          value="bueno"
                          onChange={(e) =>
                            handleChange(index, "bueno", e.target.checked)
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          checked={inspeccion.estado}
                          value="malo"
                          onChange={(e) => setEstado(e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          checked={inspeccion.estado}
                          value="falta"
                          onChange={(e) =>
                            handleChange(index, "falta", e.target.checked)
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={inspeccion.observaciones}
                          onChange={(e) =>
                            handleChange(index, "observaciones", e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleDeleteRow(index)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              type="button"
              className={styles.buttonEspejo}
              onClick={handleAddRow}
            >
              Añadir Inspección
            </button>

            <div className={styles.firma}>
              <h5>FIRMA:</h5>
              <p>INSPECCIONADO POR:</p>
              <p>
                Nombre y Apellido:
                <input
                  type="text"
                  className="form-control"
                  value={formData.nombre || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                />
              </p>
              <p>
                Cargo:
                <input
                  type="text"
                  className="form-control"
                  value={formData.cargo || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, cargo: e.target.value })
                  }
                />
              </p>
              <p>
                Empresa:
                <input
                  type="text"
                  className="form-control"
                  value={formData.empresa || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, empresa: e.target.value })
                  }
                />
              </p>
            </div>
            <div className=" d-flex justify-content-center align-items-center">
              <button
                type="submit"
                className={`btn btn-primary ${styles.espejos}`}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EspejosConvexos;
