import { Header } from "../../Components/Header";
import { useAuth } from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";
import "./HomePage.css";



export function HomePage(): any {
  

  return (
    <div className="home">
      <div>
        <Header title="Photo Store" />
      </div>
      <div className="text">
        <small className="text-light text-opacity-50">Welcome to my soul</small>
        <h1 className="text-light my-2">Photo Works</h1>
        <Link
          className="text-light text-decoration-none look-button"
          to="/products"
        >
          Take a look
        </Link>
      </div>
      <div className="bubbles">
        <img src="/img/bubble.png"></img>
        <img src="/img/bubble.png"></img>
        <img src="/img/bubble.png"></img>
        <img src="/img/bubble.png"></img>
        <img src="/img/bubble.png"></img>
        <img src="/img/bubble.png"></img>
        <img src="/img/bubble.png"></img>
      </div>
    </div>
  );
}
