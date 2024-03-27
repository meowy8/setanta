import React from "react";
import SuspenseBoundary from "../components/SuspenseBoundary";
import Summary from "../components/Summary";

const SummaryPage = () => {
  return (
    <SuspenseBoundary>
      <Summary />
    </SuspenseBoundary>
  );
};

export default SummaryPage;
