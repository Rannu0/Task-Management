import React, {useState} from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTextArea,
  MDBTooltip,
} from "mdb-react-ui-kit";
import ChecklistForm from "./ChecklistForm";
import TaskList from "./TaskList";

function Checklist(props) {

    const tasks = props.tasks;
    const addTask = props.addTask;
    const deleteTask = props.deleteTask;
    const archiveTask = props.archiveTask;
 
  return (
    <div className="col-md-7">
      <div className="h-100 p-10 rounded-3">
        <section className="vh-100">
          <MDBContainer className="py-5 h-100">
            <MDBRow className="d-flex justify-content-center align-items-center">
              <MDBCol xl="10">
                <MDBCard style={{ borderRadius: "15px" }}>
                  <MDBCardBody className="p-5">
                    <h6 className="checklist-title mb-3">Todo List</h6>

                    <ChecklistForm addTask={addTask}/>
                    <TaskList tasks = {tasks} deleteTask = {deleteTask} archiveTask = {archiveTask}/>

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
    </div>
  );
}

export default Checklist;
