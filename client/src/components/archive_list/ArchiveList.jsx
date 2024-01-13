import React from "react";

function ArchiveList(props) {
    
  const tasks = props.archiveTasks;

  function createTaskList() {
    return (
      <div className="h-95 p-5 bg-body-tertiary border rounded-3 mt-2">
        <h3 className="archive-list-title">Archive Lists</h3>
        <p>Good Job!</p>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }

  return createTaskList();
}

export default ArchiveList;
