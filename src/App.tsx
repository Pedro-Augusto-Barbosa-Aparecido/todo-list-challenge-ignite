import "./styles/global.css";

import styles from "./styles/App.module.css";

import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <form className={styles.createForm}>
          <input />
          <button type="submit">
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default App;
