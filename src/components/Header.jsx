import imagen from "../images/logoEmpresa.png";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <nav
      className={`main-header navbar navbar-expand navbar-white navbar-light ${styles.navbarContainer}`}
    >
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="/index.html" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link" role="button">
            Contact
          </a>
        </li>
      </ul>
      <div className="container d-flex justify-content-center align-items-center full-height text-center mt-1">
        <h4>INVERSIONES MARTINEZ Y CHIHUANTITO SAC</h4>
      </div>
      <img src={imagen} alt="" className={styles.imagenNavbar} />
    </nav>
  );
}
