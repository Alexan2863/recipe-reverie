import Button from "./UI/Button";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
const Header = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <>
      <nav
        className="d-flex justify-content-end p-3"
        style={{ backgroundColor: "#131718" }}
      >
        {currentUser ? (
          <Button className="btn btn-danger mt-3" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button to="/login">Login</Button>
        )}
      </nav>
    </>
  );
};

export default Header;
