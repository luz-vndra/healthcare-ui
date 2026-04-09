import { useNavigate } from "react-router-dom";
import { Button, Container, Navbar as BsNavbar } from "react-bootstrap";
import { useAuth } from "../../auth/AuthContext";

const Navbar = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <BsNavbar bg="white" expand="lg" className="border-bottom">
      <Container fluid>
        <Button
          variant="outline-secondary"
          className="d-lg-none me-2"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          Menu
        </Button>
        <BsNavbar.Brand className="fw-semibold">
          Healthcare SaaS UI Project
        </BsNavbar.Brand>
        <div className="d-flex align-items-center gap-3 ms-auto">
          <span className="text-muted small">{user?.email}</span>
          <Button variant="outline-danger" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
