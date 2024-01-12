import React, { useState } from "react";
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

function ChecklistForm() {
    const [task, setTask] = useState("");
    
    function handleInputChange(event){
        setTask(event.target.value);
    }
  function handleSubmit(){
    console.log(task)
    console.log("submit clicked")
  }

  return (
    <div className="d-flex justify-content-center align-items-center mb-4">
      <MDBTextArea
        onChange={handleInputChange}
        id="checklist-form"
        rows={4}
        wrapperClass="flex-fill"
        placeholder="Add a new todo"
        value={task}
      />
      <MDBBtn type="submit" size="lg" className="ms-2" onClick={handleSubmit}>
        Add
      </MDBBtn>
    </div>
  );
}

export default ChecklistForm;
