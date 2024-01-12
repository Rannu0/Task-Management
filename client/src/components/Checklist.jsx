import React from "react";
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

function Checklist() {
  return (
    <div class="col-md-7">
      <div class="h-100 p-10 text-bg-dark rounded-3">
        <section className="vh-100">
          <MDBContainer className="py-5 h-100">
            <MDBRow className="d-flex justify-content-center align-items-center">
              <MDBCol xl="10">
                <MDBCard style={{ borderRadius: "15px" }}>
                  <MDBCardBody className="p-5">
                    <h6 className="checklist-title mb-3">Todo List</h6>
                    <div className="d-flex justify-content-center align-items-center mb-4">
                      <MDBTextArea
                    
                        id="textAreaExample"
                        rows={4}
                        wrapperClass="flex-fill"
                      />
                      <MDBBtn type="submit" size="lg" className="ms-2">
                        Add
                      </MDBBtn>
                    </div>
                    <MDBListGroup className="mb-0">
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                        <div className="d-flex align-items-center">
                          <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheckChecked"
                            className="me-3"
                          />
                          Task list and assignments
                        </div>
                        <MDBTooltip
                          tag="a"
                          wrapperProps={{ href: "#!" }}
                          title="Remove item"
                        >
                          <MDBIcon fas icon="times" color="primary" />
                        </MDBTooltip>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                        <div className="d-flex align-items-center">
                          <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheckChecked"
                            className="me-3"
                            defaultChecked
                          />
                          <s>Dapibus ac facilisis in</s>
                        </div>
                        <MDBTooltip
                          tag="a"
                          wrapperProps={{ href: "#!" }}
                          title="Remove item"
                        >
                          <MDBIcon fas icon="times" color="primary" />
                        </MDBTooltip>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                        <div className="d-flex align-items-center">
                          <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheck"
                            className="me-3"
                          />
                          Morbi leo risus
                        </div>
                        <MDBTooltip
                          tag="a"
                          wrapperProps={{ href: "#!" }}
                          title="Remove item"
                        >
                          <MDBIcon fas icon="times" color="primary" />
                        </MDBTooltip>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                        <div className="d-flex align-items-center">
                          <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheck"
                            className="me-3"
                          />
                          Porta ac consectetur ac
                        </div>
                        <MDBTooltip
                          tag="a"
                          wrapperProps={{ href: "#!" }}
                          title="Remove item"
                        >
                          <MDBIcon fas icon="times" color="primary" />
                        </MDBTooltip>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                        <div className="d-flex align-items-center">
                          <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheckChecked"
                            className="me-3"
                            defaultChecked
                          />
                          Vestibulum at eros
                        </div>
                        <MDBTooltip
                          tag="a"
                          wrapperProps={{ href: "#!" }}
                          title="Remove item"
                        >
                          <MDBIcon fas icon="times" color="primary" />
                        </MDBTooltip>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                        <div className="d-flex align-items-center">
                          <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheck"
                            className="me-3"
                          />
                          Morbi leo risus
                        </div>
                        <MDBTooltip
                          tag="a"
                          wrapperProps={{ href: "#!" }}
                          title="Remove item"
                        >
                          <MDBIcon fas icon="times" color="primary" />
                        </MDBTooltip>
                      </MDBListGroupItem>
                    </MDBListGroup>
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
