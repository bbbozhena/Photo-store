import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <h1>Login</h1>
      <p>
        or <Link to="/register">register</Link>
      </p>
    </div>
  );
}
export default Login;
