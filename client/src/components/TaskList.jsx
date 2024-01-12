import React from "react";
import {
  MDBCheckbox,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBTooltip,
} from "mdb-react-ui-kit";

function TaskList(props) {
  const tasks = props.tasks;

  function createTask(task, index) {
    return (
      <MDBListGroupItem
        key={index}
        className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
      >
        <div className="d-flex align-items-center">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id={`flexCheckChecked-${index}`}
            className="me-3"
          />
          {task}
        </div>
        <MDBTooltip tag="a" wrapperProps={{ href: "#!" }} title="Remove item">
          <MDBIcon fas icon="times" color="primary" />
        </MDBTooltip>
      </MDBListGroupItem>
    );
  }

  function crossOver(task, index){

  }

  return <MDBListGroup className="mb-0"> {tasks.map((task, index) => createTask(task, index))}</MDBListGroup>;
}

export default TaskList;
