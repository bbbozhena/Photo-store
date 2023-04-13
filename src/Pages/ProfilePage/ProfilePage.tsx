import { useAuth } from "../../Hooks/UseAuth";
import { redirect } from "react-router-dom";
import { useAppDispatch } from "../../Hooks/ReduxHooks";
import { removeUser } from "../../Store/Slices/UserSlice";
import { Header } from "../../Components/Header";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
export function Profile(): any {
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div className="container profile">
      <div className="user-data">
        <img src="#"></img>
        <h1>{email}</h1>
      </div>

      <div className="user-favourite">
        <div className="card-favourite">
          <span>HERE</span>
        </div>
      </div>

      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    redirect("/login")
  );
}
