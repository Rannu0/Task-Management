import React, { useState, useEffect } from "react";
import {
  MDBCheckbox,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBTooltip,
  MDBBtn,
} from "mdb-react-ui-kit";

function TaskList(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [checkedTasks, setCheckedTasks] = useState({});
  const deleteTask = props.deleteTask;
  const archiveTask = props.archiveTask;

  // Update local tasks state when props.tasks change
  useEffect(() => {
    setTasks(props.tasks);
  }, [props.tasks]);

  // Function to handle checkbox changes
  function handleCheckboxChange(task) {
    setCheckedTasks((prevCheckedTasks) => {
      return { ...prevCheckedTasks, [task]: !prevCheckedTasks[task] };
    });
  }
  // function to handle delete button click
  function handleDelete(task) {
    deleteTask(task);
  }

  // function to handle archive button click
  function handleArchive(task){
    archiveTask(task);
  }

  function createTask(task, index) {
    return (
      <MDBListGroupItem
        key={index}
        className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
      >
        <div
          className={`d-flex align-items-center ${
            checkedTasks[task] ? "strikethrough" : ""
          }`}
        >
          <MDBCheckbox
            name="flexCheck"
            value=""
            id={`flexCheckChecked-${index}`}
            className="me-3"
            onChange={() => handleCheckboxChange(task)}
            checked={checkedTasks[task] || false}
          />

          {task}
        </div>

        <div className="button-container">

        {checkedTasks[task] && ( // Render the Archive button only if the task is checked
          <MDBBtn
            type="submit"
            className="ms-2 archive-button"
            color="white"
            rounded 
            onClick={() => handleArchive(task)}
          >
            <MDBIcon icon="archive" id="archive-icon" />
          </MDBBtn>
        )}



        <MDBBtn type="submit" className="ms-2 delete-button" color="white" rounded onClick={() => handleDelete(task)}>
          <MDBIcon icon="trash-alt" id="delete-icon" />
        </MDBBtn>

        


        </div>


      </MDBListGroupItem>
    );
  }

  return (
    <MDBListGroup className="mb-0">
      {tasks.map((task, index) => createTask(task, index))}
    </MDBListGroup>
  );
}

export default TaskList;
