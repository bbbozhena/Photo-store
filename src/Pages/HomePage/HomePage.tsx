import { useAuth } from "../../Hooks/UseAuth";
import { redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../Store/Slices/UserSlice";
function HomePage(): any {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    redirect("/login")
  );
}

export default HomePage;
