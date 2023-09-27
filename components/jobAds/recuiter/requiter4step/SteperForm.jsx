import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FastStep from "./FastStep";
import SecondSteps from "./SecondSteps";
import JobAdsPrice from "../jobAdsPrice/JobAdsPrice";
import InterviewCandiadte from "./InterviewCandiadte";
import { useRouter } from "next/navigation";

const steps = ["Post Details", "Requirement ", "Interview Info ", "Plan"];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const navigate = useRouter();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  //   console.log("Completed steps",steps.findIndex);

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              <span className="md:block hidden text-[1.2rem] font-semibold">
                {label}
              </span>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              {activeStep === 0 && <FastStep />}
              {activeStep === 1 && <SecondSteps />}
              {activeStep === 2 && <InterviewCandiadte />}
              {activeStep === 3 && <JobAdsPrice />}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              {/* <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back */}
              {/* </Button> */}
              {/* <Box sx={{ flex: "1 1 auto", width: "100%" }} /> */}

              {/* {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))} */}
            </Box>
            <div className="w-full  flex items-center justify-center">
              {activeStep === steps.length - 1 ? (
                <button
                  onClick={() => navigate.push("/recruiter-dashboard")}
                  className="w-full bg-[#ff10f0] text-[white] font-semibold rounded-sm py-2 "
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="w-full bg-[#ff10f0] text-[white] font-semibold rounded-sm py-2 "
                >
                  Next
                </button>
              )}
            </div>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
