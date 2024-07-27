import React, { useState } from "react";
import styles from "../styles/Luces.module.css"; // Importar el módulo CSS

function LucesDeEmergencia() {
  const [ubicacion, setUbicacion] = useState("UBICACION");

  // Estado para manejar las opciones de sí/no
  const [senializacion, setSenializacion] = useState(false);
  const [faros, setFaros] = useState(false);
  const [pilas, setPilas] = useState(false);
  const [conectado, setConectado] = useState(false);
  const [limpio, setLimpio] = useState(false);
  const [funciona, setFunciona] = useState(false);

  return (
    <div className="content-wrapper">
      <div className={styles.contentWrapper}>
        <div className="container d-flex  align-items-center">
          <div
            className={`border rounded p-4 shadow-sm mt-3 ${styles.customContainer}`}
          >
            <h3 className={`mb-4 text-center ${styles.customHeading}`}>
              CONTROL DE LUCES
            </h3>
            <form className="mb-4 text-center">
              <div className="mb-4">
                <select
                  className={`form-select form-select-lg ${styles.customSelect}`}
                  aria-label="Default select example"
                  value={ubicacion}
                  onChange={(e) => setUbicacion(e.target.value)}
                >
                  <option value="UBICACION" disabled>
                    UBICACION
                  </option>
                  <option value="1">Garita</option>
                  <option value="2">Entrada principal</option>
                  <option value="3">Liquidacion</option>
                  <option value="4">Conteo de dinero</option>
                  <option value="5">Sotano</option>
                  <option value="6">Baño administrativos</option>
                  <option value="7">Baño mujeres</option>
                  <option value="8">Baño varones</option>
                  <option value="9">Vestidores</option>
                  <option value="10">Comedor</option>
                  <option value="11">Puerta 1 de almacen</option>
                  <option value="12">Puerta 2 de almacen</option>
                  <option value="13">Picking no retornable 1</option>
                  <option value="14">Picking no retornable 2</option>
                  <option value="15">Picking no retornable 3</option>
                  <option value="16">Nave 1400</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Señalización</label>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="senializacion"
                    checked={senializacion}
                    onChange={() => setSenializacion(!senializacion)}
                  />
                  <label className="form-check-label" htmlFor="senializacion">
                    {senializacion ? "Sí" : "No"}
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Conectado</label>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="conectado"
                    checked={conectado}
                    onChange={() => setConectado(!conectado)}
                  />
                  <label className="form-check-label" htmlFor="conectado">
                    {conectado ? "Sí" : "No"}
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Limpio</label>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="limpio"
                    checked={limpio}
                    onChange={() => setLimpio(!limpio)}
                  />
                  <label className="form-check-label" htmlFor="limpio">
                    {limpio ? "Sí" : "No"}
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Faros direccionados correctamente
                </label>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="faros"
                    checked={faros}
                    onChange={() => setFaros(!faros)}
                  />
                  <label className="form-check-label" htmlFor="faros">
                    {faros ? "Sí" : "No"}
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Funciona al encender</label>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="funciona"
                    checked={funciona}
                    onChange={() => setFunciona(!funciona)}
                  />
                  <label className="form-check-label" htmlFor="funciona">
                    {funciona ? "Sí" : "No"}
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Pilas en Estado</label>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="pilas"
                    checked={pilas}
                    onChange={() => setPilas(!pilas)}
                  />
                  <label className="form-check-label" htmlFor="pilas">
                    {pilas ? "Sí" : "No"}
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LucesDeEmergencia;
