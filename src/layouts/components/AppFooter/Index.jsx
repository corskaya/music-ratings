import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function AppFooter() {
  return (
    <div className={styles.footerFix}>
      <div className={styles.footerContainer}>
        <div>Music Ratings © - 2023</div>
        <div className={styles.separator}>-</div>
        <Link className={styles.footerLink} to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default AppFooter;
