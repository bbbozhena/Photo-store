import { useAppDispatch } from "../Hooks/ReduxHooks";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Forma } from "./Forma";
import { setUser } from "../Store/Slices/UserSlice";

const SignUp = () => {
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
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

  return <Forma title="register" handleClick={handleRegister} />;
};
export { SignUp };
