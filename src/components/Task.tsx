import styles from "./Task.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";

export interface ITask {
  id: number;
  content: string;
  isComplete: boolean;
}

interface ITaskFormProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export function Task({ tasks, setTasks }: ITaskFormProps) {
  const userTasks = {
    id: 1,
    content: "Beber água",
    isComplete: false,
  };

  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([
      {
        id: userTasks.id,
        content: userTasks.content,
        isComplete: userTasks.isComplete,
      },
      ...tasks,
    ]);
    console.log(setTasks);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleNewTaskChange}
        required
      />
      <button type="submit" title="Criar nova tarefa">
        Criar <PlusCircle />
      </button>
    </form>
  );
}
