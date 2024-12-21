import React, { useState } from "react";
import "../styles/NewThreadModal.css";

function NewThreadModal({ onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (title && description) {
      onSave(title, description);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Create a New Thread</h3>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default NewThreadModal;
