import { Link } from "react-router-dom";
import { SignUp } from "../../Components/SignUp";
import "./RegisterPage.css";
function RegisterPage() {
  return (
    <div className="container ">
      <div className="register">
        <h1>Register</h1>
        <SignUp />
        <p>
          Already have an account <Link to="/login">Sign in</Link>{" "}
        </p>
      </div>
    </div>
  );
}
export default RegisterPage;
