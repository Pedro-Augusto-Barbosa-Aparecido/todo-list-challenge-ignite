import styles from "./QuantityIndicator.module.css";

type QuantityIndicator = {
    total: any;
    finished?: boolean;
    totalFinished?: number;
}

export function QuantityIndicator ({ total, finished = false, totalFinished }: QuantityIndicator) {
    return (
        <span className={styles.indicator}>
            { 
            
                finished ? (!(totalFinished === 0) ? `${totalFinished} de ${total}` : totalFinished) : total

            }
        </span>

    );

}
