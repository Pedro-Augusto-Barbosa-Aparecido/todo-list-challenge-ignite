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
            
                finished ? (!(total === 0) ? `${totalFinished} de ${total}` : total) : total

            }
        </span>

    );

}
