import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginContext";

export default function Form() {
  const [input, setInput] = useState("");
  const { setUsername } = useLogin();
  const navigate = useNavigate();
  const [advice, setAdvice] = useState(false);

  const saveUsername = () => {
    if (!input.trim()) return;
    setUsername(input);
    setInput("");
    setAdvice(true);
    setTimeout(() => {
      navigate("/home");
      setAdvice(false);
    }, 3000);
  };

  return (
    <div>
      <label className="!text-green-300 py-5 text-sm">Digite seu nome</label>
      <br />
      <input
        type="text"
        placeholder="Seu nome"
        className="!border-green-300 border-2 rounded-lg bg-transparent p-1.5 outline-none !text-green-300"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        className="!bg-green-300 p-1.5 rounded-xl font-semibold mx-3"
        onClick={saveUsername}
      >
        Entrar
      </button>
      <br />
      {advice && (
        <span className="!text-green-300 text-center">Um momento...</span>
      )}
    </div>
  );
}
