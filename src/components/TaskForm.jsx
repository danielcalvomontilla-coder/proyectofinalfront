import { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    onCreate({ title, description });

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nuevo pedido</h2>

      <input
        type="text"
        placeholder="Cliente"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Artículos"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Crear</button>
    </form>
  );
};

export default TaskForm;