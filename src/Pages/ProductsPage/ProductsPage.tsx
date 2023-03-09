import React from "react";
import { Link } from "react-router-dom";
import "./ProductsPage.css";
export function Products() {
  return (
    <div className="products-page">
      <div className="products-name">
        <Link className="links-photo rainbow-1" to="/people">
          People
        </Link>
        <Link className="links-photo rainbow-2" to="/nature">
          Nature
        </Link>
      </div>
    </div>
  );
}
