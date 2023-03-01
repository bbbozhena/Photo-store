import { useState } from "react";

const Form = ({ title, handleClick }: { title: string; handleClick: any }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      ></input>
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      ></input>
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  );
};
export { Form };