import "./styles/global.css";

import styles from "./styles/App.module.css";

import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react";
import { TaskList } from "./components/TaskList";
import { TaskProps } from "./components/Task";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([
      { id: 1, content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", checked: false },
      { id: 2, content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", checked: false },
      { id: 3, content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", checked: false },
  ])
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
        <TaskList tasks={tasks} />
      </div>
    </div>
  )
}

export default App;
