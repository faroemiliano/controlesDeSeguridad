import { Link } from "react-router-dom";
import styles from "../styles/Aside.module.css";
import imagen from "../images/logoEmpresa.png";
import imagen1 from "../images/planilla.png";

export default function Aside() {
  return (
    <aside
      className={`main-sidebar sidebar-dark-primary elevation-4 ${styles.asideNavbar}`}
    >
      {/* Brand Logo */}
      <a href="index.html" className="brand-link">
        <img
          src={imagen1}
          className="brand-image img-circle elevation-3"
          alt=""
        />
        <span className="brand-text font-weight-light">
          Planilla de Control
        </span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-4 pb-3 mb-3 d-flex">
          <div className="image">
            <img src={imagen} className=" elevation-2" alt="User Image" />
          </div>
          <div className={`info ${styles.infoLink}`}>
            <a href="#" className="d-block">
              MARTINEZ Y CHIHUANTITO SAC
            </a>
          </div>
        </div>
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}

            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-fire-extinguisher"></i>

                <p>
                  Registro Extintores
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/extintores/unidad" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Extintores Unidad</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/extintores/almacen" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Extintores Almacen</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/extintores/mtc" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Extintores MTC</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/lucesEmergencia" className="nav-link">
                <i className="nav-icon fas fa-lightbulb"></i>
                <p>Luces de Emergencia</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/espejosConvexos" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Espejos Convexos</p>
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-bolt"></i>

                <p>
                  Tableros Electricos
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/tablero/ingreso" className="nav-link">
                    <i className="fas fa-tachometer-alt me-2" />
                    <p className="mb-0">TABLERO N° 01 INGRESO</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/tablero/sotano" className="nav-link">
                    <i className="fas fa-tachometer-alt me-2" />
                    <p className="mb-0">TABLERO N° 02 SOTANO</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
