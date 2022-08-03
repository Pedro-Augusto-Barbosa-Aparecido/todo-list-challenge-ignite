import styles from "./Task.module.css";

import { CheckCircle, Circle, Trash } from "phosphor-react";

interface TaskProps {
    id: any;
    content: string;
    checked: boolean;
    onUpdate: (id: number) => void
    onDelete: (id: number) => void

}

export function Task ({ content, checked, id, onUpdate, onDelete }: TaskProps) {
    return (
        <div className={styles.task}>
            <div className={styles.box}>
                {
                    checked ?
                    (
                        <CheckCircle size={24} weight="fill" color="var(--purple-500)" onClick={() => onUpdate(id)} />
                    ) : 
                    (
                        <Circle size={24} color="var(--blue-200)" onClick={() => onUpdate(id)} />
                    )
                }
                <p className={checked ? styles.checked : ""}>{ content }</p>
            </div>
            <button onClick={() => onDelete(id)}>
                {""}
                <Trash size={20} />
            </button>
        </div>
    );

}
