import styles from "./Header.module.css";

import Logo from "./logo";

export function Header () {
    return (
        <header className={styles.header}>
            <Logo />
        </header>
    );

}