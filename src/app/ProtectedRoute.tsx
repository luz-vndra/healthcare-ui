import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { Spinner } from "react-bootstrap";

const ProtectedRoute = ({ children }: any) => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div>
        {" "}
        <Spinner size="sm" /> Loading...
      </div>
    );

  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;