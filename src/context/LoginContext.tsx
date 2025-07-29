import { createContext, useContext, useState, type ReactNode } from "react";

// Tipo do valor do contexto
type LoginContextType = {
  username: string;
  setUsername: (name: string) => void;
};

// Criação do contexto com valor padrão
const LoginContext = createContext<LoginContextType | undefined>(undefined);

// Provedor que envolve sua aplicação
export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState("");

  return (
    <LoginContext.Provider value={{ username, setUsername }}>
      {children}
    </LoginContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin deve ser usado dentro de LoginProvider");
  }
  return context;
};
