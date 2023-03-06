import styles from './Task.module.css';
import clipLogo from '../assets/Clipboard.png';
import { ChangeEvent, FormEvent, useState } from 'react';

interface ITask {
    content: string;
}


export function Task() {

    const [tasks, setTasks] = useState([
        '',
    ]);

    const [newTask, setNewTask] = useState('')

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        setTasks([...tasks, newTask]);
        console.log(tasks);
        // setNewTask('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
    }

    return (
        <div className={styles.main}>
            <form className={styles.taskForm} onSubmit={handleCreateNewTask} >
                <textarea
                    name='task'
                    placeholder='Adicione uma tarefa'
                    className={styles.textarea}
                    onChange={handleNewTaskChange}
                >
                </textarea>
                <button type="submit">Criar</button>
            </form>
            <div className={styles.taskMain}>
                <div className={styles.taskHeader}>
                    <strong className={styles.createdTask}>Tarefas criadas<p>0</p></strong>
                    <strong className={styles.doneTask}>Concluídas<p>0</p></strong>
                </div>
                <div className={styles.taskList}>
                    <img src={clipLogo} />
                    <p>
                        {/* {tasks.map(task => {
                            return ()
                        })}
                         */}
                        
                        {/* <strong>Você ainda não tem tarefas cadastradas </strong><br />
                        Crie tarefas e organize seus itens a fazer  */}
                    </p>
                </div>
            </div>
        </div>
    );
}