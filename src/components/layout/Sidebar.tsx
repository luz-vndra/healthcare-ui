import { Link, useLocation } from "react-router-dom";
import { Nav, Offcanvas } from "react-bootstrap";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/patients", label: "Patients" },
  { to: "/analytics", label: "Analytics" },
];

const SidebarLinks = ({
  pathname,
  onClose,
}: {
  pathname: string;
  onClose: () => void;
}) => (
  <Nav className="flex-column gap-1 p-3">
    {links.map((link) => (
      <Nav.Link
        key={link.to}
        as={Link}
        to={link.to}
        active={pathname === link.to}
        onClick={onClose}
      >
        {link.label}
      </Nav.Link>
    ))}
  </Nav>
);

const Sidebar = ({ isOpen, onClose }: Props) => {
  const location = useLocation();

  return (
    <>
      <aside className="app-sidebar border-end bg-light d-none d-lg-block">
        <div className="px-3 pt-3 text-uppercase small text-muted">Menu</div>
        <SidebarLinks pathname={location.pathname} onClose={onClose} />
      </aside>

      <Offcanvas show={isOpen} onHide={onClose} placement="start" className="d-lg-none">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <SidebarLinks pathname={location.pathname} onClose={onClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
