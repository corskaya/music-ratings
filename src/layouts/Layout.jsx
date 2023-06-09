import AppHeader from "./components/AppHeader/Index";
import AppContent from "./components/AppContent/Index";
import AppFooter from "./components/AppFooter/Index";
import styles from "./Layout.module.css";
import { useLocation } from "react-router-dom";

function Layout() {
  const routesWithBackgroundImage = ["", "login", "register", "artist"];
  const { pathname } = useLocation();
  const pageName = pathname.split("/")[1];

  return (
    <div
      className={
        routesWithBackgroundImage.includes(pageName)
          ? styles.layoutContainer
          : ""
      }
    >
      <div>
        <AppHeader />
      </div>
      <div>
        <AppContent />
      </div>
      <div>
        <AppFooter />
      </div>
    </div>
  );
}

export default Layout;
