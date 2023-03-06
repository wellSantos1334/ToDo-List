import styles from './Header.module.css';
import todoLogo from '../assets/todo-logo.svg';

export function Header() {
    return (
        <header className={styles.teste}>
            <img src={todoLogo} alt="Logotipo ToDo-List" />
        </header>
    );
}