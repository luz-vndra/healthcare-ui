import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ width: "200px" }}>
      <h3>Menu</h3>
      <nav>
        <Link to="/">Dashboard</Link>
        <br />
        <Link to="/patients">Patients</Link>
        <br />
        <Link to="/analytics">Analytics</Link>
      </nav>
    </div>
  );
};

export default Sidebar;