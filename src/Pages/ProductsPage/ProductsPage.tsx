import React from "react";
import { Link } from "react-router-dom";
import "./ProductsPage.css"
export function Products() {
  return (
    <div>
      <header className="d-flex justify-content-center">
      <Link className="links" to="/people">People</Link>
        <Link className="links" to="/nature">Nature</Link>
      </header>
    </div>
  );
}
