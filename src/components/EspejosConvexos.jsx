import React from "react";

function EspejosConvexos() {
  return (
    <div className="content-wrapper">
      <h1>ESPEJOS</h1>
      <form>
        {/* Campos del formulario para Registro de Extintores */}
        <div>
          <label>Nombre del Extintor:</label>
          <input type="text" name="nombre" />
        </div>
        <div>
          <label>Ubicación:</label>
          <input type="text" name="ubicacion" />
        </div>
        <div>
          <label>Fecha de Inspección:</label>
          <input type="date" name="fecha_inspeccion" />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default EspejosConvexos;
