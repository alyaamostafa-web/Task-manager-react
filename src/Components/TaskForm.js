import React, { useContext, useEffect, useState } from "react";
import { TaskListContext } from "./../Context/TaskListContext";

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } =
    useContext(TaskListContext);
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };
  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      // console.log(editItem);
    } else {
      setTitle("");
    }
  }, [editItem]);
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        className="task-input"
        placeholder="Add Task..."
        onChange={handleChange}
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? "Edit Task" : "Add Task"}
        </button>
        <button type="submit" className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
