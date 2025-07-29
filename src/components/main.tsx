import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLogin } from "../context/LoginContext";

// Tipo para cada tarefa
type Task = {
  text: string;
  done: boolean;
};

export default function Main() {
  const [task, setTask] = useState<string>("");
  const [arrayTask, setArrayTask] = useState<Task[]>([]);
  const [advice, setAdvice] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const { username } = useLogin();

  const IncludesTask = () => {
    if (task === "") {
      setAdvice(true);
    } else {
      setAdvice(false);
      setArrayTask([{ text: task, done: false }, ...arrayTask]);
      setTask("");
    }
  };

  const RemoveTask = (id: number) => {
    setArrayTask(arrayTask.filter((_, index) => index !== id));
  };

  const toggleTaskDone = (id: number) => {
    setArrayTask((prev) =>
      prev.map((task, index) =>
        index === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const selectFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
  };

  const filteredTasks = arrayTask.filter((task) => {
    if (selectedOption === "2") return !task.done; // Pendentes
    if (selectedOption === "3") return task.done; // Concluídas
    return true; // Todas ou não selecionado
  });

  return (
    <div className="mx-8 !text-green-300 flex flex-col justify-center items-center">
      <h1 className="text-2xl text-center font-semibold my-5">
        Seja Bem-vindo, {username}!
      </h1>

      <div className="my-4 flex justify-center gap-4">
        <div>
          <input
            type="text"
            placeholder="Digite aqui sua tarefa"
            className="!border-green-300 border-2 rounded-lg bg-transparent p-1"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <br />
          {advice && (
            <span className="!text-red-400 ml-3 text-sm">
              Preencha o campo acima
            </span>
          )}
        </div>
        <button
          className="!bg-green-300 !text-blue-950 p-1 font-bold rounded-lg h-[50%]"
          onClick={IncludesTask}
        >
          Adicionar
        </button>
      </div>

      <div className="backdrop-blur-md shadow-2xl">
        {arrayTask.length === 0 ? (
          <h2 className="text-lg text-center font-semibold opacity-70">
            Você ainda não possui tarefas
          </h2>
        ) : (
          <h2 className="text-lg text-center font-semibold opacity-70">
            Veja suas tarefas de hoje
          </h2>
        )}

        <select
          value={selectedOption}
          onChange={selectFilter}
          className="mt-4 ml-10 p-1 !text-blue-950 !bg-green-200 rounded-md mr-[200px]"
        >
          <option value="">Todas as tarefas</option>
          <option value="2">Pendentes</option>
          <option value="3">Concluídas</option>
        </select>

        <AnimatePresence>
          {filteredTasks.map((task, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className=" flex justify-between my-3 w-[350px] mx-auto gap-6">
                <li className={`${task.done ? "line-through opacity-50" : ""}`}>
                  <span className="text-lg">{task.text}</span>
                </li>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTaskDone(id)}
                  />
                  <button onClick={() => RemoveTask(id)}>x</button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredTasks.length === 0 && (
          <h2 className="text-center my-5 opacity-70">
            Nenhuma tarefa encontrada para esse filtro
          </h2>
        )}
      </div>
    </div>
  );
}
