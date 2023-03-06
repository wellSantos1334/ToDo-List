import { HTMLAttributeAnchorTarget } from 'react';
import styles from './Task2.module.css';

interface ITask2 {
    content: string;
}

export function Task2({ content }: ITask2) {
    return (
        <p>{content}</p>
    );
}