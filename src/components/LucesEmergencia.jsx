import React, { useState } from "react";
import styles from "../styles/Luces.module.css"; // Importar el módulo CSS
import "bootstrap/dist/css/bootstrap.min.css";

function LucesDeEmergencia() {
  const [data, setData] = useState({
    inspeccionador: "JAHIR OLASCUAGA VASQUEZ",
    cargo: "PREVENCIONISTA-T3",
    fecha: "31/1/2024",
    ubicaciones: [
      { id: 1, ubicacion: "Garita" },
      { id: 2, ubicacion: "Entrada principal" },
      { id: 3, ubicacion: "Liquidacion" },
      { id: 4, ubicacion: "Conteo de dinero" },
      { id: 5, ubicacion: "Sotano" },
      { id: 6, ubicacion: "Baño administrativos" },
      { id: 7, ubicacion: "Baño mujeres" },
      { id: 8, ubicacion: "Baño varones" },
      { id: 9, ubicacion: "Vestidores" },
      { id: 10, ubicacion: "Comedor" },
      { id: 11, ubicacion: "Puerta 1 de almacen" },
      { id: 12, ubicacion: "Puerta 2 de almacen" },
      { id: 13, ubicacion: "Picking no retornable 1" },
      { id: 14, ubicacion: "Picking no retornable 2" },
      { id: 15, ubicacion: "Picking no retornable 3" },
      { id: 16, ubicacion: "Nave 1400" },
    ],
    observaciones: "",
    firma: "",
  });

  const handleInputChange = (e, idx, field) => {
    const { name, value } = e.target;
    setData((prevState) => {
      const updatedUbicaciones = [...prevState.ubicaciones];
      updatedUbicaciones[idx] = { ...updatedUbicaciones[idx], [field]: value };
      return { ...prevState, ubicaciones: updatedUbicaciones };
    });
  };

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API
    console.log("Formulario enviado:", data);
  };

  return (
    <div className="content-wrapper">
      <div className={styles.containermtc}>
        <div className={styles.customContainermtc}>
          <div className="col-12 text-center">
            <h2>Registro de Extintores</h2>
            <p>INVERSIONES MARTINEZ Y CHIHUANTITO SAC</p>
            <p>FORMATO: CODIGO GSE- FO-022</p>
            <p>"INSPECCIÓN MENSUAL DE LUCES DE EMERGENCIA"</p>
            <p>FECHA DE EDICIÓN: 5/10/2021</p>
            <p>EDICIÓN: 3</p>
          </div>

          <div className="mt-4 col-12 text-center">
            <h3>INSPECCIÓN MENSUAL DE LUCES DE EMERGENCIA</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row g-4 mt-3 justify-content-center">
              <div className={`table-responsive ${styles.scrollTable}`}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>N°</th>
                      <th>UBICACIÓN</th>
                      <th>SEÑALIZACION</th>
                      <th>
                        "LOS FAROS ESTAN DIRECCIONADOS A LAS ZONAS DE TRÁNSITO"
                      </th>
                      <th>PILAS EN BUEN ESTADO</th>
                      <th>CONECTADO</th>
                      <th>FUNCIONA AL ENCENDER</th>
                      <th>LIMPIO</th>
                      <th>OBSERVACIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.ubicaciones.map((item, idx) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.ubicacion}</td>
                        <td>
                          <input
                            type="radio"
                            name={`señalizacion-${item.id}`}
                            value="Sí"
                            onChange={(e) =>
                              handleInputChange(e, idx, "señalizacion")
                            }
                          />{" "}
                          Sí
                          <input
                            type="radio"
                            name={`señalizacion-${item.id}`}
                            value="No"
                            onChange={(e) =>
                              handleInputChange(e, idx, "señalizacion")
                            }
                          />{" "}
                          No
                        </td>
                        <td>
                          <input
                            type="radio"
                            name={`direccionados-${item.id}`}
                            value="Sí"
                            onChange={(e) =>
                              handleInputChange(e, idx, "direccionados")
                            }
                          />{" "}
                          Sí
                          <input
                            type="radio"
                            name={`direccionados-${item.id}`}
                            value="No"
                            onChange={(e) =>
                              handleInputChange(e, idx, "direccionados")
                            }
                          />{" "}
                          No
                        </td>
                        <td>
                          <input
                            type="radio"
                            name={`pilas-${item.id}`}
                            value="Sí"
                            onChange={(e) => handleInputChange(e, idx, "pilas")}
                          />{" "}
                          Sí
                          <input
                            type="radio"
                            name={`pilas-${item.id}`}
                            value="No"
                            onChange={(e) => handleInputChange(e, idx, "pilas")}
                          />{" "}
                          No
                        </td>
                        <td>
                          <input
                            type="radio"
                            name={`conectado-${item.id}`}
                            value="Sí"
                            onChange={(e) =>
                              handleInputChange(e, idx, "conectado")
                            }
                          />{" "}
                          Sí
                          <input
                            type="radio"
                            name={`conectado-${item.id}`}
                            value="No"
                            onChange={(e) =>
                              handleInputChange(e, idx, "conectado")
                            }
                          />{" "}
                          No
                        </td>
                        <td>
                          <input
                            type="radio"
                            name={`funciona-${item.id}`}
                            value="Sí"
                            onChange={(e) =>
                              handleInputChange(e, idx, "funciona")
                            }
                          />{" "}
                          Sí
                          <input
                            type="radio"
                            name={`funciona-${item.id}`}
                            value="No"
                            onChange={(e) =>
                              handleInputChange(e, idx, "funciona")
                            }
                          />{" "}
                          No
                        </td>
                        <td>
                          <input
                            type="radio"
                            name={`limpio-${item.id}`}
                            value="Sí"
                            onChange={(e) =>
                              handleInputChange(e, idx, "limpio")
                            }
                          />{" "}
                          Sí
                          <input
                            type="radio"
                            name={`limpio-${item.id}`}
                            value="No"
                            onChange={(e) =>
                              handleInputChange(e, idx, "limpio")
                            }
                          />{" "}
                          No
                        </td>
                        <td>
                          <input
                            type="text"
                            name={`observaciones-${item.id}`}
                            onChange={(e) =>
                              handleInputChange(e, idx, "observaciones")
                            }
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
                name="observaciones"
                value={data.observaciones}
                onChange={handleGeneralChange}
                rows="3"
              ></textarea>
            </div>

            <div className="mt-4">
              <label className="form-label">Firma del Inspeccionador</label>
              <input
                type="text"
                className="form-control"
                name="firma"
                value={data.firma}
                onChange={handleGeneralChange}
              />
            </div>

            <div className="mt-4 text-center">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LucesDeEmergencia;
