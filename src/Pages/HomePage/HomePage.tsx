import { useAuth } from "../../Hooks/UseAuth";
import { redirect } from "react-router-dom";
import { useAppDispatch } from "../../Hooks/ReduxHooks";
import { removeUser } from "../../Store/Slices/UserSlice";
import { Header } from "../../Components/Header";
import "./HomePage.css"
function HomePage(): any {
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div className="container home">
     <Header title="Photo Store"/>
      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    redirect("/login")
  );
}

export default HomePage;
