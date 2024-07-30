import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={`main-footer ${styles.footerContainer}`}>
      <strong>
        Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
      </strong>
      All rights reserved.
      <div className="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.2.0
      </div>
    </footer>
  );
}
