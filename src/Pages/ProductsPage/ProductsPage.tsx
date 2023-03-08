import React from "react";
import "./ProductsPage.css"
export function Products() {
  return (
    <div>
      <header className="d-flex justify-content-center">
        <p>People</p>
        <p>Nature</p>
      </header>
      <div className="cards ">
        <div className="card">
          <img src="/img/bubble.png" width={300} height={300}></img>
          <p>Forest</p>
          <div className="card-buttons">
            <button>Add</button>
            <button>Like</button>
          </div>
        </div>
        <div className="card">
          <img src="/img/bubble.png" width={300} height={300}></img>
          <p>Forest</p>
          <div className="card-buttons">
            <button>Add</button>
            <button>Like</button>
          </div>
        </div>
        <div className="card">
          <img src="/img/bubble.png" width={300} height={300}></img>
          <p>Forest</p>
          <div className="card-buttons">
            <button>Add</button>
            <button>Like</button>
          </div>
        </div>
        <div className="card">
          <img src="/img/bubble.png" width={300} height={300}></img>
          <p>Forest</p>
          <div className="card-buttons">
            <button>Add</button>
            <button>Like</button>
          </div>
        </div>
        <div className="card">
          <img src="/img/bubble.png" width={300} height={300}></img>
          <p>Forest</p>
          <div className="card-buttons">
            <button>Add</button>
            <button>Like</button>
          </div>
        </div>
        <div className="card">
          <img src="/img/bubble.png" width={300} height={300}></img>
          <p>Forest</p>
          <div className="card-buttons">
            <button>Add</button>
            <button>Like</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
