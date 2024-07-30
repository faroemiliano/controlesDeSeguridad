import React, { useState } from "react";
import styles from "../styles/TablerosElec.module.css";

function TablerosSotano() {
  const [estado, setEstado] = useState({
    estructura: "",
    puerta: "",
    tomacorrientes: "",
    senalizacion: "",
    interruptorGeneral: "",
    interruptores: "",
    cables: "",
    conexionado: "",
    mantenimiento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEstado({
      ...estado,
      [name]: value,
    });
  };

  return (
    <div className="content-wrapper">
      <div className={styles.container}>
        <div className="container">
          <div className="d-flex  justify-content-between align-items-center my-4">
            <h2 className="text-center">
              INVERSIONES MARTINEZ Y CHIHUANTITO SAC
              <div className="text-center my-4">
                <h4>FORMATO DE INSPECCIÓN DE TABLEROS ELÉCTRICOS</h4>
              </div>
            </h2>
            <div>
              <strong>CÓDIGO:</strong>
              <input type="text" className="form-control" />
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
              />
            </div>

            <div className="col-md-6 ">
              <label>
                <strong>FECHA:</strong>
              </label>
              <input
                type="date"
                className={`form-control ${styles.customInput}`}
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
              />
            </div>
            <div className="col-md-6">
              <label>
                <strong>RESPONSABLE:</strong>
              </label>
              <input
                type="text"
                className={`form-control ${styles.customInput}`}
              />
            </div>
          </div>
          <h4 className="mt-4">TABLERO N° 02 SOTANO</h4>
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
              <tr>
                <td>
                  1. La estructura se encuentra en buenas condiciones y son las
                  adecuadas para el lugar.
                </td>
                <td>
                  <input
                    type="radio"
                    name="estructura"
                    value="bueno"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="estructura"
                    value="malo"
                    onChange={handleChange}
                  />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  2. Cuenta con puerta frontal, chapa, interruptor de seguridad
                  y puesta a tierra.
                </td>
                <td>
                  <input
                    type="radio"
                    name="puerta"
                    value="bueno"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="puerta"
                    value="malo"
                    onChange={handleChange}
                  />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  3. Cuenta con los tomacorrientes industriales en buen estado.
                </td>
                <td>
                  <input
                    type="radio"
                    name="tomacorrientes"
                    value="bueno"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="tomacorrientes"
                    value="malo"
                    onChange={handleChange}
                  />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>4. Se encuentra señalizada de manera correcta.</td>
                <td>
                  <input
                    type="radio"
                    name="senalizacion"
                    value="bueno"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="senalizacion"
                    value="malo"
                    onChange={handleChange}
                  />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>5. Cuenta con interruptor o seccionador general.</td>
                <td>
                  <input
                    type="radio"
                    name="interruptorGeneral"
                    value="bueno"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="interruptorGeneral"
                    value="malo"
                    onChange={handleChange}
                  />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  6. Cuenta con interruptores bipolares o tripolares, según el
                  caso.
                </td>
                <td>
                  <input
                    type="radio"
                    name="interruptores"
                    value="bueno"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="interruptores"
                    value="malo"
                    onChange={handleChange}
                  />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>7. Cuenta con cables dimensionados según la carga.</td>
                <td>
                  <input
                    type="radio"
                    name="cables"
                    value="bueno"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="cables"
                    value="malo"
                    onChange={handleChange}
                  />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>8. El conexionado cuenta con terminales adecuados.</td>
                <td>
                  <input
                    type="radio"
                    name="conexionado"
                    value="bueno"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name="conexionado"
                    value="malo"
                    onChange={handleChange}
                  />
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <h4 className="mt-4">¿Necesita mantenimiento?</h4>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="mantenimiento"
              value="si"
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="mantenimientoNo">
              No
            </label>
          </div>

          <div className=" d-flex justify-content-center align-items-center">
            <button
              type="submit"
              className={`btn btn-primary ${styles.buttonElectr}`}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablerosSotano;
