import React from "react";
import SuspenseBoundary from "../components/SuspenseBoundary";
import PaymentMethod from "../components/PaymentMethod";

const PaymentMethodPage = () => {
  return (
    <SuspenseBoundary>
      <PaymentMethod />
    </SuspenseBoundary>
  );
};

export default PaymentMethodPage;
