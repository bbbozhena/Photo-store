import { Link } from "react-router-dom";
function Register() {
  return (
    <div>
      <h1>Register</h1>
      <p>
        Already have an account <Link to="/login">Sign in</Link>{" "}
      </p>
    </div>
  );
}
export default Register;
