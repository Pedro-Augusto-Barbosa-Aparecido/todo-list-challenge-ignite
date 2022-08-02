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
          <input 
            type={"text"}
            name="task"
            id="task"
            placeholder="Adicione uma nova tarefa"
          />
          <button type="submit">
            Criar
            <PlusCircle size={22} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default App;
