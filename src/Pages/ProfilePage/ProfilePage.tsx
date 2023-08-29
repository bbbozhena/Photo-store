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

  const exitAcc = () => {
    redirect("/");
    dispatch(removeUser());
  };

  if (!isAuth) {
    return null;
  } else {
    return (
      <>
        <div className="container-profile">
          <div className="profile">
            <div className="user-data">
              <img className="avatar" src="img/avatar.png"></img>
              <h6>{email}</h6>
            </div>
          </div>
          <button className="log-out-button" onClick={() => exitAcc()}>
            Log out
          </button>
        </div>
        <div className="user-favourite">
          <p>Your inspiration</p>
          <div className="card-favourite">
            <span>HERE</span>
            <span>HERE</span>
            <span>HERE</span>
          </div>
        </div>
      </>
    );
  }
}
