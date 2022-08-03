import styles from "./Task.module.css";

import classNames from "classnames";

import { CheckCircle, Circle, Trash } from "phosphor-react";

export interface TaskProps {
    id: any;
    content: string;
    checked: boolean;

}

export function Task ({ content, checked }: TaskProps) {
    return (
        <div className={styles.task}>
            {
                checked ? <CheckCircle size={24} weight="fill" color="var(--purple-500)" /> : <Circle size={24} color="var(--blue-200)" />
            }
            <p className={checked ? styles.checked : ""}>{ content }</p>
            <button>
                {""}
                <Trash size={20} />
            </button>
        </div>
    );

}
