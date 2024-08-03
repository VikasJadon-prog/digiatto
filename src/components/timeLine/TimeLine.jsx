import React from "react";
import "../timeLine/TimeLine.css";
import Row from "react-bootstrap/Row";
import { Stepper, Step, StepLabel } from "@mui/material";

const TimeLine = ({ data }) => {


  const steps = Array(data.length).fill(" ");

  return (
    <div className="excellence-card-div">
      <Stepper activeStep={data.length-1} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Row className="flex items-start justify-center">
        {data.map((item, index) => (
          <div className="excellence-manage-card max-w-[305px]" key={index}>
            <div className="excellence-card-content">
              <h5>{item.Year}</h5>
              <p>{item.Details}</p>
            </div>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default TimeLine;
