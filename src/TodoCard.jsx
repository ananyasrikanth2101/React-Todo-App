import React, { useState } from "react";

function TodoCard({ todo, index, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(todo.name);
  const [editDescription, setEditDescription] = useState(todo.description);
  const [editStatus, setEditStatus] = useState(todo.status);

  const handleSave = () => {
    updateTodo(index, {
      name: editName,
      description: editDescription,
      status: editStatus,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditName(todo.name);
    setEditDescription(todo.description);
    setEditStatus(todo.status);
    setIsEditing(false);
  };

  const handleStatusChange = (e) => {
    setEditStatus(e.target.value);
  };

  const cardClass =
    editStatus === "Completed" ? "bg-success text-white" : "bg-warning";

  return (
    <div className="col-12 col-md-4 mb-4">
      <div className={`card ${cardClass}`}>
        <div className="card-body">
          {isEditing ? (
            <>
              <div className="mb-3">
                <label className="form-label">
                  <strong>Name: </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  <strong>Description: </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
              </div>
              <div className="mb-3 ">
                <label className="form-label ">
                  <strong>Status: </strong>
                </label>
                <select
                  className="form-select"
                  value={editStatus}
                  onChange={handleStatusChange}
                >
                  <option value="Not Completed">Not Completed</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <button className="btn btn-primary me-2" onClick={handleSave}>
                Save
              </button>
              <button className="btn btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <p>
                <strong>Name: </strong>
                {todo.name}
              </p>
              <p>
                <strong>Description: </strong>
                {todo.description}
              </p>
              <p>
                <strong>Status: </strong>
                <select
                  className="form-select w-auto d-inline-block"
                  value={todo.status}
                  onChange={(e) =>
                    updateTodo(index, { ...todo, status: e.target.value })
                  }
                >
                  <option value="Not Completed">Not Completed</option>
                  <option value="Completed">Completed</option>
                </select>
              </p>
              <button
                className="btn btn-warning me-2"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
