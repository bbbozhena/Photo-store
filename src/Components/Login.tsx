import { Form } from "./Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../Store/Slices/UserSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: any, password: any) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }: any) => {
        dispatch(
          setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          })
        );
        navigate("/");
      })
      .catch(()=> alert("Invalid user"));
  };
  return <Form title="login" handleClick={handleLogin} />;
};
export { Login };
