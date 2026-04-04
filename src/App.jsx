import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);

  // Cargar tareas
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  // Crear
  const handleCreate = async (task) => {
    await createTask(task);
    loadTasks();
  };

  // Eliminar
  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  // Completar / descompletar
  const handleToggle = async (task) => {
    await updateTask(task._id, {
      completed: !task.completed,
    });
    loadTasks();
  };

  return (
  <div className="container">
    <h1>📝 Listado de Pedidos</h1>

    <TaskForm onCreate={handleCreate} />
    <TaskList
      tasks={tasks}
      onDelete={handleDelete}
      onToggle={handleToggle}
    />
  </div>
);
}

export default App;