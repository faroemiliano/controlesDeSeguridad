import React, { useState, useEffect } from "react";
import styles from "../styles/Extintor.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function ExtintoresAlmacen() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usuarios, setUsuarios] = useState([]);

  const [formData, setFormData] = useState({
    numeroExtintor: "",
    area: "Almacen",
    serie: "",
    numeroPlaca: "",
    dateRecarga: "",
    dateVencimiento: "",
    cambioDeExtintor: "",
    tipoDeExtintor: "",
    capacidadExtintor: "",
    estadoDelCilindro: "",
    estadoDelManometro: "",
    estadoManguera: "",
    pinDeSeguirdad: "",
    observacion: "",
    datePruebaHidrostatica: "",
    empresaRecarga: "",
    user: { id: null },
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    if (name === "user") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        user: { id: value },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    try {
      const response = await axios.post(
        "https://controlesdeseguridad-production.up.railway.app/api/extintores",
        formData
      );
      console.log("Formulario enviado exitosamente:", response.data);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get(
          "https://controlesdeseguridad-production.up.railway.app/api/users"
        );
        setUsuarios(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <div className="content-wrapper">
      <div className={styles.containermtc}>
        <div className={styles.customContainermtc}>
          <div className="col-12 text-center">
            <h2>"MARTINEZ & CHIHUANTITO SAC."</h2>
            <h4>Registro e inspeccion de Extintores "Almacen"</h4>

            <div className="row mb-4">
              <div className="col-12 text-center">
                <p>FORMATO: GSE-FO-020</p>

                <p>FECHA EDICION: 9/1/2020</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="container d-flex justify-content-center align-items-center full-height text-center mt-4">
              <div className="row g-3 align-items-start">
                <div className="col-12 col-md-4">
                  <label className="form-label">Numero Extintor</label>
                  <input
                    type="number"
                    className="form-control"
                    name="numeroExtintor"
                    value={formData.numeroExtintor}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-md-4">
                  <label className="form-label">Serie</label>
                  <input
                    type="text"
                    className="form-control"
                    name="serie"
                    value={formData.serie}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-md-4">
                  <label className="form-label">Numero Placa</label>
                  <input
                    type="number"
                    className="form-control"
                    name="numeroPlaca"
                    value={formData.numeroPlaca}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="container d-flex justify-content-center align-items-center full-height text-center mt-4">
              <div className="col-md-3">
                <label className="form-label">Recarga</label>
                <input
                  className="form-control"
                  type="date"
                  name="dateRecarga"
                  value={formData.dateRecarga}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Vencimiento</label>
                <input
                  className="form-control"
                  type="date"
                  name="dateVencimiento"
                  value={formData.dateVencimiento}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Cambio de Extintor</label>
                <input
                  className="form-control"
                  type="date"
                  name="cambioDeExtintor"
                  value={formData.cambioDeExtintor}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Prueba Hidrostatica</label>
                <input
                  className="form-control"
                  type="date"
                  name="datePruebaHidrostatica"
                  value={formData.datePruebaHidrostatica}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row g-3 mt-5">
              <div className="col-md-5">
                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="tipos">
                    Tipo de Extintor
                  </label>
                  <select
                    className="form-select"
                    id="tipos"
                    name="tipoDeExtintor"
                    value={formData.tipoDeExtintor}
                    onChange={handleChange}
                  >
                    <option value="">Tipos</option>
                    <option value="PQS">PQS</option>
                    <option value="CO2">CO2</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <label
                    className="input-group-text"
                    htmlFor="capacidadExtintor"
                  >
                    Capacidad del Extintor
                  </label>
                  <select
                    className="form-select"
                    id="capacidadExtintor"
                    name="capacidadExtintor"
                    value={formData.capacidadExtintor}
                    onChange={handleChange}
                  >
                    <option value="">Capacidad</option>
                    <option value="1 KL">1 KL</option>
                    <option value="2 KL">2 KL</option>
                    <option value="3 KL">3 KL</option>
                    <option value="4 KL">4 KL</option>
                    <option value="5 KL">5 KL</option>
                    <option value="6 KL">6 KL</option>
                    <option value="7 KL">7 KL</option>
                    <option value="8 KL">8 KL</option>
                    <option value="9 KL">9 KL</option>
                    <option value="10 KL">10 KL</option>
                    <option value="11 KL">11 KL</option>
                    <option value="12 KL">12 KL</option>
                  </select>
                </div>
              </div>
              <div className="col-md-8">
                <div className="input-group mb-5">
                  <label className="input-group-text" htmlFor="empresaRecarga">
                    Empresa de Recarga
                  </label>
                  <input
                    type="text"
                    className="form-control col-md-6"
                    name="empresaRecarga"
                    value={formData.empresaRecarga}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 col-12 text-center">
              <h3>INSPECCIÓN GENERAL DEL EXTINTOR</h3>
            </div>

            <div className="row g-4 mt-3 justify-content-center">
              {[
                "estadoDelCilindro",
                "estadoDelManometro",
                "estadoManguera",
                "pinDeSeguirdad",
              ].map((item) => (
                <div key={item} className="col-12 col-md-3 text-center">
                  <label className="form-label">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </label>
                  <div className="btn-group d-flex" role="group">
                    <input
                      type="radio"
                      className="btn-check"
                      name={item}
                      id={`${item}-bueno`}
                      value="bueno"
                      checked={formData[item] === "bueno"}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-success"
                      htmlFor={`${item}-bueno`}
                    >
                      BUENO
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name={item}
                      id={`${item}-malo`}
                      value="malo"
                      checked={formData[item] === "malo"}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-danger"
                      htmlFor={`${item}-malo`}
                    >
                      MALO
                    </label>
                  </div>
                </div>
              ))}
            </div>

            <div className="input-group mt-4">
              <span className="input-group-text">Observaciones</span>
              <textarea
                type="text"
                className="form-control"
                name="observacion"
                value={formData.observacion}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="input-group input-group-sm mb-3 mt-3">
              <span className="input-group-text">Responsable de Recarga</span>
              <select
                className="form-control"
                name="user"
                value={formData.user.id}
                onChange={handleChange}
              >
                <option value="">Selecciona un responsable</option>
                {isLoading ? (
                  <option value="">Cargando...</option>
                ) : error ? (
                  <option value="">Error al cargar datos</option>
                ) : (
                  usuarios.map((usuario) => (
                    <option key={usuario.id} value={usuario.id}>
                      {usuario.name} {usuario.lastname}
                    </option>
                  ))
                )}
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ExtintoresAlmacen;
