import { Check, Trash, Clipboard } from "phosphor-react";
import { ITask } from "./Task";
import styles from "./TaskList.module.css";

interface ITaskFormProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export function TaskList({ tasks, setTasks }: ITaskFormProps) {
  function handleCompleteTask(id: number) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isComplete = !task.isComplete;
        }
        return task;
      })
    );
  }

  function handleDeleteTask(id: number) {
    setTasks(
      tasks.filter(function (task) {
        return task.id !== id;
      })
    );
  }

  let taskCount = tasks.length;
  let taskCompleteCount = tasks.filter((task) => {
    return task.isComplete;
  }).length;

  return (
    <>
      <div className={styles.stats}>
        <p>
          Tarefas criadas <span>{taskCount}</span>
        </p>
        <p>
          Concluídas{" "}
          {taskCount > 0 ? (
            <span>
              {taskCompleteCount} de {taskCount}
            </span>
          ) : (
            <span>{taskCount}</span>
          )}
        </p>
      </div>
      {taskCount > 0 ? (
        <ul className={styles.list}>
          {tasks.map((task) => (
            <li key={task.id} className={styles.task}>
              <button
                onClick={() => handleCompleteTask(task.id)}
                className={
                  task.isComplete ? styles.btnComplete : styles.btnIncomplete
                }
              >
                <Check weight="bold" />
              </button>
              <span
                className={
                  task.isComplete ? styles.taskComplete : styles.taskIncomplete
                }
              >
                {task.content}
              </span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className={styles.btnDelete}
              >
                <Trash weight="light" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.emptyList}>
          <Clipboard weight="light" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong> <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </>
  );
}
