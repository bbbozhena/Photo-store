import { Link } from "react-router-dom";
import { Login } from "../../Components/Login";
import "./LoginPage.css";
function LoginPage() {
  return (
    <div className="container">
      <div className="login">
        <h1>Login</h1>
        <Login />
        <p>
          or <Link to="/register">register</Link>
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
