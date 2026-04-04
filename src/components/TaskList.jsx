import "./TaskList.css";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      <h2>Pedidos en curso</h2>

      {tasks.map((task) => (
        <div
          key={task._id}
          className={`task ${task.completed ? "completed" : ""}`}
        >
          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <div className="task-buttons">
            <button
              className="btn-toggle"
              onClick={() => onToggle(task)}
            >
              {task.completed ? "Desmarcar" : "Completar"}
            </button>

            <button
              className="btn-delete"
              onClick={() => onDelete(task._id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;