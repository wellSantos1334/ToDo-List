import styles from './Task.module.css';
import clipLogo from '../assets/Clipboard.png';

export function Task() {
    return (
        <div className={styles.main}>
            <form className={styles.taskForm} >
                <textarea
                    placeholder='Adicione uma tarefa'
                    className={styles.textarea}>
                </textarea>
                <button type="submit">Criar</button>
            </form>
            <div className={styles.taskMain}>
                <div className={styles.taskHeader}>
                    <strong className={styles.createdTask}>Tarefas criadas<p>0</p></strong>
                    <strong className={styles.doneTask}>Concluídas<p>0</p></strong>
                </div>
                <div className={styles.taskList}>
                    <img src={clipLogo}/>
                    <p>
                        <strong>Você ainda não tem tarefas cadastradas </strong><br />
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div>
            </div>
        </div>
    );
}