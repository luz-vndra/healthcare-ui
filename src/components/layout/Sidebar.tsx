import { Link } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: Props) => {
  return (
    <>
      {isOpen && <div onClick={onClose} className="sidebar-overlay" />}

      <aside className={isOpen ? "sidebar open" : "sidebar"}>
        <h3>Menu</h3>
        <nav>
          <Link to="/" onClick={onClose}>
            Dashboard
          </Link>
          <br />
          <Link to="/patients" onClick={onClose}>
            Patients
          </Link>
          <br />
          <Link to="/analytics" onClick={onClose}>
            Analytics
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
