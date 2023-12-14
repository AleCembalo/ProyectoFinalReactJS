import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <span>
            Chemba
            <br />
            Strain
          </span>
        </Link>
        <div className="d-flex align-items-center">
          <Link to="/">
            <button className={styles.button}>Todas</button>
          </Link>
          <Link to="/category/sativa">
            <button className={styles.button}>Sativas</button>
          </Link>
          <Link to="/category/hibrida">
            <button className={styles.button}>Híbridas</button>
          </Link>
          <Link to="/category/indica">
            <button className={styles.button}>Indicas</button>
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <Link to="/cart">
            <CartWidget />
          </Link>
        </div>
      </nav>
    </>
  );
};
