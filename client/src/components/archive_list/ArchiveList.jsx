import React from "react";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

function ArchiveList(props) {
  const tasks = props.archiveTasks;
  const unarchiveTask = props.unarchiveTask;

  function createTaskList(task) {
    return (
      <MDBListGroupItem >
      <div className="archive-list">
      {task}
        <MDBBtn
          type="submit"
          className="ms-2 delete-button"
          color="white"
          rounded
          onClick={() => unarchiveTask(task)}

        >
          <i class="fas fa-arrow-rotate-left"></i>
        </MDBBtn>

      </div>
        
      </MDBListGroupItem>
    );
  }

  return (
    <div className="h-95 p-5 bg-body-tertiary border rounded-3 mt-2">
      <h3 className="archive-list-title">Archive</h3>
      <p>Good Job!</p>

      <MDBListGroup light small>
        {tasks.map((task) => createTaskList(task))}
      </MDBListGroup>
      
    </div>
  );
}

export default ArchiveList;
