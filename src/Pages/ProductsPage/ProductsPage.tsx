import { Card } from "../../Components/Card";
import "./ProductsPage.css";
export function ProductsPage(): any {
  return (
    <div className="products">
      <Card title={"Test"} src={"Test"} add={false} like={false} type={"People"} />
    </div>
  );
}
