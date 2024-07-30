import React from "react";
import styles from "../styles/Extintor.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ExtintoresAlmacen() {
  return (
    <div className="content-wrapper">
      <div className={styles.containermtc}>
        <div className={` ${styles.customContainermtc}`}>
          <div className="col-12 text-center">
            <h2>Registro de Extintores</h2>
            <p>"Extintores AlMACEN"</p>
          </div>

          <div className="container d-flex justify-content-center align-items-center full-height text-center mt-4 ">
            <div className="row g-3 align-items-start">
              <div className="col-12 col-md-4">
                <label className="form-label">Numero Extintor</label>
                <input type="number" class="form-control" />
              </div>
              <div className="col-12 col-md-4">
                <label class="form-label">Serie</label>
                <input type="text" class="form-control" />
              </div>
              <div className="col-12 col-md-4">
                <label className="form-label">Numero Placa</label>
                <input type="number" class="form-control" />
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-center align-items-center full-height text-center mt-4 ">
            <div className="col-md-3">
              <label className="form-label">Recarga</label>
              <input className="form-control" type="date" id="fechaRecarga" />
            </div>
            <div class="col-md-3">
              <label className="form-label">Vencimiento</label>
              <input
                className="form-control"
                type="date"
                id="fechaVencimiento"
              />
            </div>
            <div class="col-md-3">
              <label className="form-label ">Cambio de Extintor</label>
              <input
                className="form-control"
                type="date"
                id="cambioExtintor "
              />
            </div>
          </div>
          <div className="row g-3 mt-5 ">
            <div className="col-md-5">
              <div className="input-group mb-3">
                <label className="input-group-text" for="tipos">
                  Tipo de Extintor
                </label>
                <select className="form-select" id="tipos">
                  <option selected>Tipos</option>
                  <option value="1">PQS</option>
                  <option value="2">CO2</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3">
                <label className="input-group-text" for="capacidadExtintor">
                  Capacidad del Extintor
                </label>
                <select className="form-select" id="capacidadExtintor">
                  <option selected>Capacidad</option>
                  <option value="1">1 KL</option>
                  <option value="2">2 KL</option>
                  <option value="3">3 KL</option>
                  <option value="4">4 KL</option>
                  <option value="5">5 KL</option>
                  <option value="6">6 KL</option>
                  <option value="7">7 KL</option>
                  <option value="8">8 KL</option>
                  <option value="9">9 KL</option>
                  <option value="10">10 KL</option>
                  <option value="11">11 KL</option>
                  <option value="12">12 KL</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-4 col-12 text-center">
            <h3>INSPECCIÓN GENERAL DEL EXTINTOR</h3>
          </div>

          <div className="row g-4 mt-3 justify-content-center">
            {["Cilindro", "Manómetro", "Manguera", "PIN DE SEGURIDAD"].map(
              (item, idx) => (
                <div key={idx} className="col-12 col-md-3 text-center">
                  <label className="form-label">{item}</label>
                  <div
                    className="btn-group d-flex"
                    role="group"
                    aria-label={`Button group for ${item.toLowerCase()}`}
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name={item.toLowerCase()}
                      id={`${item.toLowerCase()}-bueno`}
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-success"
                      htmlFor={`${item.toLowerCase()}-bueno`}
                    >
                      BUENO
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name={item.toLowerCase()}
                      id={`${item.toLowerCase()}-malo`}
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-danger"
                      htmlFor={`${item.toLowerCase()}-malo`}
                    >
                      MALO
                    </label>
                  </div>
                </div>
              )
            )}
            <div className="input-group mt-4">
              <span className="input-group-text">Observaciones</span>
              <textarea
                className="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
            <div className="input-group input-group-sm mb-3 mt-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Responsable de Recarga
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtintoresAlmacen;
