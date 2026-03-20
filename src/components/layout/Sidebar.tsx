import { Link, useLocation } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: Props) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {isOpen && <div onClick={onClose} className="sidebar-overlay" />}

      <aside className={isOpen ? "sidebar open" : "sidebar"}>
        <div className="sidebar-header">Menu</div>

        <nav className="sidebar-nav">
          <Link
            to="/"
            onClick={onClose}
            className={isActive("/") ? "active" : ""}
          >
            🏠 Dashboard
          </Link>

          <Link
            to="/patients"
            onClick={onClose}
            className={isActive("/patients") ? "active" : ""}
          >
            👨‍⚕️ Patients
          </Link>

          <Link
            to="/analytics"
            onClick={onClose}
            className={isActive("/analytics") ? "active" : ""}
          >
            📊 Analytics
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
