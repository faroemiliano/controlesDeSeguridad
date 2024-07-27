import React from "react";
import styles from "../styles/Extintor.module.css";

function ExtintoresAlmacen() {
  return (
    <div className="content-wrapper">
      <div className={styles.container}>
        <div className={`container ${styles.customContainermtc}`}>
          <div class="col-12 text-center">
            <h2>Registro de Extintores</h2>
            <p>"Extintores Almacen"</p>
          </div>

          <div class="container d-flex justify-content-center align-items-center full-height text-center mt-4 ">
            <div class="row g-3 align-items-start">
              <div class="col-12 col-md-4">
                <label class="form-label">Numero Extintor</label>
                <input type="number" class="form-control" />
              </div>
              <div class="col-12 col-md-4">
                <label class="form-label">Serie</label>
                <input type="text" class="form-control" />
              </div>
              <div class="col-12 col-md-4">
                <label class="form-label">Numero Placa</label>
                <input type="number" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row g-3 mt-5 justify-content-space-around text-center">
            <div class="col-md-2">
              <label class="form-label">Fecha de Recarga</label>
              <input class="form-control" type="date" id="fechaRecarga" />
            </div>
            <div class="col-md-2">
              <label class="form-label">Fecha de Vencimiento</label>
              <input class="form-control" type="date" id="fechaVencimiento" />
            </div>
            <div class="col-md-2">
              <label class="form-label ">Cambio de Extintor</label>
              <input class="form-control" type="date" id="cambioExtintor " />
            </div>
          </div>
          <div class="row g-3 mt-5 ">
            <div class="col-md-3">
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">
                  Tipo de Extintor
                </label>
                <select class="form-select" id="inputGroupSelect01">
                  <option selected>Tipos</option>
                  <option value="1">PQS</option>
                  <option value="2">CO2</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="input-group mb-3">
                <label class="input-group-text" for="capacidadExtintor">
                  Capacidad del Extintor
                </label>
                <select class="form-select" id="capacidadExtintor">
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

          <div class="mt-4 col-12 text-center">
            <h3>INSPECCION GENERAL DEL EXTINTOR</h3>
          </div>

          <div class="row g-3 mt-4 justify-content-center">
            <div class="col-12 col-md-2 text-center">
              <label class="form-label">CILINDRO</label>
              <div
                class="btn-group d-flex"
                role="group"
                aria-label="Button group for cilindro"
              >
                <input
                  type="radio"
                  class="btn-check"
                  name="cilindro"
                  id="cilindro-bueno"
                  autocomplete="off"
                />
                <label class="btn btn-outline-success" for="cilindro-bueno">
                  BUENO
                </label>

                <input
                  type="radio"
                  class="btn-check"
                  name="cilindro"
                  id="cilindro-malo"
                  autocomplete="off"
                />
                <label class="btn btn-outline-danger" for="cilindro-malo">
                  MALO
                </label>
              </div>
            </div>
            <div class="col-12 col-md-2 text-center">
              <label class="form-label">MANOMETRO</label>
              <div
                class="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <input
                  type="radio"
                  class="btn-check"
                  name="manometro"
                  id="manometro-bueno"
                  autocomplete="off"
                />
                <label class="btn btn-outline-success" for="manometro-bueno">
                  BUENO
                </label>

                <input
                  type="radio"
                  class="btn-check"
                  name="manometro"
                  id="manometro-malo"
                  autocomplete="off"
                />
                <label class="btn btn-outline-danger" for="manometro-malo">
                  MALO
                </label>
              </div>
            </div>
            <div class="col-12 col-md-2 text-center">
              <label class="form-label">MANGUERA</label>
              <div
                class="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <input
                  type="radio"
                  class="btn-check"
                  name="manguera"
                  id="manguera-bueno"
                  autocomplete="off"
                />
                <label class="btn btn-outline-success" for="manguera-bueno">
                  BUENO
                </label>

                <input
                  type="radio"
                  class="btn-check"
                  name="manguera"
                  id="manguera-malo"
                  autocomplete="off"
                />
                <label class="btn btn-outline-danger" for="manguera-malo">
                  MALO
                </label>
              </div>
            </div>
            <div class="col-12 col-md-3 text-center">
              <label class="form-label">PIN DE SEGURIDAD</label>
              <div
                class="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <input
                  type="radio"
                  class="btn-check"
                  name="pinseguridad"
                  id="pin-bueno"
                  autocomplete="off"
                />
                <label class="btn btn-outline-success" for="pin-bueno">
                  BUENO
                </label>

                <input
                  type="radio"
                  class="btn-check"
                  name="pinseguridad"
                  id="pin-malo"
                  autocomplete="off"
                />
                <label class="btn btn-outline-danger" for="pin-malo">
                  MALO
                </label>
              </div>
            </div>
            <div class="input-group mt-4">
              <span class="input-group-text">Observaciones</span>
              <textarea
                class="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
            <div class="input-group input-group-sm mb-3 mt-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                Responsable de Recarga
              </span>
              <input
                type="text"
                class="form-control"
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
