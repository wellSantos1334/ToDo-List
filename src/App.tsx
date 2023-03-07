// import './App.css'
import { useState } from 'react';
import { Header } from './components/Header';
import { ITask, Task } from './components/Task';
import { TaskList } from './components/TaskList';
import styles from './App.module.css';
import './global.css';

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  return (
    <div>
      <Header />
      <div className={styles.content}>
      <Task tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  )
}

