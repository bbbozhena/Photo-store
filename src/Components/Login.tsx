import { Forma } from "./Forma";
import { useAppDispatch } from "../Hooks/ReduxHooks";
import { useNavigate } from "react-router-dom";
import { setUser } from "../Store/Slices/UserSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export const Login = () => {
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
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
      .catch(() => alert("Invalid user"));
  };
  return <Forma title="login" handleClick={handleLogin} />;
};

