import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

function Weather() {
  return (
    <div>
      <MDBCard
        className="p-5 bg-body-tertiary border rounded-3"
        style={{ borderRadius: "25px", backgroundColor:"transparent"}}
      >
        <MDBCardBody className="p-4">
          <div className="d-flex justify-content-around text-center pb-3 pt-2">
            <div className="flex-column">
              <p className="small">
                <strong>-9°C</strong>
              </p>
              <MDBIcon
                fas
                icon="sun"
                size="2x"
                className="mb-3"
                style={{ color: "#ddd" }}
              />
              <p className="mb-0">
                <strong>Mon</strong>
              </p>
            </div>
            <div className="flex-column">
              <p className="small">
                <strong>-2°C</strong>
              </p>
              <MDBIcon
                fas
                icon="cloud"
                size="2x"
                className="mb-3"
                style={{ color: "#ddd" }}
              />
              <p className="mb-0">
                <strong>Tue</strong>
              </p>
            </div>
            <div className="flex-column">
              <p className="small">
                <strong>-5°C</strong>
              </p>
              <MDBIcon
                fas
                icon="snowflake"
                size="2x"
                className="mb-3"
                style={{ color: "#ddd" }}
              />
              <p className="mb-0">
                <strong>Wed</strong>
              </p>
            </div>
            <div className="flex-column">
              <p className="small">
                <strong>1°C</strong>
              </p>
              <MDBIcon
                fas
                icon="cloud"
                size="2x"
                className="mb-3"
                style={{ color: "#ddd" }}
              />
              <p className="mb-0">
                <strong>Thu</strong>
              </p>
            </div>
            <div className="flex-column">
              <p className="small">
                <strong>18°C</strong>
              </p>
              <MDBIcon
                fas
                icon="cloud-showers-heavy"
                size="2x"
                className="mb-3"
                style={{ color: "#ddd" }}
              />
              <p className="mb-0">
                <strong>Fri</strong>
              </p>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default Weather;
