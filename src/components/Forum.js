// import React, { useState } from "react";
import Thread from "./Thread";
// //import NewThreadModal from "./components/NewThreadModal";
// import NewThreadModal from "./NewThreadModal"; // Correct path
import React, { useState } from "react";
import "../styles/Forum.css";
import NewThreadModal from "./NewThreadModal";

import "../styles/Forum.css";

function Forum() {
  const [threads, setThreads] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addThread = (title, description) => {
    const newThread = { id: Date.now(), title, description };
    setThreads([newThread, ...threads]);
    setShowModal(false);
  };

  return (
    <div className="forum">
      <div className="header">
        <h2># forum</h2>
        <button onClick={() => setShowModal(true)}>New Thread</button>
      </div>
      <div className="thread-list">
        {threads.map((thread) => (
          <Thread key={thread.id} title={thread.title} description={thread.description} />
        ))}
      </div>
      {showModal && <NewThreadModal onClose={() => setShowModal(false)} onSave={addThread} />}
    </div>
  );
}

export default Forum;
