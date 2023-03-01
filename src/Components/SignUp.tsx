import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { setUser } from "../Store/Slices/UserSlice";

const SignUp = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: any, password: any) => {
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.log);
  };

  return <Form title="register" handleClick={handleRegister} />;
};
export { SignUp };
