import { useState, type FormEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate, Navigate } from "react-router-dom";
import { Alert, Button, Card, Form } from "react-bootstrap";

import { useAuth } from "../auth/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="d-flex justify-content-center py-5">
      <Card className="w-100" style={{ maxWidth: "420px" }}>
        <Card.Body>
          <Card.Title className="mb-4">Login</Card.Title>

          <Form onSubmit={handleLogin} className="d-flex flex-column gap-3">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit">Login</Button>
          </Form>

          {error ? <Alert variant="danger" className="mt-3 mb-0">{error}</Alert> : null}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
