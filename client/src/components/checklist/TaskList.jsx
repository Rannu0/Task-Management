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

  function handleDelete(task) {
    console.log("delete item");
    deleteTask(task);
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

        <MDBBtn type="submit" className="ms-2" color="white" rounded onClick={() => handleDelete(task)}>
          <MDBIcon icon="trash-alt" id="delete-icon" />
        </MDBBtn>


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
